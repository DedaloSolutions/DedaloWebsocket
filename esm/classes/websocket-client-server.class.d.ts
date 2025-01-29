import { IncomingMessage } from 'http';
import internal from 'stream';
export default class WebsocketClientServer {
    private socket;
    private status;
    private readonly pingInterval;
    private readonly pingTimeout;
    private pingRequests;
    private requestId;
    private pendingRequests;
    private handlers;
    constructor(socket: internal.Duplex);
    /**
     * Disconnette il websocket
     * @param code Il codice di stato con il quale chiudere la connessione
     * @param reason La ragione per il quale la connessione è stata chiusa
     * @param timeout Opzionale. Il tempo massimo, in ms, per attendere il pacchetto di chiusura di risposta.
     */
    disconnect(code?: number, reason?: string, timeout?: number | null): Promise<void>;
    /**
     * Funzione di supporto interna
     * @param type Il tipo di pacchetto da inviare; Determina l'opcode
     * @param data Il payload
     */
    private send;
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
     * Funzione di supporto interna
     * Richiamata alla connessione o all'arrivo di ping o messaggi.
     * Verifica che i ping del server arrivino e che, quindi, il websocket sia ancora connesso.
     */
    private checkHeartbeat;
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
    on(type: 'handshake', handler: (data: any) => boolean): void;
    on(type: string, handler: (data: any) => any): void;
    /**
     * Rimuove un handler da un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da rimuovere o, se non specificata, rimuove tutti gli handler
     */
    off(type: 'error', handler: (error: Error) => void): void;
    off(type: 'close', handler: (data: {
        code: number;
        reason: string;
    }) => void): void;
    off(type: 'handshake', handler: (data: any) => boolean): void;
    off(type: string, handler: (data: any) => any): void;
    /**
     * Funzione di supporto interna
     * Solleva un'evento richiamando tutti gli handler ad esso associati
     * @param type Il tipo di evento
     * @param data Il parametro da passare agli handler
     */
    private raise;
    /**
     * Crea un'istanza di websocket a partire da una richiesta di upgrade
     * @param req La richiesta HTTP dal server HTTP
     * @param socket Il socket al quale la richiesta arriva
     * @returns L'istanza di websocket o null, se la richiesta non è valida
     */
    static fromUpgradeRequest(req: IncomingMessage, socket: internal.Duplex): WebsocketClientServer | null;
}
