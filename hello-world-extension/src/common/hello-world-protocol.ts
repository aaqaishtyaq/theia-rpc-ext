export const workspacePath = '/services/hello';

/**
 * The JSON-RPC workspace interface.
 */
export const WorkspaceServer = Symbol('WorkspaceServer');
export interface WorkspaceServer {
    /**
     * Return the current workspace root.
     */
    getRequest(): Promise<string>;
    /**
     * Select a given URI as a workspace root.
     */
    setRequest(uri: string): Promise<void>;
}