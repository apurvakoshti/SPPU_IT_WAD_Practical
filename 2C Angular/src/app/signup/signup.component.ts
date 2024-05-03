import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  
  constructor(private router: Router, private hhtp: HttpClient){}

  formSignup: any={
    name: '',
    rollNo: '',
    email: '',
    password: ''
  }
  
  signup() {
    try {
      let signupData = JSON.parse(localStorage.getItem('signupData') || '[]')

      signupData.push(this.formSignup)

      localStorage.setItem('signupData', JSON.stringify(signupData))

      this.formSignup ={
        name: '',
        rollNo: '',
        email: '',
        password: ''
      }

      this.router.navigate(['/login']);
    } catch (error) {
        alert(`Signup Error : ${error}`)
    }
      

  }
}
