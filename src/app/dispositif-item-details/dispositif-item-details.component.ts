import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositif-item-details',
  templateUrl: './dispositif-item-details.component.html',
  styleUrls: ['./dispositif-item-details.component.scss']
})
export class DispositifItemDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif-details)');
  }

}
