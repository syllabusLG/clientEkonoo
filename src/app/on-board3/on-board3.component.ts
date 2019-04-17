import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-board3',
  templateUrl: './on-board3.component.html',
  styleUrls: ['./on-board3.component.css']
})
export class OnBoard3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToOnBoard4() {
    this.router.navigateByUrl("home/(contentOutlet:onBoard4)");
  }
  goToMenu(){
    this.router.navigateByUrl("home/(contentOutlet:menu2)");
  }
  goToVersement(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  goToImporter(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }

}
