import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRightEndOnRectangle, heroArrowRightOnRectangle, heroPlusCircle, heroUser, heroUsers } from '@ng-icons/heroicons/outline';
import { AuthenticationService } from '../../../services/account/authentication.service';


@Component({
  selector: 'app-main-header',
  imports: [NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ heroUsers,
          heroUser,
          heroArrowRightEndOnRectangle,
          heroArrowRightOnRectangle,
          heroPlusCircle })],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

  constructor(private authentificationService: AuthenticationService) {}

  logout() {
    this.authentificationService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authentificationService.isAuthenticated();
  }

}
