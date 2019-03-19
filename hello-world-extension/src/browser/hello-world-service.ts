/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable, inject } from "inversify";

import { WorkspaceServer } from "../common";

/**
 * The workspace service.
 */
@injectable()
export class WorkspaceService {

    /**
     * The current workspace root.
     */

     request:any;
    constructor(
        @inject(WorkspaceServer) protected readonly server: WorkspaceServer
    ) {
        console.log(this.server.getRequest())
    }

    /**
     * Open a given URI as the current workspace root.
     */

}

export interface WorkspaceInput {
    /**
     * Test whether the same window should be used, by default false.
     */
    preserveWindow?: boolean;
   }
