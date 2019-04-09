import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dispositif-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  @Input() details : any[];
  @Input() myColor : string;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoDispositifsDetails() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif-item-details)');
  }

}
