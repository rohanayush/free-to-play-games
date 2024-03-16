import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  openSubMenu: string | null = null;

  toggleSubMenu(subMenu: string) {
    this.openSubMenu = this.openSubMenu === subMenu ? null : subMenu;

  }

  isSubMenuOpen(subMenu: string): boolean {
    // alert(this.openSubMenu === subMenu)
    return this.openSubMenu === subMenu;
  }
}
