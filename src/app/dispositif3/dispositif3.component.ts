import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif3',
  templateUrl: './dispositif3.component.html',
  styleUrls: ['./dispositif3.component.css']
})
export class Dispositif3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDispositif4(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif4)');
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
