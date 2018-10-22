import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {
  SERVER_API_URL = 'http://localhost:8080/api/authenticate';

  constructor(private http: HttpClient, private $localStorage: LocalStorageService, private $sessionStorage: SessionStorageService) {

  }

  login(credentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(this.SERVER_API_URL, data, { observe: 'response'}).pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp) {
      const bearerToken = resp.headers.get('Authorization');
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        this.storeAuthenticationToken(jwt, false);
        return jwt;
      }
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }
}
