import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PocketbaseService } from '../backend/pocketbase.service';
import { ToasterService } from '../toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private pbseservice: PocketbaseService,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  async login(login: string, password: string) {
    try {
      await this.pbseservice.pbase.collection('users').authWithPassword(login, password);
      this.toasterService.showToast('Authentication succeed !!!');
      this.router.navigate(['']);
    }
    catch (e) {
      this.toasterService.showToast('Authentication failed. Please check your credentials and try again.');
      throw e;
    }
  }

  isAuthenticated(): boolean {
    return this.pbseservice.pbase.authStore.isValid;
  }

  logout() {
    this.pbseservice.pbase.authStore.clear();
    this.router.navigate(['']);
  }
}
