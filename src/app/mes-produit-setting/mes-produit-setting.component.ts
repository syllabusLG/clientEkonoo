import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mes-produit-setting',
  templateUrl: './mes-produit-setting.component.html',
  styleUrls: ['./mes-produit-setting.component.css']
})
export class MesProduitSettingComponent implements AfterViewInit {
  @ViewChild('buttonOne') buttonOne : ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.buttonOne.nativeElement.focus();
  }

}
