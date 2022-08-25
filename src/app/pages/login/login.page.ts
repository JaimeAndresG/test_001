import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user: string;
  password: string;
  usuarioLogin: any;

  constructor(private toastController: ToastController, private router: Router, private usuarioServices: UsuarioService) { }

  ngOnInit() {
  }


  //metodo para ingresar a home
  login(){
  var usuarioLogin =this.usuarioServices.validarRutPassword(this.user, this.password);
 
    //validar que al ingresar usuario y contraseña "admin" diga hola
    if(usuarioLogin != undefined){
      this.router.navigate(['/home']);
    }else{
      this.presentToast();

    }
  }
  
  //toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrecto!!!',
      duration: 3000
    });
    toast.present();
  }

}
