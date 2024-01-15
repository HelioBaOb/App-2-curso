import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{

  @Input() tipoDni: string='DNI';
  formularioDocumento: FormGroup;
  variableNueva: string='Documento';

  constructor (private form: FormBuilder){
    this.formularioDocumento = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue: 'Documento';
  }


  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }

}
