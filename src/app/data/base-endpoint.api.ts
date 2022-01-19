import { NbAuthService } from '@nebular/auth';
import { HttpHeaders } from "@angular/common/http";

export class BaseEndpoint {
    private readonly baseEndpoint: string = 'https://localhost:5001/api/';
    private controller: string;

    constructor(ctrl: string) {
        this.controller = ctrl;
    }

    get Root_URL() {
        return this.baseEndpoint + this.controller + '/';
    }
}