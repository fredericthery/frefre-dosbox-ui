import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSidenavComponent } from "./common/main-sidenav/main-sidenav.component";
import { MainHeaderComponent } from "./common/main-header/main-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainSidenavComponent, MainHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dosbox-ui';
}
