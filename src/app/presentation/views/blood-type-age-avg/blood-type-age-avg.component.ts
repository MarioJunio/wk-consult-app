import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PersonBloodTypeAgeAvg } from '../../../data/dto/person_blood_type_age_avg.model';
import { PersonService } from '../../../data/datasource/person.service';

@Component({
  selector: 'view-blood-type-age-avg',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './blood-type-age-avg.component.html',
  styleUrl: './blood-type-age-avg.component.css',
})
export class BloodTypeAgeAvgComponent {
  displayedColumns: string[] = ['bloodType', 'age'];

  datasource: PersonBloodTypeAgeAvg[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getBloodTypeByAgeAvg().subscribe((result) => {
      this.datasource = result;
    });
  }
}
