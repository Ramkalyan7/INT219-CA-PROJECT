import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarItems = [
    {
      title: 'Home',
      link: '/home',
      iconClass: 'w-5 h-5',
      iconViewBox: '0 0 24 24',
      iconStrokeWidth: '1.5',
      iconStroke: 'currentColor',
      iconColor: 'text-gray-600',
    },
    {
      title: 'Dashboard',
      link: '/dashboard',
      iconClass: 'w-5 h-5',
      iconViewBox: '0 0 24 24',
      iconStrokeWidth: '1.5',
      iconStroke: 'currentColor',
      iconColor: 'text-gray-600',
    },
    {
      title: 'Settings',
      link: '/settings',
      iconClass: 'w-5 h-5',

    }
  ];
}
