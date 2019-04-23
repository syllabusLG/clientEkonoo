import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat3',
  templateUrl: './rachat3.component.html',
  styleUrls: ['./rachat3.component.css']
})
export class Rachat3Component implements OnInit {

  private capitalValue: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.capitalValue = this.route.snapshot.paramMap.get('capitalValue');
  }

  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToRachatGraphe1(){
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe1/${this.capitalValue})`);
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
}
