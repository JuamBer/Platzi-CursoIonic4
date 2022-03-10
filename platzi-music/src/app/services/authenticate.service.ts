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

  async loginUser(credentials: CredentialsLogin){
    this.storage.create();
    const registeredUser: CredentialsRegister = await this.storage.get('user');

    return new Promise((accept,reject)=>{
      if (registeredUser.email == credentials.email && registeredUser.password == btoa(credentials.password)){
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
