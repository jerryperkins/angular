import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  weather_dallas: {}
  

  constructor(private _httpService: HttpService) {

  }

  ngOnInit(){
    // this.dallas_weather()
  }

  // dallas_weather(){
  //   this._httpService.dallas_weather()
  //   .subscribe(data =>{
  //     console.log('Here is dallas weather', data)
  //     this.weather_dallas = data
  //   })
  // }

}
