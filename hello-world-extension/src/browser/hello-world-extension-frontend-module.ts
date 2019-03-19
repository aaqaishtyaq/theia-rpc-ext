/**
 * Generated using theia-extension-generator
 */

import { HelloWorldExtensionCommandContribution, HelloWorldExtensionMenuContribution } from './hello-world-extension-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { WebSocketConnectionProvider } from '@theia/core/lib/browser';

import { ContainerModule } from "inversify";
import { WorkspaceServer, workspacePath } from '../common';
import { WorkspaceService } from './hello-world-service';
export default new ContainerModule(bind => {
    // add your contribution bindings here
     bind(WorkspaceService).toSelf().inSingletonScope();
    bind(CommandContribution).to(HelloWorldExtensionCommandContribution);
    bind(MenuContribution).to(HelloWorldExtensionMenuContribution);
    bind(WorkspaceServer).toDynamicValue(ctx => {
        const provider = ctx.container.get(WebSocketConnectionProvider);
        return provider.createProxy<WorkspaceServer>(workspacePath);
    }).inSingletonScope();
    
});