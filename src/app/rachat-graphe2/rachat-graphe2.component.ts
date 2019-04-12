import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe2',
  templateUrl: './rachat-graphe2.component.html',
  styleUrls: ['./rachat-graphe2.component.css']
})
export class RachatGraphe2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToRachatGraphe3(){
    this.router.navigateByUrl('home/(contentOutlet:rachatGraphe3)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
}
