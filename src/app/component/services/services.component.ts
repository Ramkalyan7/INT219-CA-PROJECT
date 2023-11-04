import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  ImagePaths: string[];
  services: any[]; 

  constructor() {
    this.ImagePaths = [
      'https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?w=2000&t=st=1697308583~exp=1697309183~hmac=00041be2f4b7c9843daf4b5bef32f4d7db9ce9b9b887c7e55f2c0776b708da43',
      'https://img.freepik.com/free-photo/cosmetologist-applying-mask-face-client-beauty-salon_1303-16759.jpg?w=2000&t=st=1697308724~exp=1697309324~hmac=5afd0e7ad6ad4b95c02a086d0282e5eacb6f42763829a51b34f3f705b360eb43',
      'https://img.freepik.com/free-photo/pedicure-process-home-salon-pedicure-foot-care-treatment-nail-process-professional-pedicures-master-blue-gloves-make-pedicure_343596-1601.jpg?w=2000&t=st=1697308792~exp=1697309392~hmac=209e5b987227dbe4265a10e1ebad9778b5926722bb41c6c6384aa5d539672311',
      'https://img.freepik.com/free-photo/handsome-bearded-man-barbershop-barber-work_627829-7356.jpg?w=2000&t=st=1697308894~exp=1697309494~hmac=3b45e17eee84d24a459dfdd52ce4e3cf0e593ca64b5aa8ce36ba09eec045ec9b'
    ];

    this.services = [
      {
        title: 'Relaxation Massage',
        subtitle: 'Unwind and Rejuvenate',
        description: 'Experience deep relaxation with our signature massage therapy. Let our skilled therapists melt away your stress, leaving you feeling rejuvenated and at peace.',
        image: this.ImagePaths[0],
      },
      {
        title: 'Facial and Skin Care',
        subtitle: 'Radiant Skin Awaits',
        description: 'Discover the secret to glowing skin with our facial and skin care treatments. Our expert estheticians use premium products to cleanse, nourish, and rejuvenate your skin, revealing your inner radiance.',
        image: this.ImagePaths[1],
      },
      {
        title: 'Manicure and Pedicure',
        subtitle: 'Nail Elegance',
        description: 'Indulge in the ultimate nail care experience with our manicure and pedicure services. Our skilled technicians will leave your hands and feet looking elegant and well-groomed.',
        image: this.ImagePaths[2],
      },
      {
        title: 'Haircut and Styling',
        subtitle: 'Stylish Transformations',
        description: 'Transform your look with our haircut and styling services. Our expert stylists create the perfect style, whether you seek a classic or contemporary look.',
        image: this.ImagePaths[3],
      },
    ];
  }

  ngOnInit() {
  }
}
