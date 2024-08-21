import { Component, inject } from '@angular/core';

import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { ErrorService } from './shared/error.service';
import { ErrorModalComponent } from "./shared/modal/error-modal/error-modal.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css',],
  imports: [AvailablePlacesComponent, UserPlacesComponent, ErrorModalComponent,NgIf],
})
export class AppComponent {
  private errorService=inject(ErrorService);

error=this.errorService.error 
}
