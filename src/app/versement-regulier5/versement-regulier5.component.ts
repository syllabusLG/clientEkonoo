import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier5',
  templateUrl: './versement-regulier5.component.html',
  styleUrls: ['./versement-regulier5.component.css']
})
export class VersementRegulier5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

  returnToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
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
