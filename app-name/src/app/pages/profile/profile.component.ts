import { Component } from '@angular/core';
import { getUserDetails } from '../../shared/services/userdetails.service';
import { ProfileService } from './profile.service';
@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})

export class ProfileComponent {
  employee: any;
  detail: string;

  // colCountByScreen: Object;

  constructor(private service: ProfileService) {
    this.setUser();
  }

  setUser() {
    const self = this;
    const Username = getUserDetails('Username');
    self.service.getDetails(Username).subscribe(data => this.employee = data);
  }
}
