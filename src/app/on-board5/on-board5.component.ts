import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-on-board5',
  templateUrl: './on-board5.component.html',
  styleUrls: ['./on-board5.component.css']
})
export class OnBoard5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToMenu(){
    this.router.navigateByUrl("home/(contentOutlet:menu)");
  }

}
