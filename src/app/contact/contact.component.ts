import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{

  public usuario : any ={
    name: '',
    email: ''
  }

  /*usuarioActivo: any = {
    nombre: 'Helio',
    apellido: 'Barriga',
    dni: '987654567'
  };*/
  tipoDni: string='';
  formularioContacto: FormGroup
  mostrarDni: boolean = false;

  constructor (private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    //Las 2 siguientes lineas de código sirven para eliminar los validadores que tenga algún campo
    /*this.formularioContacto.get('apellido')?.clearValidators();
    this.formularioContacto.get('apellido')?.updateValueAndValidity();

    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      //apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    });

    this.formularioContacto.get('nombre')?.disable();
    //this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();*/

    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      if (value != 'none'){
        this.mostrarDni = value != '';  
      } else {
        this.mostrarDni = false;
      }
      this.tipoDni = value;   
    });
  }

  ngOnDestroy(): void{
    console.log('se desruyó el componente.')
  }

  enviar(){
   console.log(this.usuario);
   console.log(this.formularioContacto);
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }
}