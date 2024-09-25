import { Component } from '@angular/core';
import { RegisterUserDTO } from '../../models/user';
import { UserService } from '../../services/user.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  model = new RegisterUserDTO();
  errorMessage = "";
  fileName = "";

  constructor(private userService: UserService) { }

  register() {
    this.userService.register(this.model)
      .pipe(
        catchError(err => {
          this.errorMessage = err.error.message;
          return of(undefined);
        }),
        tap(dati => console.log(dati))
      )
      .subscribe(r => {
        if (r) {
          this.model = new RegisterUserDTO();
          this.errorMessage = "";
        }
      })
  }

  ping() {
    this.userService.ping().subscribe(m => alert(m.message));
  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);

      this.userService.uploadImage(formData)
        .subscribe(immagine => this.model.immagine = immagine.fileName);
    }
  }
}
