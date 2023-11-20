import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PersonAmountReceptorsBloodType } from '../../../data/dto/person_amount_receptors_by_blood_type.model';
import { PersonService } from '../../../data/datasource/person.service';

@Component({
  selector: 'view-blood-type-receptors-amount',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './blood-type-receptors-amount.component.html',
  styleUrl: './blood-type-receptors-amount.component.css'
})
export class BloodTypeReceptorsAmountComponent {

  displayedColumns: string[] = ['bloodType', 'amountReceptors'];

  datasource: PersonAmountReceptorsBloodType[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getBloodTypeReceptorsAmount().subscribe((result) => {
      this.datasource = result;
    });
  }

}
