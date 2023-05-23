import { Component } from '@angular/core';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-tutorial-banderas-europa',
  templateUrl: './tutorial-banderas-europa.component.html',
  styleUrls: ['./tutorial-banderas-europa.component.css']
})
export class TutorialBanderasEuropaComponent {
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
