import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lancement-a',
  templateUrl: './lancement-a.component.html',
  styleUrls: ['./lancement-a.component.css']
})
export class LancementAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToGoToLogin(){
    this.router.navigateByUrl('home/(contentOutlet:gotologin)');
  }
  goToLancementB(){
    this.router.navigateByUrl('home/(contentOutlet:lancementB)');
  }

}
