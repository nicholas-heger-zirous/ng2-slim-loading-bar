// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
import { Component, Input } from '@angular/core';
import { SlimLoadingBarService, SlimLoadingBarEventType } from './slim-loading-bar.service';
import { isPresent } from './slim-loading-bar.utils';
import * as i0 from "@angular/core";
import * as i1 from "./slim-loading-bar.service";
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export class SlimLoadingBarComponent {
    constructor(service) {
        this.service = service;
        this.progress = '0';
        this.color = 'firebrick';
        this.height = '2px';
        this.show = true;
        this.service.events.subscribe((event) => {
            if (event.type === SlimLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                this.progress = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.COLOR) {
                this.color = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.HEIGHT) {
                this.height = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.VISIBLE) {
                this.show = event.value;
            }
        });
    }
}
SlimLoadingBarComponent.ɵfac = function SlimLoadingBarComponent_Factory(t) { return new (t || SlimLoadingBarComponent)(i0.ɵɵdirectiveInject(i1.SlimLoadingBarService)); };
SlimLoadingBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SlimLoadingBarComponent, selectors: [["ng2-slim-loading-bar"]], inputs: { progress: "progress", color: "color", height: "height", show: "show" }, decls: 2, vars: 10, consts: [[1, "slim-loading-bar"], [1, "slim-loading-bar-progress"]], template: function SlimLoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.progress + "%")("background-color", ctx.color)("color", ctx.color)("height", ctx.height)("opacity", ctx.show ? "1" : "0");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlimLoadingBarComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-slim-loading-bar',
                template: `
<div class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="show ? '1' : '0'"></div>
</div>`
            }]
    }], function () { return [{ type: i1.SlimLoadingBarService }]; }, { progress: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], show: [{
            type: Input
        }] }); })();
