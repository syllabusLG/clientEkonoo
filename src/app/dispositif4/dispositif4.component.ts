import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif4',
  templateUrl: './dispositif4.component.html',
  styleUrls: ['./dispositif4.component.css']
})
export class Dispositif4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDispositif5(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif5)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif3)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
}
