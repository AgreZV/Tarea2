import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {
  
  personajes : any;

  constructor(private harrypotterservice:HarrypotterService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }
  
  getPersonajes(){

    this.harrypotterservice.getPersonajes().subscribe( resp =>{
      this.personajes = resp;
      console.log(this.personajes);
    })
  }
}
