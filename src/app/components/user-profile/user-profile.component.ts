import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user?: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.userService.getUserById(id)
        .subscribe(user => this.user = user);
    }
  }

  getImageUrl() {
    if (this.user.immagine.startsWith("http")) {
      return this.user.immagine;
    } else {
      return "http://localhost:3000/uploads/" + this.user.immagine;
    }
  }
}
