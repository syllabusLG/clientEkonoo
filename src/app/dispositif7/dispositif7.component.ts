import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif7',
  templateUrl: './dispositif7.component.html',
  styleUrls: ['./dispositif7.component.css']
})
export class Dispositif7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif6)');
  }

  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
}
