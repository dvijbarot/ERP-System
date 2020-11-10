import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigModule } from '../components/config/config.module';

const docType: any = [
    'Profile Photo',
    'Resume',
    'MarkSheet',
    'AddressProof',
    'IDProof',
    'Appraisal Letter',
    'Promotion Letter',
    'Relieving Letter',
    'Termination Letter',
    'Notice'
];

const countries: any = [
    { id: 1, value: 'Afghanistan' },
    { id: 2, value: 'Albania' },
    { id: 3, value: 'Algeria' },
    { id: 4, value: 'Andorra' },
    { id: 5, value: 'Antigua and Barbuda' },
    { id: 6, value: 'Argentina' },
    { id: 7, value: 'Armenia' },
    { id: 8, value: 'Australia' },
    { id: 9, value: 'Austria' },
    { id: 10, value: 'Azerbaijan' },
    { id: 11, value: 'Bahamas' },
    { id: 12, value: 'Bahrain' },
    { id: 13, value: 'Bangladesh' },
    { id: 14, value: 'Barbados' },
    { id: 15, value: 'Belarus' },
    { id: 16, value: 'Belgium' },
    { id: 17, value: 'Belize' },
    { id: 18, value: 'Benin' },
    { id: 19, value: 'Bhutan' },
    { id: 20, value: 'Bolivia' },
    { id: 21, value: 'Bosnia and Herzegovina' },
    { id: 22, value: 'Botswana' },
    { id: 23, value: 'Brazil' },
    { id: 24, value: 'Brunei' },
    { id: 25, value: 'Bulgaria' },
    { id: 26, value: 'Burkina Faso' },
    { id: 27, value: 'Burundi' },
    { id: 28, value: 'Cambodia' },
    { id: 29, value: 'Cameroon' },
    { id: 30, value: 'Canada' },
    { id: 31, value: 'Cape Verde' },
    { id: 32, value: 'Central African Republic' },
    { id: 33, value: 'Chad' },
    { id: 34, value: 'Chile' },
    { id: 35, value: 'China' },
    { id: 36, value: 'Colombia' },
    { id: 37, value: 'Comoros' },
    { id: 38, value: 'Congo' },
    { id: 39, value: 'Costa Rica' },
    { id: 40, value: 'Cote d Ivoire' },
    { id: 41, value: 'Croatia' },
    { id: 42, value: 'Cuba' },
    { id: 43, value: 'Cyprus' },
    { id: 44, value: 'Czech Republic' },
    { id: 45, value: 'Denmark' },
    { id: 46, value: 'Djibouti' },
    { id: 47, value: 'Dominica' },
    { id: 48, value: 'Dominican Republic' },
    { id: 49, value: 'East Timor' },
    { id: 50, value: 'Ecuador' },
    { id: 51, value: 'Egypt' },
    { id: 52, value: 'El Salvador' },
    { id: 53, value: 'Equatorial Guinea' },
    { id: 54, value: 'Eritrea' },
    { id: 55, value: 'Estonia' },
    { id: 56, value: 'Ethiopia' },
    { id: 57, value: 'Fiji' },
    { id: 58, value: 'Finland' },
    { id: 59, value: 'France' },
    { id: 60, value: 'Gabon' },
    { id: 61, value: 'Gambia' },
    { id: 62, value: 'Georgia' },
    { id: 63, value: 'Germany' },
    { id: 64, value: 'Ghana' },
    { id: 65, value: 'Greece' },
    { id: 66, value: 'Grenada' },
    { id: 67, value: 'Guatemala' },
    { id: 68, value: 'Guinea' },
    { id: 69, value: 'Guinea-Bissau' },
    { id: 70, value: 'Guyana' },
    { id: 71, value: 'Haiti' },
    { id: 72, value: 'Honduras' },
    { id: 73, value: 'Hong Kong' },
    { id: 74, value: 'Hungary' },
    { id: 75, value: 'Iceland' },
    { id: 76, value: 'India' },
    { id: 77, value: 'Indonesia' },
    { id: 78, value: 'Iran' },
    { id: 79, value: 'Iraq' },
    { id: 80, value: 'Ireland' },
    { id: 81, value: 'Israel' },
    { id: 82, value: 'Italy' },
    { id: 83, value: 'Jamaica' },
    { id: 84, value: 'Japan' },
    { id: 85, value: 'Jordan' },
    { id: 86, value: 'Kazakhstan' },
    { id: 87, value: 'Kenya' },
    { id: 88, value: 'Kiribati' },
    { id: 89, value: 'North Korea' },
    { id: 90, value: 'South Korea' },
    { id: 91, value: 'Kuwait' },
    { id: 92, value: 'Kyrgyzstan' },
    { id: 93, value: 'Laos' },
    { id: 94, value: 'Latvia' },
    { id: 95, value: 'Lebanon' },
    { id: 96, value: 'Lesotho' },
    { id: 97, value: 'Liberia' },
    { id: 98, value: 'Libya' },
    { id: 99, value: 'Liechtenstein' },
    { id: 100, value: 'Lithuania' },
    { id: 101, value: 'Luxembourg' },
    { id: 102, value: 'Macedonia' },
    { id: 103, value: 'Madagascar' },
    { id: 104, value: 'Malawi' },
    { id: 105, value: 'Malaysia' },
    { id: 106, value: 'Maldives' },
    { id: 107, value: 'Mali' },
    { id: 108, value: 'Malta' },
    { id: 109, value: 'Marshall Islands' },
    { id: 110, value: 'Mauritania' },
    { id: 111, value: 'Mauritius' },
    { id: 112, value: 'Mexico' },
    { id: 113, value: 'Micronesia' },
    { id: 114, value: 'Moldova' },
    { id: 115, value: 'Monaco' },
    { id: 116, value: 'Mongolia' },
    { id: 117, value: 'Montenegro' },
    { id: 118, value: 'Morocco' },
    { id: 119, value: 'Mozambique' },
    { id: 120, value: 'Myanmar' },
    { id: 121, value: 'Namibia' },
    { id: 122, value: 'Nauru' },
    { id: 123, value: 'Nepal' },
    { id: 124, value: 'Netherlands' },
    { id: 125, value: 'New Zealand' },
    { id: 126, value: 'Nicaragua' },
    { id: 127, value: 'Niger' },
    { id: 128, value: 'Nigeria' },
    { id: 129, value: 'Norway' },
    { id: 130, value: 'Oman' },
    { id: 131, value: 'Pakistan' },
    { id: 132, value: 'Palau' },
    { id: 133, value: 'Panama' },
    { id: 134, value: 'Papua New Guinea' },
    { id: 135, value: 'Paraguay' },
    { id: 136, value: 'Peru' },
    { id: 137, value: 'Philippines' },
    { id: 138, value: 'Poland' },
    { id: 139, value: 'Portugal' },
    { id: 140, value: 'Puerto Rico' },
    { id: 141, value: 'Qatar' },
    { id: 142, value: 'Romania' },
    { id: 143, value: 'Russia' },
    { id: 144, value: 'Rwanda' },
    { id: 145, value: 'Saint Kitts and Nevis' },
    { id: 146, value: 'Saint Lucia' },
    { id: 147, value: 'Saint Vincent and the Grenadines' },
    { id: 148, value: 'Samoa' },
    { id: 149, value: 'San Marino' },
    { id: 150, value: 'Sao Tome and Principe' },
    { id: 151, value: 'Saudi Arabia' },
    { id: 152, value: 'Senegal' },
    { id: 153, value: 'Serbia and Montenegro' },
    { id: 154, value: 'Seychelles' },
    { id: 155, value: 'Sierra Leone' },
    { id: 156, value: 'Singapore' },
    { id: 157, value: 'Slovakia' },
    { id: 158, value: 'Slovenia' },
    { id: 159, value: 'Solomon Islands' },
    { id: 160, value: 'Somalia' },
    { id: 161, value: 'South Africa' },
    { id: 161, value: 'Spain' },
    { id: 162, value: 'Sri Lanka' },
    { id: 163, value: 'Sudan' },
    { id: 164, value: 'Suriname' },
    { id: 165, value: 'Swaziland' },
    { id: 166, value: 'Sweden' },
    { id: 167, value: 'Switzerland' },
    { id: 168, value: 'Syria' },
    { id: 169, value: 'Taiwan' },
    { id: 170, value: 'Tajikistan' },
    { id: 171, value: 'Tanzania' },
    { id: 172, value: 'Thailand' },
    { id: 173, value: 'Togo' },
    { id: 174, value: 'Tonga' },
    { id: 175, value: 'Trinidad and Tobago' },
    { id: 176, value: 'Tunisia' },
    { id: 177, value: 'Turkey' },
    { id: 178, value: 'Turkmenistan' },
    { id: 179, value: 'Tuvalu' },
    { id: 180, value: 'Ukraine' },
    { id: 181, value: 'United Arab Emirates' },
    { id: 182, value: 'United Kingdom' },
    { id: 183, value: 'United States' },
    { id: 184, value: 'Uruguay' },
    { id: 184, value: 'Uzbekistan' },
    { id: 185, value: 'Vanuatu' },
    { id: 186, value: 'Vatican City' },
    { id: 187, value: 'Venezuela' },
    { id: 188, value: 'Vietnam' },
    { id: 189, value: 'Yemen' },
    { id: 190, value: 'Zambia' },
    { id: 191, value: 'Zimbabwe' },
];
@Injectable()
export class DataService {

