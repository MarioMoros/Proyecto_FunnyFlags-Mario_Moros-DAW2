import { Component } from '@angular/core';
import { CountrydataService } from 'src/app/services/countrydata.service';

@Component({
  selector: 'app-tutorial-banderas-europa',
  templateUrl: './tutorial-banderas-europa.component.html',
  styleUrls: ['./tutorial-banderas-europa.component.css']
})
export class TutorialBanderasEuropaComponent {
  countryArray: any[] = [];

  loading = false;

  constructor(private countrydata: CountrydataService){}

  ngOnInit(){
    this.countryData();
  }

  countryData(){
    this.loading = true;
    this.countrydata.getAllCountryData().subscribe((response: any) =>{
      this.loading = false;
      this.countryArray = response;
    });
  }
}
