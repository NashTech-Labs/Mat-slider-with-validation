import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  filterForm: FormGroup = new FormGroup({
    startTime: new FormControl(0),
    endTime: new FormControl(24, Validators.min(1))
});
}

