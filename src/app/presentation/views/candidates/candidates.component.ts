import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PersonAmountState } from '../../../data/dto/person_amount_state.model';
import { PersonService } from '../../../data/datasource/person.service';

@Component({
  selector: 'view-candidates',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css',
})
export class CandidatesComponent {
  displayedColumns: string[] = ['estado', 'amount'];

  datasource: PersonAmountState[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getAmountByState().subscribe((result) => {
      this.datasource = result;
    });
  }
}
