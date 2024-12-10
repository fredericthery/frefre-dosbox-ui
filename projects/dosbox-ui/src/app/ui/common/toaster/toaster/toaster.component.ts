import { Component } from '@angular/core';
import { ToasterService } from '../../../../services/toaster/toaster.service';

@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent {

  messages: string[] =[];

  constructor(private toasterService: ToasterService) {
    this.toasterService.toastState.subscribe((message) => {
      this.messages.push(message);
      setTimeout(() => {
        this.messages.shift();
      }, 2000);
    });
  }

}
