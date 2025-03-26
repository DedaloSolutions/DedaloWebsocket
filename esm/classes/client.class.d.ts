export default class Client {
    private socket?;
    private _status;
    private heartbeatInterval;
    private heartbeatTimeout?;
    private requestId;
    private pendingRequests;
    private handlers;
    private url;
    private reconnectTimeout?;
    private handshake;
    /**
     * Connette il websocket
     * @param url L'url al quale connettersi, con protocollo ws:// o wss://
     */
    connect(url: string, { handshake, reconnectTimeout }?: {
        handshake?: any;
        reconnectTimeout?: number | null;
    }): Promise<void>;
    /**
     * Disconnette il websocket
     * @param code Il codice di stato con il quale chiudere la connessione
     * @param reason La ragione per il quale la connessione è stata chiusa
     * @param timeout Opzionale. Il tempo massimo, in ms, per attendere il pacchetto di chiusura di risposta.
     *                Se minore o uguale a 0, allora la connessione non attende il pacchetto di risposta e chiude immediatamente la connessione.
     */
    disconnect(code?: number, reason?: string, timeout?: number): Promise<void>;
    /**
     * Funzione di supporto interna.
     * Disconnette immediatamente il websocket, senza inviare alcun pacchetto di conferma.
     * @param code Il codice di stato con il quale chiudere la connessione
     * @param reason La ragione per il quale la connessione è stata chiusa
     */
    private close;
    /**
     * Ottiene lo stato attuale del websocket
     */
    get status(): 'connecting' | 'handshake' | 'open' | 'closing' | 'closed';
    /**
     * Funzione di supporto interna
     * Richiamata al termine dell'handshake o all'arrivo di ping o messaggi.
     * Verifica che i ping del server arrivino e che, quindi, il websocket sia ancora connesso.
     */
    private checkHeartbeat;
    /**
     * Funzione di supporto interna
     * Decodifica i dati in arrivo secondo il protocollo websocket
     * @param rawData I dati in arrivo dal websocket
     */
    private receive;
    /**
     * Funzione di supporto interna
     * @param type Il tipo di pacchetto da inviare; Determina l'opcode
     * @param data Il payload
     */
    private send;
    /**
     * Funzione di supporto interna
     * Richiamata prima di emettere un evento e convertire i dati in un JSON Buffer
     * @param data I dati da codificare in un buffer
     * @returns Il buffer rappresentante i dati in JSON
     */
    private encode;
    /**
     * Funzione di supporto interna
     * Richiamata dopo aver ricevuto una richiesta o una risposta dal websocket
     * @param data Il Buffer da decodificare
     * @returns Il dato originale, tratto dal contenuto in JSON del Buffer
     */
    private decode;
    /**
     * Solleva un'evento e invia la richiesta al client
     * @param eventName Il nome dell'evento
     * @param payload Il payload da mandare con l'evento; Sarà il primo parametro della funzione richiamata dal server
     * @param callback La funzione di callback; se presente, richiede una risposta al server e richiama il callback con la risposta come parametro
     * @param requestTimeout Opzionale, il tempo in ms dopo il quale considerare la richiesta in timeout
     */
    emit(eventName: string, payload: any, callback?: (response: any) => Promise<void> | void, requestTimeout?: number): Promise<void>;
    /**
     * Aggiunge un handler ad un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da richiamare all'emmissione dell'evento
     */
    on(type: 'error', handler: (error: Error) => void): void;
    on(type: 'close', handler: (data: {
        code: number;
        reason: string;
    }) => void): void;
    on(type: string, handler: (data: any) => any): void;
    /**
     * Rimuove un handler da un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da rimuovere o, se non specificata, rimuove tutti gli handler
     */
    off(type: 'error', handler?: (error: Error) => void): void;
    off(type: 'close', handler?: (data: {
        code: number;
        reason: string;
    }) => void): void;
    off(type: string, handler?: (data: any) => any): void;
    /**
     * Funzione di supporto interna
     * Solleva un'evento richiamando tutti gli handler ad esso associati
     * @param type Il tipo di evento
     * @param data Il parametro da passare agli handler
     */
    private raise;
}
