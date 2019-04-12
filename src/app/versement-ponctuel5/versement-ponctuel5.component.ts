import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel5',
  templateUrl: './versement-ponctuel5.component.html',
  styleUrls: ['./versement-ponctuel5.component.css']
})
export class VersementPonctuel5Component implements OnInit {

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