    getDocType(): Observable<any> {
        return docType;
    }

    getCountries(): Observable<any> {
        return countries;
    }
    constructor(private httpClient: HttpClient, private config: ConfigModule) { }

    getData(Url: string): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + Url);
    }

    putData(Url: string, parameters: any): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + Url, parameters);
    }

    // createDepartment(Url: string, parameters: any): Observable<any> {
    //     return this.httpClient.post(this.config.BaseURL + Url, parameters);
    // }

    // createRole(Url: string, parameters: any): Observable<any> {
    //     return this.httpClient.post(this.config.BaseURL + Url, parameters);
    // }
    // employee

    showuploadedDocs(key: string): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'uploadeddocs', { D2: key, base: this.config.BaseURL});
    }
    Docs(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'uploaddocs', values, { responseType: 'text' });
    }
    loademployee(): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'employee', {url: this.config.BaseURL});
    }
    updateemployee(key, values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'updateemployee', { key, values });
    }
    insertemployee(values, key, Uid): Observable<any> {
        values.ID = key;
        values.Uid = Uid;
        console.log(values);
        return this.httpClient.post(this.config.BaseURL + 'createemployee', values);
    }
    getEmployee(Url: string): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + Url);
    }

    getId(key: string): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'getId', {Username: key});
    }

    // DEPARTMENT
    loaddepartment(): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + 'department');
    }
    updatedepartment(key, values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'updatedepartment', { key, values });
    }
    insertdepartment(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'createdepartment', values);
    }
    getDepartment(Url: string): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + Url);
    }

    // ROLE
    loadrole(): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + 'getrole');
    }
    updaterole(key, values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'updaterole', { key, values });
    }
    insertrole(values): Observable<any> {
        return this.httpClient.post(this.config.BaseURL + 'createrole', values);
    }
    getRole(Url: string): Observable<any> {
        return this.httpClient.get(this.config.BaseURL + Url);
    }

}
