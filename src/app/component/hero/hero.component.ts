import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ImagePaths: string[]; // Change to an array

  constructor() {
    this.ImagePaths = [
      'https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-24956.jpg?w=900&t=st=1697304509~exp=1697305109~hmac=5cac49070a33dd59cdeca201383e74820beb3efad55441a7dc5a3ebc686b5443',
      'https://images.pexels.com/photos/3993465/pexels-photo-3993465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?w=900&t=st=1697305623~exp=1697306223~hmac=5720544a965f8f7222e02e80ac248f9af1ab13464de528b3114fb9d3f5128464'
    ];
  }

  

  ngOnInit() {
  }

}
