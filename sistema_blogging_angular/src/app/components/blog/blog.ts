import { Component, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  reactiveForm: FormGroup;
  mostrarError = false;

  constructor() {
    this.reactiveForm = new FormGroup(
      {
        titulo: new FormControl('', [Validators.required]),
        imagen: new FormControl('', [Validators.required]),
        texto: new FormControl('', [Validators.required]),
        fecha: new FormControl('', [Validators.required]),
      },
      []
    );
  }

  cargaDatos() {
    console.log(this.reactiveForm.value);
  }
}
