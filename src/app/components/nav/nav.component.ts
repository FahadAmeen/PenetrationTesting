import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbarService/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle = 'Movies';
  constructor(private router: Router, public nav: NavbarService) { }

  ngOnInit() {
    this.showHideNavbar();
  }
  logOut() {
    console.log('logOut');
    const check = false;
    sessionStorage.setItem('isLogin', check.toString());
    // localStorage.setItem('OkRememberedMe', check.toString());
    const islogin = sessionStorage.getItem('isLogin').toString();

    // const isRemembered = localStorage.getItem('OkRememberedMe').toString();
    // console.log('log out login', islogin);
    // console.log('log out isRemembered', isRemembered);
    this.nav.hide();
    this.router.navigateByUrl('/');


  }
  showHideNavbar() {
    // const rememberMeCheck = localStorage.getItem('rememberMe');
    const loggedInCheck = sessionStorage.getItem('isLogin');
    // if (loggedInCheck === 'true' || rememberMeCheck === 'true') {
    if (loggedInCheck === 'true') {
      this.nav.show();
    }
  }

}
