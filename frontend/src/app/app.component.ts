import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecibosComponent } from './recibos/recibos.component';
import { LoginComponent } from './auth/login.component';
import { AuthService } from './services/auth.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    RecibosComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  private auth = inject(AuthService);
  isLoggedIn = false;

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((val) => (this.isLoggedIn = val));
  }

  logout() {
    this.auth.logout();
  }
}
