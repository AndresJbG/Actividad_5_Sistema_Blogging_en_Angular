import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
  noticias: any[] = [];

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

    this.reactiveForm.valueChanges.subscribe(() => {
      if (this.reactiveForm.valid) {
        this.mostrarError = false;
      }
    });
  }

  cargaDatos() {
    if (this.reactiveForm.invalid) {
      this.mostrarError = true;
      return;
    }

    const datos = this.reactiveForm.value;

    this.noticias.push({
      titulo: datos.titulo,
      imagen: datos.imagen,
      texto: datos.texto,
      fecha: datos.fecha,

    });


    this.reactiveForm.reset();
    this.mostrarError = false;

    console.log(this.noticias);
  }
}
