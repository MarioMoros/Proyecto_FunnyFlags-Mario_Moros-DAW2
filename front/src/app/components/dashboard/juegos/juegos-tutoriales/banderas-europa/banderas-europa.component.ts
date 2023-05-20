import { Component } from '@angular/core';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-banderas-europa',
  templateUrl: './banderas-europa.component.html',
  styleUrls: ['./banderas-europa.component.css']
})
export class BanderasEuropaComponent {

  countryArray: any[] = [];
  isResultLoaded = false;

  constructor(private countrydata: CountrydataService){}

  ngAfterViewInit(){
    this.countryData();
  }

  countryData(){
    this.countrydata.getAllCountryData().subscribe((response: any) =>{
      this.isResultLoaded = true;
      this.countryArray = response;
      console.log(this.countryArray);
    });
  }
}
