import { Component } from '@angular/core';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  public contacto: Contacto;
  public status: string;
  public mensaje: string;
  public mensaje2: string;


  constructor(private _contactoService: ContactoService){
    this.contacto = new Contacto('','','','');
    this.status = "";
    this.mensaje ="";
    this.mensaje2 ="";
  }



onSubmit(form:any){
  this._contactoService.register(this.contacto).subscribe(
    response => {

      if(response.status === 'success'){
        this.status = response.status;
        this.mensaje = response.message;
        this.mensaje2 = this.mensaje.toString();
        
        form.reset();
        
      }else{
        this.status = 'error';
          
      }        
    },
    error => {
      this.status = 'error';
    }


  );
}













}



