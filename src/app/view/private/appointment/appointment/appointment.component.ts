import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit, AfterContentChecked {
  public firstFormGroup: FormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup: FormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = false;
  //---------------------------------------------------------------------------------------------------------------------------------------------
  // @use '../../../../../assets/icons/svg-a-dog.svg'

  public svgUrls: { [key: string]: string } = {
    dog: './assets/icons/svg-a-dog.svg',
    cat: './assets/icons/svg-a-cat.svg',
  };
  //---------------------------------------------------------------------------------------------------------------------------------------------
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _fb: FormBuilder,
    private _breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = _breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------

  public stepNext(stepper: MatStepper) {
    stepper.next();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------

  ngAfterContentChecked(): void {
    console.log(this.firstFormGroup.controls['firstCtrl']);
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {}
}
