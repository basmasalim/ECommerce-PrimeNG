import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    MenubarModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  items: any[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Products',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: "Woman's Fashion",
            icon: 'pi pi-bolt',
          },
          {
            label: "Men's Fashion",
            icon: 'pi pi-server',
          },
          {
            separator: true,
          },
          {
            label: 'Electronics',
            icon: 'pi pi-pencil',
          },
        ],
      },
    ];
  }
}
