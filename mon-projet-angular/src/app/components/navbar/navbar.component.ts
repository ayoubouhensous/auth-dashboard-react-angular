import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>(); // Événement pour la sidebar

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.sidebarToggle.emit(); // Envoie un événement pour changer l'état du sidebar
  }
}
