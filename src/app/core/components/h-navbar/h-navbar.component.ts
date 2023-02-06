import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  pairwise,
  share,
  tap,
  throttleTime,
} from 'rxjs';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.scss'],
})
export class HNavbarComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'signup',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/svg-signup.svg'
      )
    );
    //-----------------
    this.matIconRegistry.addSvgIcon(
      'lang-en',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/svg-lang-en.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lang-ar',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/svg-lang-ar.svg'
      )
    );
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {}

  public homeRoute(): void {    
    this.router.navigate(['/']);
  }
  //---------------
  public appointmentRoute(): void {
    this.router.navigate(['/appointment']);
  }
  //---------------
  public petshopRoute(): void {
    this.router.navigate(['/petshop']);
  }
  //---------------
  public signinRoute(): void {
    this.router.navigate(['/auth', 'signin']);
  }
  //---------------
  public signupRoute(): void {
    this.router.navigate(['/auth', 'signup']);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------

  public isVisible = false;

  scroll$ = fromEvent(window, 'scroll').pipe(
    throttleTime(100),
    map(() => window.pageYOffset),
    pairwise(),
    map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
    distinctUntilChanged()
  );

  goingUp$ = this.scroll$
    .pipe(
      filter((direction) => direction === Direction.Up),
      tap((t) => console.log('UP'))
    )
    .subscribe(() => (this.isVisible = false));

  goingDown$ = this.scroll$
    .pipe(
      filter((direction) => direction === Direction.Down),
      tap((t) => console.log('DOWN'))
    )
    .subscribe(() => (this.isVisible = true));
}
