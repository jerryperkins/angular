import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
  weather_burbank = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.burbank_weather()
  }

  burbank_weather(){
    this._httpService.burbank_weather()
    .subscribe(data =>{
      console.log('Here is dallas weather', data)
      this.weather_burbank = data
    })
  }

}
