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

}