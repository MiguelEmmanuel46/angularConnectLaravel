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
  public message: string;

  constructor(private _contactoService: ContactoService){
    this.contacto = new Contacto('','','','');
    this.message = "";
  }



onSubmit(form:any){
  this._contactoService.register(this.contacto).subscribe(
    response => {
      if(response.message){
        this.message = response.message;
        form.reset();
        console.log(response.message);
      }else{
          this.message = 'error';
      }        
    },
    error => {
      this.message = 'error';
      
    }
  );
}













}



