import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private url: string;
  private subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logged() {
    return localStorage.getItem("login") != null;
  }

  logout() {
    localStorage.removeItem("login");
    this.router.navigate(['/']);
  }

}
