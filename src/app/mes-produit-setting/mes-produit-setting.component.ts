import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mes-produit-setting',
  templateUrl: './mes-produit-setting.component.html',
  styleUrls: ['./mes-produit-setting.component.css']
})
export class MesProduitSettingComponent implements AfterViewInit {
  @ViewChild('buttonOne') buttonOne : ElementRef;

  constructor(private router:Router) { }

  ngAfterViewInit() {
    this.buttonOne.nativeElement.focus();
  }

  closeModal() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produits)');
  }

}
