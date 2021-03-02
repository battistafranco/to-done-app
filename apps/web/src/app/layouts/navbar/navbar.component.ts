import { LayoutService } from './../../services/layout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tdn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showAddButton$ = this.layoutService.showAddButton$;
  constructor(private layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {
    this.toogleButtons(true);
  }

  goTo(route) {
    this.toogleButtons(route !== 'add');
    this.router.navigate([route]);
  }

  toogleButtons(value) {
    this.layoutService.showAddButton(value);
  }
}
