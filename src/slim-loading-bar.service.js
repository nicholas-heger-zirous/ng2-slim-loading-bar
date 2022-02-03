// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
import { Injectable } from '@angular/core';
import { isPresent } from './slim-loading-bar.utils';
import { Subject, interval } from 'rxjs';
import * as i0 from "@angular/core";
export var SlimLoadingBarEventType;
(function (SlimLoadingBarEventType) {
    SlimLoadingBarEventType[SlimLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
    SlimLoadingBarEventType[SlimLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
    SlimLoadingBarEventType[SlimLoadingBarEventType["COLOR"] = 2] = "COLOR";
    SlimLoadingBarEventType[SlimLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
})(SlimLoadingBarEventType || (SlimLoadingBarEventType = {}));
export class SlimLoadingBarEvent {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
export class SlimLoadingBarService {
    constructor() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'firebrick';
        this._visible = true;
        this.interval = 500; // in milliseconds
        this._intervalSubscription = null;
        this.eventSource = new Subject();
        this.events = this.eventSource.asObservable();
    }
    set progress(value) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));
        }
    }
    get progress() {
        return this._progress;
    }
    set height(value) {
        if (isPresent(value)) {
            this._height = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));
        }
    }
    get height() {
        return this._height;
    }
    set color(value) {
        if (isPresent(value)) {
            this._color = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));
        }
    }
    get color() {
        return this._color;
    }
    set visible(value) {
        if (isPresent(value)) {
            this._visible = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
        }
    }
    get visible() {
        return this._visible;
    }
    emitEvent(event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }
    start(onCompleted = null) {
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalSubscription = interval(this.interval).subscribe(() => {
            this.progress++;
            if (this.progress === 100) {
                this.complete();
            }
        });
    }
    stop() {
        if (this._intervalSubscription !== null) {
            this._intervalSubscription.unsubscribe();
        }
    }
    reset() {
        this.stop();
        this.progress = 0;
    }
    complete() {
        this.progress = 100;
        this.stop();
        setTimeout(() => {
            // Hide it away
            this.visible = false;
            setTimeout(() => {
                // Drop to 0
                this.progress = 0;
            }, 250);
        }, 250);
    }
}
SlimLoadingBarService.ɵfac = function SlimLoadingBarService_Factory(t) { return new (t || SlimLoadingBarService)(); };
SlimLoadingBarService.ɵprov = i0.ɵɵdefineInjectable({ token: SlimLoadingBarService, factory: SlimLoadingBarService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlimLoadingBarService, [{
        type: Injectable
    }], function () { return []; }, null); })();
