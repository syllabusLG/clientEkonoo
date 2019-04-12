import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier3',
  templateUrl: './versement-regulier3.component.html',
  styleUrls: ['./versement-regulier3.component.css']
})
export class VersementRegulier3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToVersementRegulier2(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier2)');
  }
  goToVersementRegulier4(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier4)');
  }
  goToVersementRegulierPre(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulierPre)');
  }
  goToLister() {
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }

  goToRachat() {
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }

  goToDispositif() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
}
