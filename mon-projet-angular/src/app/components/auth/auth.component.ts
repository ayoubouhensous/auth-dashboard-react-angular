import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common'; // ✅ Corrige `*ngIf`
import { FormsModule } from '@angular/forms';   // ✅ Corrige `ngModel`
import { ActivatedRoute } from '@angular/router';
interface RouteData {
  mode: 'login' | 'signup'; // Le mode peut être soit 'login', soit 'signup'
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [CommonModule, FormsModule], 
  standalone: true,
  // ✅ Ajoute CommonModule & FormsModule

})
export class AuthComponent {
  isLoginMode = true;
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const routeData = data as RouteData; // Forcer le typage
      this.isLoginMode = routeData.mode === 'login';
    });
  }
  

  toggleMode(event: Event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.isLoginMode = !this.isLoginMode;
    if (this.isLoginMode) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/signup']);
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe((users: any[]) => {
      const user = users.find((u: any) => u.email === this.email && u.password === this.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('Connexion réussie !');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Identifiants incorrects !');
      }
    }, (error: any) => {
      console.error('Erreur de connexion', error);
    });
  }
  

  signup() {
    if (!this.username || !this.email || !this.password) {
      alert('Tous les champs sont obligatoires !');
      return;
    }
  
    this.authService.login(this.email, this.password).subscribe((users: any[]) => {
      if (users.some((user: any) => user.email === this.email)) {
        alert('Cet email est déjà utilisé !');
        return;
      }
  
      this.authService.signup(this.username, this.email, this.password).subscribe(() => {
        alert('Inscription réussie !');
        this.isLoginMode = true;
      }, (error: any) => {
        console.error('Erreur lors de l\'inscription', error);
      });
    });
  }
  
}
