import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Adresse} from '../adresse/adresse.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier1',
  templateUrl: './versement-regulier1.component.html',
  styleUrls: ['./versement-regulier1.component.css']
})
export class VersementRegulier1Component implements OnInit {

  position: string = 'Annuelle';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: 'Mensuelle'},
    {name: 'Trimestrielle'},
    {name: 'Semestrielle'},
    {name: this.position}
  ];
  filteredOptions: Observable<Adresse[]>;

  myFilter(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Adresse>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(adresse?: Adresse): string | undefined{
    return adresse ? adresse.name : undefined;
  }
  private _filter(name: string): Adresse[]{
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.myFilter();
  }
  returnToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  goToVersementRegulier2(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier2)');
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
