import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlEnviromentService } from './url-enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor(private httpClient: HttpClient, private envUrl: UrlEnviromentService) { }

  // getClients() {
  //   return this.httpClient.get<any>(this.envUrl.urlAddress + 'utils/list/all-clients/');
  // }

  getConsServicio() {
    const apiUrl = this.envUrl.urlAddress + 'listar-servicios/';
    return this.httpClient.get<any>(apiUrl);
  }

  getConsProyecto() {
    const apiUrl = this.envUrl.urlAddress + 'listar-proyectos/';
    return this.httpClient.get<any>(apiUrl);
  }

  postCorreo(body: any){
    const apiUrl = this.envUrl.urlAddressProduccion + '/utils/enviar/email-contacto/constrarna/'
    return this.httpClient.post<any>(apiUrl, body);
  }
}
