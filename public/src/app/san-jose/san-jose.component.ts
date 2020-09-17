import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {
  weather_san_jose = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.san_jose_weather()
  }
  san_jose_weather(){
    this._httpService.san_jose_weather()
    .subscribe(data =>{
      console.log("Here is seattle weather", data)
      this.weather_san_jose = data
    })
  }
}
