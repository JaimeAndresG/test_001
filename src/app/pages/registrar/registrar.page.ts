import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //VAMOS A CREAR EL GRUPO DEL FORMULARIO
  alumno = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo : new FormControl('',[Validators.required, Validators.minLength(3)]),
    fecha_nac : new FormControl('',[Validators.required]),
    semestre : new FormControl('',[Validators.required, Validators.min(1), Validators.max(8)]),
    password : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(18 )]),
    tipo_usuario: new FormControl('alumno')
  });


  //Vamos a crear una variable para obtener la lista de usuarios del servicio de usuarios:
  usuarios: any[] = [];
  verificar_password: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }


  //metodo del formulario
  registrar(){
    if(this.alumno.controls.password.value != this.verificar_password){
      alert('Contraseñas No Coinciden!!')
      return;

    }
    this.usuarioService.agregarUsuario(this.alumno.value)
    alert('Alumnno registrado!');
    this.alumno.reset();
    this.verificar_password = '';
  
  
  }

}
