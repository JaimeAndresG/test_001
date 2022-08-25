import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  //variables necesarias para el trabajo del CRUD:

  usuarios: any[] = [
    {
      rut:'11.111.111-1',
      nom_completo: 'Diosito',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'satan123',
      tipo_usuario: 'administrador'
    }
  ];

  constructor() { }

  //metodos del CRUD:
  
  agregarUsuario(usuario){

    this.usuarios.push(usuario);

  }

  
  eliminarUsuario(rut){}


  modificarUsuario(usuario){}


  obtenerUsuario(rut){
    return this.usuarios.find(usuario => usuario.rut == rut);
  }


  obtenerUsuarios(){
    return this.usuarios;
  }

  //Validar rut y contraseña : metodo que recibe rut y password y me entre en el login
  validarRutPassword(rut, pass){
    return this.usuarios.find(u => u.rut == rut && u.pass == pass);
  }
}
