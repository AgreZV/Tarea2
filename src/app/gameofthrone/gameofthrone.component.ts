import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  got:any;

  constructor(private gameofthroneService:GameofthroneService) { }

  ngOnInit(): void {
    this.getGot();
  }

  getGot(){
    this.gameofthroneService.getGotCharacters().subscribe( resp =>{
      this.got = resp;
      console.log(this.got);
    })

  }

}
