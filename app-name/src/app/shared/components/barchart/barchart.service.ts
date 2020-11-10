import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigModule } from '../config/config.module';

@Injectable()
export class BarchartService {
    constructor(private http: HttpClient, private config: ConfigModule) {}

    getData(Url: string, Param: any): Observable<any> {
         return this.http.post(Url, Param);
    }
}
