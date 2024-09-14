import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maaris FrontEnd';
  homePage = true

  constructor(private _router:Router) {
  
  }
  public navigateToCustomerSearch() {
   this.homePage = false;
   this._router.navigate(['/add']);
  }
}