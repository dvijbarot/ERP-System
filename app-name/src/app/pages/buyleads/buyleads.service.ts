import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigModule } from '../../shared/components/config/config.module';
import { Observable } from 'rxjs';

const RemarksList: string[] = [
    'Asked to Meet',
    'Not Interested',
    'Interested',
    'Not Answered',
    'Call Back Later'
];

const CallS: string[] = [
    'Not Interested',
    'Interested',
    'Not Answered'
];

@Injectable()
export class BuyleadsService {
    constructor(private httpClient: HttpClient, private config: ConfigModule) { }
    loadData(): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + 'blead');
    }
    loadDatamatch(commodityname: string): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'sellmatch', { COMM: commodityname });
    }
    getcalls(): any[] {
        return CallS;
    }
    getremarks(): any[] {
        return RemarksList;
    }
    SaveLogs(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'savecall', values, { responseType: 'text' });
    }
    loadHistoryMatch(Logs: string): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'history', { Ref: Logs });
    }
}
