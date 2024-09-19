import { Component } from '@angular/core';
import { RegisterUserDTO } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  model = new RegisterUserDTO();

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.model)
      .subscribe(r => console.log(r));
  }
}
