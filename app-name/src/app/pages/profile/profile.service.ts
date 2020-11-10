import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor(private httpClient: HttpClient, private config: ConfigModule) { }
  getDetails( key: string): Observable<any> {
    return this.httpClient.post(this.config.BaseURL + 'profile', {url: this.config.BaseURL, Username: key });
  }
}
