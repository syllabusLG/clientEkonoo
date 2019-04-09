import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif5',
  templateUrl: './dispositif5.component.html',
  styleUrls: ['./dispositif5.component.css']
})
export class Dispositif5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDispositif6(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif6)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

}
