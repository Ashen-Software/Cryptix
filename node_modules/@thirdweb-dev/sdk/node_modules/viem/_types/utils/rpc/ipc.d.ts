/// <reference types="node" />
/// <reference types="node" />
import { type Socket as NetSocket } from 'node:net';
import { type GetSocketRpcClientParameters, type SocketRpcClient } from './socket.js';
export type GetIpcRpcClientOptions = Pick<GetSocketRpcClientParameters, 'reconnect'>;
export declare function extractMessages(buffer: Buffer): [Buffer[], Buffer];
export type IpcRpcClient = SocketRpcClient<NetSocket>;
export declare function getIpcRpcClient(path: string, options?: GetIpcRpcClientOptions): Promise<IpcRpcClient>;
//# sourceMappingURL=ipc.d.ts.map