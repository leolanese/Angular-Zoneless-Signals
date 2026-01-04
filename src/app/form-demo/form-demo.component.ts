import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  template: `
    <div style="border: 3px solid rgb(0, 102, 204); padding: 16px; margin: 8px;">
      <h2>Angular 21 Signal Forms</h2>
      <form [formGroup]="form">
        <div>
          <label>Name:</label>
          <input [formControl]="form.controls['name']" />
          <span *ngIf="form.controls['name'].invalid && form.controls['name'].touched" style="color: red;">Name is required</span>
        </div>
        <div>
          <label>Email:</label>
          <input [formControl]="form.controls['email']" />
        </div>
        <p>Form Value: {{ form.value | json }}</p>
        <p>Form Status: {{ form.status }}</p>
        <button [disabled]="form.invalid" (click)="submit()">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    div { font-family: sans-serif; }
    label { display: block; margin-top: 8px; }
    input { width: 100%; padding: 4px; }
  `]
})
export class FormDemoComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('')
  });

  submit() {
    console.log('Form Submitted', this.form.value);
  }
}
