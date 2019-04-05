import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe1',
  templateUrl: './rachat-graphe1.component.html',
  styleUrls: ['./rachat-graphe1.component.css']
})
export class RachatGraphe1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRachat3(){
    this.router.navigateByUrl('home/(contentOutlet:rachat3)');
  }

  goToRachatGraphe2(){
    this.router.navigateByUrl('home/(contentOutlet:rachatGraphe2)');
  }


}
