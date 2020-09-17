import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {
  weather_seattle = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.seattle_weather()
  }
  seattle_weather(){
    this._httpService.seattle_weather()
    .subscribe(data =>{
      console.log("Here is seattle weather", data)
      this.weather_seattle = data
    })
  }

}
