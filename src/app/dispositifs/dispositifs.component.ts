import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositifs',
  templateUrl: './dispositifs.component.html',
  styleUrls: ['./dispositifs.component.scss']
})
export class DispositifsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doNothing() {

  }

  gotoSynthese() {
    this.router.navigateByUrl('home/(contentOutlet:epargneMenu)');
  }

}
