import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare enum SlimLoadingBarEventType {
    PROGRESS = 0,
    HEIGHT = 1,
    COLOR = 2,
    VISIBLE = 3
}
export declare class SlimLoadingBarEvent {
    type: SlimLoadingBarEventType;
    value: any;
    constructor(type: SlimLoadingBarEventType, value: any);
}
/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
export declare class SlimLoadingBarService {
    private _progress;
    private _height;
    private _color;
    private _visible;
    interval: number;
    private _intervalSubscription;
    private eventSource;
    events: Observable<SlimLoadingBarEvent>;
    constructor();
    set progress(value: number);
    get progress(): number;
    set height(value: string);
    get height(): string;
    set color(value: string);
    get color(): string;
    set visible(value: boolean);
    get visible(): boolean;
    private emitEvent;
    start(onCompleted?: Function): void;
    stop(): void;
    reset(): void;
    complete(): void;
    static ɵfac: i0.ɵɵFactoryDef<SlimLoadingBarService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SlimLoadingBarService>;
}
