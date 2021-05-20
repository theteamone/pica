import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})

export class LoginClienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private carritoService : CarritoService) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.carritoService.autenticar( email, password ).subscribe( data => {
      if( data.code == 1 )
      {
        this.carritoService.ObtenerCarrito(email).subscribe(data2 => {
          console.warn('carrito:',data2.id);
          this.carritoService.persistir( data2 );
          this.router.navigateByUrl('/');
        });
        this.carritoService.persistirCliente(data.cliente);
      }
      else
      {
        window.alert("Usuario/Password Invalido");
      }
    });
  }

}
