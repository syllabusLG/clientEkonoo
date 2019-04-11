import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel3',
  templateUrl: './versement-ponctuel3.component.html',
  styleUrls: ['./versement-ponctuel3.component.css']
})
export class VersementPonctuel3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToVersementPonctuel2(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel2)');
  }
  goToVersementPonctuel4(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel4)');
  }

}
