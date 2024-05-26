import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  //creation objet form
  form= {
    email: null,
    password: null,
  }
  constructor(){}

  ngOnInit(): void {
      initFlowbite();
  }
}
