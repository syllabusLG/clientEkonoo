import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verser',
  templateUrl: './verser.component.html',
  styleUrls: ['./verser.component.css']
})
export class VerserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
  goToVersementPonctuel1(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel1)');
  }
  goToVersementRegulier1(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier1)');
  }

  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }

}
