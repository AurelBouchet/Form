import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
     // putsreq.com
    //github.com/EvermeshSolutions/putsreq#response-builder
    return this.http.post('https://putsreq.com/hE83j97iSNrcDeWeVRye', userSettings);
    }

}
