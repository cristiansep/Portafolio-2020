import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  
  public tipo: string;
  public id: string;
  public oculto: string = 'oculto';

  constructor() { }

  ocultarResume() {
    this.oculto = 'oculto';
  }

  mostrarResume() {
    this.oculto = '';

  }

}
