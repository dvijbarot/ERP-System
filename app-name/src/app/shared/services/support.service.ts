import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
@Injectable()
export class SupportService {

  constructor(private httpClient: HttpClient, private config: ConfigModule) { }
  // Closed
  ShowAc(key: string): Observable<any> {
    return this.httpClient.post(this.config.BaseURL + 'showActivity', { ID: key });
  }
  // Gen
  getDetails(key: string): Observable<any> {
    return this.httpClient.post(this.config.BaseURL + 'details', {
      Telephone: key
    });
  }
  getContacts(): Observable<any> {
    return this.httpClient.get(this.config.BaseURL + 'getcontact');
  }
  Generate(val) {
    return this.httpClient.post(this.config.BaseURL + 'generateTicket', val);
  }
  // Pending
  updateTicket(key, entityID, values): Observable<any> {
    console.log(entityID);
    values.entityID = entityID;
    console.log(values);
    return this.httpClient.post(this.config.BaseURL + 'updateTicket', {key, entityID , values });
  }
  ShowActivity(key: string): Observable<any> {
    return this.httpClient.post(this.config.BaseURL + 'showActivity', { ID: key });
  }
  addActivity(values, key, Username): Observable<any> {
    values.ID = key;
    values.ModifiedBy = Username;
    console.log(values);
    return this.httpClient.post(this.config.BaseURL + 'addActivity', values);
  }
}
