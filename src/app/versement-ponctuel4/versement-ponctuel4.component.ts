import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel4',
  templateUrl: './versement-ponctuel4.component.html',
  styleUrls: ['./versement-ponctuel4.component.css']
})
export class VersementPonctuel4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToVersementPonctuel3(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel3)');
  }
  goToVersementPonctuel5(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel5)');
  }

}
