import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {
  weather_chicago = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.chicago_weather()
  }
  chicago_weather(){
    this._httpService.chicago_weather()
    .subscribe(data =>{
      console.log('Here is dallas weather', data)
      this.weather_chicago = data
    })
  }

}
