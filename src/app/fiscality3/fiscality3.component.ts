import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fiscality3',
  templateUrl: './fiscality3.component.html',
  styleUrls: ['./fiscality3.component.css']
})
export class Fiscality3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFiscality4(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite4)');
  }
  returnToFiscality2(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite2)');
  }

}
