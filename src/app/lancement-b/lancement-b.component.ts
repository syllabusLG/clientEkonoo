import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lancement-b',
  templateUrl: './lancement-b.component.html',
  styleUrls: ['./lancement-b.component.css']
})
export class LancementBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToLancementA(){
    this.router.navigateByUrl('home/(contentOutlet:lancementA)');
  }
  goToDonnees(){
    this.router.navigateByUrl('home/(contentOutlet:donnees)');
  }
}
