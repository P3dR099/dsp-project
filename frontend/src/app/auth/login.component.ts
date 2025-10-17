import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container mt-5" style="max-width: 400px;">
      <h3 class="text-center mb-3">Iniciar sesión</h3>

      <form (ngSubmit)="login()">
        <div class="mb-3">
          <label>Usuario</label>
          <input type="text" [(ngModel)]="username" name="username" class="form-control" required>
        </div>

        <div class="mb-3">
          <label>Contraseña</label>
          <input type="password" [(ngModel)]="password" name="password" class="form-control" required>
        </div>

        <button class="btn btn-primary w-100" [disabled]="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>

        <div *ngIf="error" class="alert alert-danger mt-3">{{ error }}</div>
      </form>
    </div>
  `
})
export class LoginComponent {
  private auth = inject(AuthService);

  username = '';
  password = '';
  loading = false;
  error = '';

  login() {
    this.loading = true;
    this.error = '';
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.loading = false;
        window.location.reload();
      },
      error: () => {
        this.loading = false;
        this.error = 'Usuario o contraseña incorrectos';
      },
    });
  }
}
