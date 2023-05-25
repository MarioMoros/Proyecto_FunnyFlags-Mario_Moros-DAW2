import { Component } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  loading = false;

  constructor(private userdata: UserdataService){}

  ngAfterViewInit(){
    this.showRanking();
  }

  showRanking(){
    this.loading = true;
    this.userdata.showRanking().subscribe((response: any) =>{
      this.loading = false;
      console.log(response);
    });
  }
}
