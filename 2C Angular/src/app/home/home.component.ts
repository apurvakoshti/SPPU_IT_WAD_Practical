import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  signupData: any[] = []; // Define an array to hold signup data

  constructor() { }

  ngOnInit(): void {
    // Retrieve signupData array from local storage
    const signupDataStr = localStorage.getItem('signupData');
    if (signupDataStr) {
      // Parse the JSON string into an array
      this.signupData = JSON.parse(signupDataStr);
    }
  }
}
