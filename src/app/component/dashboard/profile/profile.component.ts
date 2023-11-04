import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    profile : string = "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Kyojuro-Rengoku.Demon-Slayer.webp";
    name : string = "Kyojuro Rengoku";
    email : string = "rengoku@hashira.com";
    
}

