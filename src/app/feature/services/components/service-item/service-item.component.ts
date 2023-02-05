import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../interface/iservice';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

private _path = '../../../../../assets/icons'
public serviceData:Array<Iservice> =[
  {
    title:"X-ray",
    svgUrl:`./assets/icons/svg-s-xray.svg`
  },
  {
    title:"Vaccination",
    svgUrl:`./assets/icons/svg-s-vacination.svg`
  },
  {
    title:"Surgery",
    svgUrl:`./assets/icons/svg-s-surgery.svg`
  },
  {
    title:"Pet Shop",
    svgUrl:`./assets/icons/svg-s-pet-shop.svg`
  },
  {
    title:"Pet Hotel",
    svgUrl:`./assets/icons/svg-s-pet-hotel.svg`
  },
  {
    title:"Grooming",
    svgUrl:`./assets/icons/svg-s-gromming.svg`
  },
  {
    title:"Laboratory",
    svgUrl:`./assets/icons/svg-s-lab.svg`
  },
  {
    title:"Home Visit",
    svgUrl:`./assets/icons/svg-s-home-visit.svg`
  },
  {
    title:"Echocardiography",
    svgUrl:`./assets/icons/svg-s-echo.svg`
  },
  
  {
    title:"Dental Care",
    svgUrl:`./assets/icons/svg-s-dental.svg`
  },
  
  
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
