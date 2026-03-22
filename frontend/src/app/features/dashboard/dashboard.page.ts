import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  readonly auth = inject(AuthService);
}