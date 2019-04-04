import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Nationality {
  name: string;
}

@Component({
  selector: 'app-donnees',
  templateUrl: './donnees.component.html',
  styleUrls: ['./donnees.component.scss']
})
export class DonneesComponent implements OnInit {

  //date = new FormControl(new Date(1992, 0, 27));
  startDate = new Date(1970, 0, 1);
  selected = 'Français';

  myControl = new FormControl();
  options: Nationality[] = [
    {name: 'Française'},
    {name: 'Anglaise'},
    {name: 'Allemande'},
    {name: 'Belge'},
    {name: 'Luxembourgeoise'},
    {name: 'Americaine'},
    {name: 'Italienne'},
    {name: 'Hollandaise'},
    {name: 'Canadienne'}
  ];
  filteredOptions: Observable<Nationality[]>;

  myFilter(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Nationality>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(nationality?: Nationality): string | undefined{
    return nationality ? nationality.name : undefined;
  }
  private _filter(name: string): Nationality[]{
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(private router: Router, private adapter: DateAdapter<any>) { }

  ngOnInit() {
    this.myFilter();
    this.selected.fontcolor('#FFFFFF')
    this.french();
  }

  goToLancementB(){
    this.router.navigateByUrl('home/(contentOutlet:lancementB)');
  }
  goToAdresse(){
    this.router.navigateByUrl('home/(contentOutlet:adresse)');
  }
  french(){
    this.adapter.setLocale('fr');
  }
}
