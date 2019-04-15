import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fiscality4',
  templateUrl: './fiscality4.component.html',
  styleUrls: ['./fiscality4.component.css']
})
export class Fiscality4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
  returnToFiscality3(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite3)');
  }
  doNothing() {

  }
}
