import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = {
    name: '',
    age: '',
    occupation: '',
  };

  submitted = false;

  formData: { name: string, age: string, occupation: string }[] = [];

  onSubmit() {
    this.submitted = true;
    //initialise the data passing in , else cause error
    this.formData.push({ name: this.user.name, age: this.user.age, occupation: this.user.occupation });
    this.user = {
      name: '',
      age: '',
      occupation: '',
    };
  }
}
