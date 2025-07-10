
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, ReactiveFormsModule, ] ,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

 reactiveForm: FormGroup;

 constructor(){
  this.reactiveForm= new FormGroup({
    titulo:new FormControl('',[]),
    imagen:new FormControl('',[]), 
    texto:new FormControl('',[]),
    fecha:new FormControl('',[])
  }, []);
 }

  cargaDatos(){
    console.log(this.reactiveForm.value);

  }
  mostrarError=false;

}
