import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonAmountState } from '../dto/person_amount_state.model';
import { PersonImcAgeRange } from '../dto/person_imc_age_range.model';
import { PersonPercentOverweight } from '../dto/person_percent_overweight.model';
import { PersonBloodTypeAgeAvg } from '../dto/person_blood_type_age_avg.model';
import { PersonAmountReceptorsBloodType } from '../dto/person_amount_receptors_by_blood_type.model';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseUrl: string = environment.apiUrl;
  private resource: string = '/persons'

  constructor(private http: HttpClient) {}

  getAmountByState(): Observable<PersonAmountState[]> {
    return this.http.get<PersonAmountState[]>(
      `${this.baseUrl + this.resource}/amount-by-estado`
    );
  }

  getImcByAgeRange(): Observable<PersonImcAgeRange[]> {
    return this.http.get<PersonImcAgeRange[]>(
      `${this.baseUrl + this.resource}/imcs-by-age-range`
    );
  }

  getPercentOverweight(): Observable<PersonPercentOverweight> {
    return this.http.get<PersonPercentOverweight>(
      `${this.baseUrl + this.resource}/percent-overweight`
    );
  }

  getBloodTypeByAgeAvg(): Observable<PersonBloodTypeAgeAvg[]> {
    return this.http.get<PersonBloodTypeAgeAvg[]>(
      `${this.baseUrl + this.resource}/blood-type-age-average`
    );
  }

  getBloodTypeReceptorsAmount(): Observable<PersonAmountReceptorsBloodType[]> {
    return this.http.get<PersonAmountReceptorsBloodType[]>(
      `${this.baseUrl + this.resource}/blood-type-receptors-amount`
    );
  }
}
