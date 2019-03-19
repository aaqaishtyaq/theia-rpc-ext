import { ContainerModule } from 'inversify';
import { ConnectionHandler, JsonRpcConnectionHandler } from "@theia/core/lib/common";
import { WorkspaceServer } from '../common';
import { DefaultWorkspaceServer } from './default-workspace-server';

export const loggerServerModule = new ContainerModule(bind => {
	    bind(DefaultWorkspaceServer).toSelf().inSingletonScope();
    bind(WorkspaceServer).toService(DefaultWorkspaceServer);
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler("/services/hello", () => {
        	console.log("asdfasdf");
        	 ctx.container.get(WorkspaceServer)
            // const loggerServer = ctx.container.get<ILoggerServer>(ILoggerServer);
            // loggerServer.setClient(client);
            // return loggerServer;
        })
    ).inSingletonScope()
});