import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fiscality2',
  templateUrl: './fiscality2.component.html',
  styleUrls: ['./fiscality2.component.css']
})
export class Fiscality2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFiscality3(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite3)');
  }
  returnToFiscality1(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite1)');
  }

}
