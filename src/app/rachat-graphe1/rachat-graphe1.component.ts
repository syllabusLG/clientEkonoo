import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe1',
  templateUrl: './rachat-graphe1.component.html',
  styleUrls: ['./rachat-graphe1.component.css']
})
export class RachatGraphe1Component implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("capitalValue"));
  }

  goToRachat3(){
    this.router.navigateByUrl('home/(contentOutlet:rachat3)');
  }

  goToRachatGraphe2(){
    this.router.navigateByUrl('home/(contentOutlet:rachatGraphe2)');
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
