import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CredentialsRegister } from 'src/modules/CredentialsRegister';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public srcLogo: string = "assets/img/logo.png";
  public registerForm: FormGroup;
  public validationMessages = {
    name: [
      {
        type: "required",
        message: "El name es requerido"
      },
      {
        type: "minlength",
        message: "La longitud mínima para el nombre es de 3 caracteres"
      }
    ],
    email: [
      {
        type: "required",
        message: "El email es requerido"
      },
      {
        type: "pattern",
        message: "El email es incorrecto"
      }
    ],
    password: [
      {
        type: "required",
        message: "El password es requerido"
      },
      {
        type: "minlength",
        message: "La longitud mínima para la contraseña es de 5 caracteres"
      }
    ]
  }
  public errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ]))
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack('/login');
  }

  registerUser(credentials: CredentialsRegister){
    this.authenticateService.registerUser(credentials).then(()=>{
      this.navCtrl.navigateForward('/login');
    })
  }
}
