import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigModule } from '../../shared/components/config/config.module';

const Type: any = [
  'Half Day',
  'Sick Leave',
  'Casual Leave'
];

@Injectable()
// ({
//   providedIn: 'root'
// })
export class LeaveService {

  getType(): Observable<any> {
      return Type;
  }

  constructor(private httpClient: HttpClient, private config: ConfigModule) { }

  loadleave(): Observable<any> {
    return this.httpClient.get(this.config.BaseURL + 'leave');
  }
  updateleave(key, values): Observable<any> {
    return this.httpClient.post(this.config.BaseURL + 'updateleave', { key, values });
  }
  insertleave(values): Observable<any> {
    console.log(values);
    return this.httpClient.post(this.config.BaseURL + 'applyleave', values);
  }
}
