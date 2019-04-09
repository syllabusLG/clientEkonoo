import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vous-joindre',
  templateUrl: './vous-joindre.component.html',
  styleUrls: ['./vous-joindre.component.css']
})
export class VousJoindreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToChoixPiece(){
    this.router.navigateByUrl('home/(contentOutlet:choixPiece)');
  }

  returnToAdresse(){
    this.router.navigateByUrl('home/(contentOutlet:adresse)');
  }

}
