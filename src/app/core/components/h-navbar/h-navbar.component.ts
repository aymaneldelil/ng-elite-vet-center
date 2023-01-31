import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.scss']
})
export class HNavbarComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "signup",
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/svg-signup.svg')
    )

  }
  ngOnInit(): void {
  }

}
