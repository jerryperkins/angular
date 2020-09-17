import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  weather_dallas = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.dallas_weather()
  }
  dallas_weather(){
    this._httpService.dallas_weather()
    .subscribe(data =>{
      console.log('Here is dallas weather', data)
      this.weather_dallas = data
    })
  }
}
