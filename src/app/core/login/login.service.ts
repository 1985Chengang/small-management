import { Injectable } from '@angular/core';
import { AuthJwtService} from '../auth/auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authServerProvider: AuthJwtService) {

  }

  login(credentials, callback?) {
    // const cb = callback || function () {};

    return new Promise( (resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          // return cb();
          // resolve(data);
          return resolve(data);
        },
        err => {
          console.log('error :' + err);
          reject(err);
          // return cb(err);
          return reject;
        }
      );
    });
  }
}
