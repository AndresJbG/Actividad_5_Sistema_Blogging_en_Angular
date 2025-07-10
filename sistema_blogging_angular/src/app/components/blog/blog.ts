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
  noticiaTitulo: string = '';
  noticiaImagen: string = '';
  noticiaTexto: string = '';
  noticiaFecha: string = '';


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
  const datos = this.reactiveForm.value;

  this.noticiaTitulo = datos.titulo;
  this.noticiaImagen = datos.imagen;
  this.noticiaTexto = datos.texto;
  this.noticiaFecha = datos.fecha;

  console.log(datos);
}


}
