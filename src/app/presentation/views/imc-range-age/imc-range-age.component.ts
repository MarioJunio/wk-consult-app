import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PersonService } from '../../../data/datasource/person.service';
import { PersonImcAgeRange } from '../../../data/dto/person_imc_age_range.model';

@Component({
  selector: 'view-imc-range-age',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './imc-range-age.component.html',
  styleUrl: './imc-range-age.component.css'
})
export class ImcRangeAgeComponent {

  displayedColumns: string[] = ['ageStart', 'ageEnd', 'imc'];

  datasource: PersonImcAgeRange[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getImcByAgeRange().subscribe((result) => {
      this.datasource = result;
    });
  }

}
