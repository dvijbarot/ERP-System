import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigModule } from '../config/config.module';

@Injectable()
export class GridService {
    constructor(private http: HttpClient, private config: ConfigModule) {}

    getData(Url: string): Observable<any> {
         return this.http.get(this.config.BaseURL + Url);
    }
  }
