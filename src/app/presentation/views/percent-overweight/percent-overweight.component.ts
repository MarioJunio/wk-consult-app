import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PersonPercentOverweight } from '../../../data/dto/person_percent_overweight.model';
import { PersonService } from '../../../data/datasource/person.service';

@Component({
  selector: 'view-percent-overweight',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './percent-overweight.component.html',
  styleUrl: './percent-overweight.component.css',
})
export class PercentOverweightComponent {
  displayedColumns: string[] = ['femalePercent', 'malePercent'];

  datasource: PersonPercentOverweight[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPercentOverweight().subscribe((result) => {
      this.datasource = [result];
    });
  }
}
