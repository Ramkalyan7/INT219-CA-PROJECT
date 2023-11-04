import { Component } from '@angular/core';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.css']
})



export class CateComponent {

  service = [
    "https://cdn-icons-png.flaticon.com/512/10033/10033281.png",
  ]

  hs= [
    {
      name : "Hair",
      img : "https://cdn-icons-png.flaticon.com/512/10033/10033281.png",
    },
    {
      name : "Nail",
      img:'https://cdn-icons-png.flaticon.com/512/2437/2437898.png'
    },
    {
      name : "Skin",
      img:'https://cdn-icons-png.flaticon.com/512/2763/2763315.png'
    },
    {
      name : 'Other',
      img:'https://cdn-icons-png.flaticon.com/512/1005/1005661.png'
    }
  ]

}
