import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CandidatesComponent } from "./views/candidates/candidates.component";
import { ImcRangeAgeComponent } from "./views/imc-range-age/imc-range-age.component";
import { PercentOverweightComponent } from "./views/percent-overweight/percent-overweight.component";
import { BloodTypeAgeAvgComponent } from "./views/blood-type-age-avg/blood-type-age-avg.component";
import { BloodTypeReceptorsAmountComponent } from "./views/blood-type-receptors-amount/blood-type-receptors-amount.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HttpClientModule, RouterOutlet, MatTabsModule, CandidatesComponent, ImcRangeAgeComponent, PercentOverweightComponent, BloodTypeAgeAvgComponent, BloodTypeReceptorsAmountComponent]
})
export class AppComponent {}
