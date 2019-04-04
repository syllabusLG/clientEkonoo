import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choix-piece',
  templateUrl: './choix-piece.component.html',
  styleUrls: ['./choix-piece.component.css']
})
export class ChoixPieceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToVousJoindre(){
    this.router.navigateByUrl('home/(contentOutlet:vousJoindre)');
  }

  goToTakePicture(){
    this.router.navigateByUrl('home/(contentOutlet:takePicture)');
  }

}
