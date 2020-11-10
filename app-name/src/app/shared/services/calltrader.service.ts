import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ConfigModule } from '../components/config/config.module';
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
const Role: any[] = [
    { id: 1, value: 'Trader'}
];
const quality: any[] = [
    { id: 1, value: 'A'},
    { id: 2, value: 'B'},
    { id: 3, value: 'C'},
    { id: 4, value: 'D'},
    { id: 5, value: 'E'},
];
const productlist: any[] = [
    { id: 1, Name: 'Almond' },
    { id: 2, Name: 'Amla' },
    { id: 3, Name: 'Anise' },
    { id: 4, Name: 'Apple' },
    { id: 5, Name: 'Areca nut' },
    { id: 6, Name: 'Arhar' },
    { id: 7, Name: 'Bajra' },
    { id: 8, Name: 'Bamboo' },
    { id: 9, Name: 'Banana' },
    { id: 10, Name: 'Barley' },
    { id: 11, Name: 'Basmati Rice' },
    { id: 12, Name: 'Beetroot' },
    { id: 13, Name: 'Betel leaves' },
    { id: 14, Name: 'Okra' },
    { id: 15, Name: 'Bitter gourd' },
    { id: 16, Name: 'Bottle gourd' },
    { id: 17, Name: 'Brinjal' },
    { id: 18, Name: 'Broccoli' },
    { id: 19, Name: 'Buck Wheat' },
    { id: 20, Name: 'Cabbage' },
    { id: 21, Name: 'Capsicum' },
    { id: 22, Name: 'Carnation' },
    { id: 23, Name: 'Carrots' },
    { id: 24, Name: 'Castor seed' },
    { id: 25, Name: 'Cauliflower' },
    { id: 26, Name: 'Chana whole' },
    { id: 27, Name: 'Chickpeas' },
    { id: 28, Name: 'Chicory' },
    { id: 29, Name: 'Cluster beans' },
    { id: 30, Name: 'Coconut' },
    { id: 31, Name: 'Coffee' },
    { id: 32, Name: 'Colocasia vegetable' },
    { id: 33, Name: 'Coriander leaves' },
    { id: 34, Name: 'Coriander whole' },
    { id: 35, Name: 'Cotton' },
    { id: 36, Name: 'Cotton Seed' },
    { id: 37, Name: 'Cucumber' },
    { id: 38, Name: 'Cumin' },
    { id: 39, Name: 'Custard apple' },
    { id: 40, Name: 'Dried Raw Mango Slices' },
    { id: 41, Name: 'Drumstick' },
    { id: 42, Name: 'Dry Ginger' },
    { id: 43, Name: 'Fennel seed' },
    { id: 44, Name: 'Fenugreek leaves' },
    { id: 45, Name: 'Fenugreek seed' },
    { id: 46, Name: 'Garlic' },
    { id: 47, Name: 'Ginger' },
    { id: 48, Name: 'Gladiolus' },
    { id: 49, Name: 'Grapes' },
    { id: 50, Name: 'Green Peas' },
    { id: 51, Name: 'Green chillies' },
    { id: 52, Name: 'Groundnut with pods' },
    { id: 53, Name: 'Guar Seed' },
    { id: 54, Name: 'Guava' },
    { id: 55, Name: 'Horse Gram' },
    { id: 56, Name: 'Isabgol' },
    { id: 57, Name: 'Ivy gourd' },
    { id: 58, Name: 'Jackfruit' },
    { id: 59, Name: 'Jaggery' },
    { id: 60, Name: 'Jimikand(Suran)' },
    { id: 61, Name: 'Jowar' },
    { id: 62, Name: 'Kinnow' },
    { id: 63, Name: 'Kusum seed' },
    { id: 64, Name: 'Large cardamom' },
    { id: 65, Name: 'Lemon' },
    { id: 66, Name: 'Lentil' },
    { id: 67, Name: 'Lettuce' },
    { id: 68, Name: 'Linseed' },
    { id: 69, Name: 'Litchi' },
    { id: 70, Name: 'Lobia' },
    { id: 71, Name: 'Mahua flower' },
    { id: 72, Name: 'Mahua seed' },
    { id: 73, Name: 'Maize' },
    { id: 74, Name: 'Mango' },
    { id: 75, Name: 'Marigold' },
    { id: 76, Name: 'Masoor whole' },
    { id: 77, Name: 'Moong whole' },
    { id: 78, Name: 'Moth' },
    { id: 79, Name: 'Mushrooms' },
    { id: 80, Name: 'Musk melon' },
    { id: 81, Name: 'Mustard leaf' },
    { id: 82, Name: 'Mustard seed' },
    { id: 83, Name: 'Niger Seed' },
    { id: 84, Name: 'Nutmeg' },
    { id: 85, Name: 'Onion' },
    { id: 86, Name: 'Orange' },
    { id: 87, Name: 'Paddy' },
    { id: 88, Name: 'Papaya' },
    { id: 89, Name: 'Pea' },
    { id: 90, Name: 'Peach' },
    { id: 91, Name: 'Peanut kernel' },
    { id: 92, Name: 'Pear' },
    { id: 93, Name: 'Pigeon Peas' },
    { id: 94, Name: 'Pineapple' },
    { id: 95, Name: 'Plum' },
    { id: 96, Name: 'Pointed gourd' },
    { id: 97, Name: 'Pomegranate' },
    { id: 98, Name: 'Pongam seeds' },
    { id: 99, Name: 'Potato' },
    { id: 100, Name: 'Pumpkin' },
    { id: 101, Name: 'Ragi' },
    { id: 102, Name: 'Raisins' },
    { id: 103, Name: 'Rajma' },
    { id: 104, Name: 'Raw Cashew nut' },
    { id: 105, Name: 'Raw Jute' },
    { id: 106, Name: 'Raw Mango for pickles' },
    { id: 107, Name: 'Red chilli' },
    { id: 108, Name: 'Reddish' },
    { id: 109, Name: 'Ribbed celery' },
    { id: 110, Name: 'Ridge Gourd' },
    { id: 111, Name: 'Rittha' },
    { id: 112, Name: 'SEM' },
    { id: 113, Name: 'Safflower seeds' },
    { id: 114, Name: 'Saffron' },
    { id: 115, Name: 'Sal Seed' },
    { id: 116, Name: 'Sapota' },
    { id: 117, Name: 'Sesame seed' },
    { id: 118, Name: 'Snake Gourd' },
    { id: 119, Name: 'Sorghum' },
    { id: 120, Name: 'Soyabean' },
    { id: 121, Name: 'Spinach' },
    { id: 122, Name: 'Squashes' },
    { id: 123, Name: 'Strawberries' },
    { id: 124, Name: 'Sugarcane' },
    { id: 125, Name: 'Sunflower seed' },
    { id: 126, Name: 'Sweet Corn' },
    { id: 127, Name: 'Sweet orange' },
    { id: 128, Name: 'Sweet potato' },
    { id: 129, Name: 'Tamarind' },
    { id: 130, Name: 'Tejpata' },
    { id: 131, Name: 'Tender coconut' },
    { id: 132, Name: 'Tomato' },
    { id: 133, Name: 'Tuberose' },
    { id: 134, Name: 'Turmeric' },
    { id: 135, Name: 'Urad whole' },
    { id: 136, Name: 'Watermelon' },
    { id: 137, Name: 'Wheat' },
    { id: 138, Name: 'White Peas' }
];


@Injectable()
export class CalltraderService {
    constructor(private httpClient: HttpClient, private config: ConfigModule) { }
    loadCall(): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + 'callsregtrader');
    }
    insertData(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'insertcalls', values);
    }
    uploadData(key, values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'updateUR', { key, values });
    }
    SaveLogs(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'savecallUR', values, { responseType: 'text' });
    }
    getprod(): any[] {
        return productlist;
    }
    getcalls(): any[] {
        return CallS;
    }
    getremarks(): any[] {
        return RemarksList;
    }
    getrole(): any[] {
        return Role;
    }
    getquality(): any[] {
        return quality;
    }
    loadHistoryMatch(Logs: string): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'historyUR', { Ref: Logs });
    }
    loadDatamatch(commodityname: string): Observable<any> {
        console.log(commodityname);
        return this.httpClient.post(this.config.BaseURL + 'sellmatchUR', { COMM: commodityname });
    }
    loadDatamatchR(ID: string): Observable<any> {
        console.log(ID);
        return this.httpClient.post(this.config.BaseURL + 'Rfmatch', { request: ID });
    }
}
