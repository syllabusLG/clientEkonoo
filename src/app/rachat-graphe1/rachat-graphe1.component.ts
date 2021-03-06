import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe1',
  templateUrl: './rachat-graphe1.component.html',
  styleUrls: ['./rachat-graphe1.component.css']
})
export class RachatGraphe1Component implements OnInit {
  private capitalValue : string;

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.capitalValue = this.route.snapshot.paramMap.get("capitalValue");
  }

  goToRachat3(){
    this.router.navigateByUrl(`home/(contentOutlet:rachat3/${this.capitalValue})`);
  }

  goToRachatGraphe2(){
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe2/${this.capitalValue})`);
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }

  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:rachat2)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
}
