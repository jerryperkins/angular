import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  

  dallas_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
  seattle_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
  san_jose_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
  washington_dc_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Washington%20DC&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
  chicago_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
  burbank_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=imperial&appid=a2816eb677253e96a5558d5c1fd8e785')
  }
}
