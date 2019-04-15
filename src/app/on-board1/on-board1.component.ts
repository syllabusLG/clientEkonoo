import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-board1',
  templateUrl: './on-board1.component.html',
  styleUrls: ['./on-board1.component.css']
})
export class OnBoard1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToOnBoard2() {
    this.router.navigateByUrl("home/(contentOutlet:onBoard2)");
  }
  goToMenu(){
    this.router.navigateByUrl("home/(contentOutlet:menu)");
  }
  goToVersement(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  goToImporter(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }

}
