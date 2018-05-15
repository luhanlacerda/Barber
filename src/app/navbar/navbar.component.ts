import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private url: string;
  private subscription: Subscription;

  /*constructor(private route: ActivatedRoute) { 
  }*/

  constructor() {
  }

  ngOnInit() {
    // this.subscription = this.route.url.subscribe(
    //   (params: any) => {
    //     this.url = params['url'];
    //   }
    // )
    //console.log(this.route.url);
  }

}
