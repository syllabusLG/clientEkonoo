import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }

}
