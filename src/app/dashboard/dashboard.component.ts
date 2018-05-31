import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isCliente(): boolean {
    if (localStorage.getItem('login')) {
      try {
        let login = JSON.parse(localStorage.getItem('login'));

        if (login.cargo === "CLIENTE") {
          return true;
        }
      } catch (err) {
      }
    }

    return false;
  }

  isFuncionario(): boolean {
    if (localStorage.getItem('login')) {
      try {
        let login = JSON.parse(localStorage.getItem('login'));

        if (login.cargo === "FUNCIONARIO") {
          return true;
        }
      } catch (err) {
      }
    }

    return false;
  }

}
