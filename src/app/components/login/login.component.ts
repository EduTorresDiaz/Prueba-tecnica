import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  color: ThemePalette = 'primary';
  resultado!: any;
  useDefault = false;


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),

  });

   toggle(event: MatSlideToggleChange) {
    this.useDefault = event.checked;
  }

  onSubmit() {
    if (this.form.valid) {
      this.resultado = Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Todos los datos son válidos',
        showConfirmButton: false,
        timer: 1500
      })

      if(this.useDefault === true){
        localStorage.setItem('email', this.form.value.email);
        localStorage.setItem('password', this.form.value.password);
      }
    }
    else {
      this.resultado = Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hay datos inválidos en el formulario',
      })
    }

  }
  constructor() { }

  ngOnInit(): void {}

}
