import { Component, OnInit } from '@angular/core';
import { Detail } from './player-detail';
import { Teams } from '../team/team';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  detailPlayer:any;
  constructor() { }

  ngOnInit() {
    this.showDetail();
  }
  teams = Teams;
  detail = Detail;
  public showDetail() {
      this.detail.map(item=>{
        if(item.id===1){
          this.detailPlayer = item.info;
        }
      })
  }

}
