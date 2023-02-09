import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit{
  public page_title: string;
  public user: User;
  public status: string;
  public token: any;
  public identity: any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.page_title ='Identificate';
    this.user = new User(0,'','','','');
    this.status = "";
  }

  ngOnInit(){
    //se ejecuta siempre  y cierra sesion solo cuano le llega el parametro sure por la url
    this.logout();

  }
  onSubmit(form:any){
    this._userService.signup(this.user,null).subscribe(
        response => {
          //obtener token
          if (response.status != 'error'){
            this.status = 'success';
            this.token = response;
            //objeto de usuario identificado
            this._userService.signup(this.user, true).subscribe(
                response => {
                    
                    this.identity = response;  
                    console.log(this.token);
                    console.log(this.identity);
                    // crear sesion datos de usuario identificado                   
                    localStorage.setItem('token', this.token);
                    localStorage.setItem('identity', JSON.stringify(this.identity));
                },
                error => {
                  this.status = 'error';
                  console.log(<any>error);
                }
            );

          }else{
             this.status = 'error';
             console.log("status response: ");
          }
          //console.log(response);
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
        }
    );
  }


logout(){
  this._route.params.subscribe(params => {
    let logout = +params['sure'];
    if(logout == 1){
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      this.identity = null;
      this.token = null;
      //redireccion
      this._router.navigate(['inicio']);
    }
  });
}


}
