import { Injectable } from '@angular/core';
import { CredentialsLogin } from '../../modules/CredentialsLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: CredentialsLogin){
    return new Promise((accept,reject)=>{
      if (credentials.email=="test@test.com" && credentials.password=="12345"){
        accept("Login Correcto");
      }else{
        reject("Login Incorrecto");
      }
    });
  }
}
