/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, inject } from "inversify";
import { ILogger } from '@theia/core/lib/common';
import { WorkspaceServer } from "../common";

@injectable()
export class DefaultWorkspaceServer implements WorkspaceServer {

    public static ROOT_DIR_OPTION = '--root-dir=';

    protected root: any;

    constructor(
        @inject(ILogger) protected readonly logger: ILogger
    ) {

        this.root = "Hello world";
    }

    setRequest(uri: string): Promise<void> {
        console.log(uri);
        this.root = uri;
        return Promise.resolve();
    }

    getRequest(): Promise<string> {
        return this.root;
    }

    
}
