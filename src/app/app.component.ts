import { DataService } from './services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbarService/navbar.service';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavbarService]
})
export class AppComponent implements OnInit {
  title = 'AngularApp';
  constructor(private dataService: DataService, public nav: NavbarService,
    // tslint:disable-next-line: align
    private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
  ngOnInit() {
    this.getAllPages();
    this.checkRememberMe();
    this.showHideNavbar();
  }

  showHideNavbar() {
    // console.log('nav show/hide', this.nav.visible);

    // const rememberMeCheck = localStorage.getItem('rememberMe');
    const loggedInCheck = sessionStorage.getItem('isLogin');
    // if (loggedInCheck === 'true' || rememberMeCheck === 'true') {
    if (loggedInCheck === 'true') {
      this.nav.show();
    }

  }
  getAllPages() {
    this.dataService.getAllPages().subscribe(data => {
      localStorage.setItem('permissionData', JSON.stringify(data));
      // const check = JSON.parse(localStorage.getItem('permissionData'));
      // console.log(check);

    });
  }

  checkRememberMe() {
    // const rememberMeCheck = localStorage.getItem('rememberMe');
    const loggedInCheck = sessionStorage.getItem('isLogin');
    let checked = false;
    // if (rememberMeCheck === 'true' || loggedInCheck === 'true') {
    if (loggedInCheck === 'true') {
      checked = true;
      // localStorage.setItem('OkRememberedMe', checked.toString());
      sessionStorage.setItem('isLogin', checked.toString());
      return true;
    } else { return false; }
  }
}
