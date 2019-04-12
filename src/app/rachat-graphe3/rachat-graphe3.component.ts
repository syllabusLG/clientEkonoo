import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe3',
  templateUrl: './rachat-graphe3.component.html',
  styleUrls: ['./rachat-graphe3.component.css']
})
export class RachatGraphe3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToRachat3(){
    this.router.navigateByUrl('home/(contentOutlet:rachat3)');
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
}
