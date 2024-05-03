import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {}
  
  formLogin: any = {
    email: '',
    password: ''
  }
  
  login() {

    try {
      const signupData = JSON.parse(localStorage.getItem('signupData')|| '[]')
      
      const user = signupData.find((userData: any) => userData.email === this.formLogin.email)
      
      if(user && user.password === this.formLogin.password){
        alert('Login Sucessfull')
        this.router.navigate(['/home']);
      }else{
        alert('Login Error')
      }
    } catch (error) {
      alert(`Login Error ${error}`)
      }
      
    }

    redirectSignup() {
      this.router.navigate(['/signup']);
    }
}
