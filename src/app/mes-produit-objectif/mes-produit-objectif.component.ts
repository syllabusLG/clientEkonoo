import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-mes-produit-objectif',
  templateUrl: './mes-produit-objectif.component.html',
  styleUrls: ['./mes-produit-objectif.component.css']
})
export class MesProduitObjectifComponent implements OnInit{
  previousUrl: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
  }

  goBack() {
    if(this.route.snapshot.paramMap.get('component') == 'mes-produit') {
      this.router.navigateByUrl('home/(contentOutlet:mes-produit-details)');
    } else {
      this.router.navigateByUrl('home/(contentOutlet:dispositif-item-details)');
    }
  }

  doNothing() {

  }
}
