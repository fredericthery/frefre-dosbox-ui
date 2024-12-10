import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./ui/common/main-header/main-header.component";
import { MainSidenavComponent } from "./ui/common/main-sidenav/main-sidenav.component";
import { ToasterComponent } from "./ui/common/toaster/toaster/toaster.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainSidenavComponent, MainHeaderComponent, ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dosbox-ui';
}
