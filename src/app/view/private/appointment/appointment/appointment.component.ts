import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {


  public firstFormGroup: FormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup: FormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor(
    private _fb: FormBuilder
  ) { }
  //---------------------------------------------------------------------------------------------------------------------------------------------


  ngOnInit(): void {
  }

}
