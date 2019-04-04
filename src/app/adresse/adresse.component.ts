import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Nationality} from '../donnees/donnees.component';

export interface Adresse {
  name: string;
}

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  position: string = '124 Rue de Belleville, 75020 Paris, France';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: '4 rue du parc, L-8380 Kleimbettinguen, Luxembourg '},
    {name: '69 rue du clopp, L-4810 Rodange, Luxembourg'},
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

  goToDonnees(){
    this.router.navigateByUrl('home/(contentOutlet:donnees)');
  }
  goToVousJoindre(){
    this.router.navigateByUrl('home/(contentOutlet:vousJoindre)');
  }
}
