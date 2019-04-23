import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel5',
  templateUrl: './versement-ponctuel5.component.html',
  styleUrls: ['./versement-ponctuel5.component.css']
})
export class VersementPonctuel5Component implements OnInit {
  private montantValue : string;

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.montantValue = this.route.snapshot.paramMap.get("montantValue");
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel4/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
  goToLister() {
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }

  goToRachat() {
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }

  goToDispositif() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }


}
