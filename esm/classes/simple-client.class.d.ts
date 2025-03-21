import { Event, CloseEvent } from "ws";
export default class SimpleClient {
    private heartbeatInterval;
    private heartbeatTimeout?;
    private url?;
    private reconnectTimeout?;
    private socket?;
    private handshakeData?;
    private handshakeStatus;
    private requestId;
    private pendingRequests;
    private handlers;
    /**
     * Connette il websocket
     * @param url L'url al quale connettersi. Obbligatorio alla prima connessione.
     * @param allowReject Opzionale, indica se sollevare eccezioni in caso di errore. Default: false
     * @param reconnectTimeout Opzionale, indica il periodo di tempo in ms prima di ritentare la connessione. Se non specificato, mantiene l'ultimo valore inserito.
     */
    connect({ url, allowReject, handshakeData, reconnectTimeout }?: {
        url?: string;
        allowReject?: boolean;
        handshakeData?: any;
        reconnectTimeout?: number | null;
    }): Promise<void>;
    /**
     * Disconnette il websocket
     * @param code Il codice di stato con il quale chiudere la connessione
     * @param reason La ragione per il quale la connessione è stata chiusa
     */
    disconnect(code?: number, reason?: string): Promise<void>;
    /**
     * Ottiene lo stato attuale del websocket
     */
    get status(): 'connecting' | 'handshake' | 'open' | 'closing' | 'closed';
    /**
     * Funzione di supporto interna
     * Richiamata alla connessione o all'arrivo di ping o messaggi.
     * Verifica che i ping del server arrivino e che, quindi, il websocket sia ancora connesso.
     */
    private checkHeartbeat;
    /**
     * Solleva un'evento e invia la richiesta al client
     * @param eventName Il nome dell'evento
     * @param payload Il payload da mandare con l'evento; Sarà il primo parametro della funzione richiamata dal server
     * @param callback La funzione di callback; se presente, richiede una risposta al server e richiama il callback con la risposta come parametro
     * @param requestTimeout Opzionale, il tempo in ms dopo il quale considerare la richiesta in timeout
     */
    emit(eventName: string, payload: any, callback?: (response: any) => void, requestTimeout?: number): void;
    /**
     * Funzione di supporto interna
     * Decodifica i dati in arrivo e gestire richieste e risposte asincrone
     */
    private handle;
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
     * Aggiunge un handler ad un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da richiamare all'emmissione dell'evento
     */
    on(type: 'open', handler: (event: Event) => void): void;
    on(type: 'error', handler: (event: Event) => void): void;
    on(type: 'close', handler: (event: CloseEvent) => void): void;
    on(type: '*', handler: (type: string, data: any) => void): void;
    on(type: string, handler: (data: any, callback: (result: any) => Promise<void> | void) => any): void;
    /**
     * Rimuove un handler da un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da rimuovere o, se non specificata, rimuove tutti gli handler
     */
    off(type: 'open', handler?: (event: Event) => void): void;
    off(type: 'error', handler?: (event: Event) => void): void;
    off(type: 'close', handler?: (event: CloseEvent) => void): void;
    off(type: '*', handler: (type: string, data: any) => void): void;
    off(type: string, handler?: (data: any, callback: (result: any) => Promise<void> | void) => any): void;
    /**
     * Funzione di supporto interna
     * Solleva un'evento richiamando tutti gli handler ad esso associati
     * @param type Il tipo di evento
     * @param data Il parametro da passare agli handler
     */
    private raise;
}
