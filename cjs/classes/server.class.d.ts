import { Server as ServerHTTP } from 'http';
import Socket from './socket.class';
export default class Server {
    clients: {
        [uuid: string]: Socket;
    };
    private handlers;
    listen(server: ServerHTTP): void;
    /**
     * Aggiunge un handler ad un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da richiamare all'emmissione dell'evento
     */
    on(type: 'connection', handler: (uuid: string, client: Socket, handshakeData: any) => void): void;
    /**
     * Rimuove un handler da un dato evento
     * @param type Il tipo di evento
     * @param handler La funzione da rimuovere o, se non specificata, rimuove tutti gli handler
     */
    off(type: 'connection', handler: (uuid: string, client: Socket, handshakeData: any) => void): void;
    /**
     * Funzione di supporto interna
     * Solleva un'evento richiamando tutti gli handler ad esso associati
     * @param type Il tipo di evento
     * @param data Il parametro da passare agli handler
     */
    private raise;
}
