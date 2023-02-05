import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-toggle',
  templateUrl: './appointment-toggle.component.html',
  styleUrls: ['./appointment-toggle.component.scss']
})
export class AppointmentToggleComponent implements OnInit {


  @Input() toggleValue: string = '';
  @Input() toggleSvgUrl: string = '';
  @Input() toggleTitle: string = '';
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor() { }

  ngOnInit(): void {
  }

}
