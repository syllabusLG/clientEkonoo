import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slide-fiscality',
  templateUrl: './slide-fiscality.component.html',
  styleUrls: ['./slide-fiscality.component.css']
})
export class SlideFiscalityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFiscality2(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite2)');
  }

}
