import { Positions } from './postion';
import { Component, OnInit } from '@angular/core';
import { Teams } from './team';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router,) { }
  currentUser = 0;
  gkPlayer:any[] = [];
  dfPlayer:any[] = [];
  mfPlayer:any[] = [];
  fwPlayer:any[] = [];
  ngOnInit() {
    this.showPlayers();
  }

  positions = Positions;
  teams = Teams;
  public showPlayers(){
    this.teams.map(item =>{
      if(item.id === 1){
        this.gkPlayer = item.players;
      }
      else if(item.id === 2){
        this.dfPlayer = item.players;
      }
      else if(item.id === 3){
        this.mfPlayer = item.players;
      }
      else{
        this.fwPlayer = item.players;
      }
    })
  }

  public showDetailPlayer(id:any){
      this.currentUser = id;
      this.router.navigate(['/detailPlayer']);
  }
}
