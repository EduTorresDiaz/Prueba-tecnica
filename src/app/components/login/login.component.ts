import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:any;
  color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('submit');
  }
  

}
