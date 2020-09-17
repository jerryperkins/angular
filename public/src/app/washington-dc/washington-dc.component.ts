import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.scss']
})
export class WashingtonDCComponent implements OnInit {
  weather_dc = {}
  constructor(private _httpService: HttpService) { 
    
  }

  ngOnInit() {
    this.washington_dc_weather()
  }


  washington_dc_weather(){
    this._httpService.washington_dc_weather()
    .subscribe(data =>{
      console.log("here is DC weather", data)
      this.weather_dc = data
    })
  }
}
