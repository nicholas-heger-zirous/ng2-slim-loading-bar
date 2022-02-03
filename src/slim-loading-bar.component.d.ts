import { SlimLoadingBarService } from './slim-loading-bar.service';
import * as i0 from "@angular/core";
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export declare class SlimLoadingBarComponent {
    service: SlimLoadingBarService;
    progress: string;
    color: string;
    height: string;
    show: boolean;
    constructor(service: SlimLoadingBarService);
    static ɵfac: i0.ɵɵFactoryDef<SlimLoadingBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SlimLoadingBarComponent, "ng2-slim-loading-bar", never, { "progress": "progress"; "color": "color"; "height": "height"; "show": "show"; }, {}, never, never>;
}
