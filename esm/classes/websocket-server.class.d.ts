import { Server } from 'http';
import WebsocketClientServer from './websocket-client-server.class';
export default class WebsocketServer {
    clients: {
        [uuid: string]: WebsocketClientServer;
    };
    private handlers;
    listen(server: Server): void;
    /**
     * Aggiunge un handler ad un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da richiamare all'emmissione dell'evento
     */
    on(type: 'connection', handler: (client: WebsocketClientServer, uuid: string) => void): void;
    /**
     * Rimuove un handler da un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da rimuovere o, se non specificata, rimuove tutti gli handler
     */
    off(type: 'connection', handler: (client: WebsocketClientServer, uuid: string) => void): void;
    /**
     * Funzione di supporto interna
     * Solleva un'evento richiamando tutti gli handler ad esso associati
     * @param type Il tipo di evento
     * @param data Il parametro da passare agli handler
     */
    private raise;
}
