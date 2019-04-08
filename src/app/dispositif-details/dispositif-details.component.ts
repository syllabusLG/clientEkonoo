import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositif-details',
  templateUrl: './dispositif-details.component.html',
  styleUrls: ['./dispositif-details.component.scss']
})
export class DispositifDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoDispositifs() {
    this.router.navigateByUrl('home/(contentOutlet:dispositifs)');
  }

}
