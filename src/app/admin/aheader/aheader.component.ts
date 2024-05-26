import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrl: './aheader.component.css'
})
export class AheaderComponent implements OnInit {

  ngOnInit(): void {
      initFlowbite();
  }
}
