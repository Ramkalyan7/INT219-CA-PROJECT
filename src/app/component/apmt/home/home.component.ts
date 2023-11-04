import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  services: any[] = [
    {
      name: 'Haircut',
      description: 'A professional haircut to refresh your look and style your hair.',
    },
    {
      name: 'Hair Color',
      description: 'Change or enhance your hair color with a variety of shades and techniques.',
    },
    {
      name: 'Manicure',
      description: 'Pamper your nails with a manicure for clean, polished, and well-groomed hands.',
    },
    {
      name: 'Pedicure',
      description: 'Treat your feet to a pedicure for soft and beautifully groomed toenails.',
    },
    {
      name: 'Facial',
      description: 'Revitalize your skin with a professional facial treatment for a healthy glow.',
    },

    {
      name: 'Extensions',
      description: 'Add length and volume to your hair with hair extensions or eyelash extensions.',
    },
  ];
  

  trendingServices = [
    {
      name: 'Hair Coloring',
      description: 'Touch-ups and maintenance for colored hair.',
      imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=3088&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Skin Treatments',
      description: 'Treatments for specific skin concerns, such as acne or aging.',
      imageUrl: 'https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?w=2000&t=st=1698841888~exp=1698842488~hmac=7b407f9b04ce4967b41fe3cb3e8f199a39161e307d16da3ea033177e8d91ae2d'
    },
    {
      name: 'Haircuts and Styling',
      description: 'Regular haircuts and styling to maintain or change their hairstyle.',
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Massages',
      description: 'Regular massages for relaxation and stress relief.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681873742682-bedb6345d3b7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  constructor(private route: ActivatedRoute) {
    
  }

  isAppointmentBookRoute(): boolean {
    return this.route.snapshot.routeConfig?.path === 'appointment/book';
  }
  

  isAppointmentRoute(): boolean {
    return this.route.snapshot.routeConfig?.path === 'appointment';
  }

}
