// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
import { NgModule } from "@angular/core";
import { SlimLoadingBarComponent } from './src/slim-loading-bar.component';
import { SlimLoadingBarService } from './src/slim-loading-bar.service';
import * as i0 from "@angular/core";
export * from './src/slim-loading-bar.component';
export * from './src/slim-loading-bar.service';
export class SlimLoadingBarModule {
    static forRoot() {
        return {
            ngModule: SlimLoadingBarModule,
            providers: [SlimLoadingBarService]
        };
    }
}
SlimLoadingBarModule.ɵmod = i0.ɵɵdefineNgModule({ type: SlimLoadingBarModule });
SlimLoadingBarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SlimLoadingBarModule_Factory(t) { return new (t || SlimLoadingBarModule)(); }, providers: [SlimLoadingBarService] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SlimLoadingBarModule, { declarations: [SlimLoadingBarComponent], exports: [SlimLoadingBarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlimLoadingBarModule, [{
        type: NgModule,
        args: [{
                declarations: [SlimLoadingBarComponent],
                exports: [SlimLoadingBarComponent],
                providers: [SlimLoadingBarService]
            }]
    }], null, null); })();
