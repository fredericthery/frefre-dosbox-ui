import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGithub, featherPackage } from '@ng-icons/feather-icons';
import { heroArrowDownTray, heroCalendar, heroChartBar, heroGlobeAlt, heroHome, heroMagnifyingGlass, heroPhoto, heroStar } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-main-sidenav',
  imports: [NgIconComponent],
  templateUrl: './main-sidenav.component.html',
  styleUrl: './main-sidenav.component.scss',
  providers: [provideIcons({
    heroMagnifyingGlass,
    heroCalendar,
    heroStar,
    heroArrowDownTray,
    heroChartBar,
    heroPhoto,
    heroGlobeAlt,
    heroHome,
    featherGithub,
    featherPackage
   })]
})

export class MainSidenavComponent {

}
