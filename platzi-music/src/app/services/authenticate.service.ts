import { Injectable } from '@angular/core';
import { CredentialsRegister } from 'src/modules/CredentialsRegister';
import { CredentialsLogin } from '../../modules/CredentialsLogin';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private storage: Storage
  ) { }

  loginUser(credentials: CredentialsLogin){
    return new Promise((accept,reject)=>{
      if (credentials.email=="test@test.com" && credentials.password=="12345"){
        accept("Login Correcto");
      }else{
        reject("Login Incorrecto");
      }
    });
  }

  registerUser(credentials: CredentialsRegister){
    this.storage.create();
    credentials.password = btoa(credentials.password);
    return this.storage.set('user', credentials);
  }
}
