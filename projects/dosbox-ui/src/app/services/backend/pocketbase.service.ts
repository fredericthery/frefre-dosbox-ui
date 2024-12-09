import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {

  pbase: PocketBase;

  constructor() {
    this.pbase = new PocketBase(environment.backend.pocketbase.url);
   }
}
