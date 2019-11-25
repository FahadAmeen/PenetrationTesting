import { Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appPagePermission]'
})

export class PagePermissionDirective implements OnInit {

  constructor(private router: Router) { }
  url;

  ngOnInit() {
    this.checkPermission();
  }
  checkPermission() {

    // console.log(this.router.url);
    let check = Array.of(JSON.parse(localStorage.getItem('permissionData')));

    // console.log(check[0]);
    check = check[0];
    this.url = 'http://localhost:4200' + this.router.url;

    // console.log(this.url === check[0].pageURL);

    check.forEach(element => {
      if (this.url === element.pageURL) {
        if (element.hasPermission) {
          return;
        } else {
          this.router.navigate(['/error']);
        }
      } else {
        return;
      }

    });



  }
}
