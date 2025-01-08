import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class UrlEnviromentService {
    public urlAddress: string = environment.urlAddress;
    public urlAddressProduccion: string = environmentProd.urlAddress;
    constructor() { }
}
