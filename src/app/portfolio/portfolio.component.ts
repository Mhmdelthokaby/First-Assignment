import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  protfolio: any[]=[
    {
      imgScr:'assets/cabin.png',
      title:'Cabin'
    },
    {
      imgScr:'assets/cake.png',
      title:'Cake'
    },
    {
      imgScr:'assets/circus.png',
      title:'Circus'
    },
    {
      imgScr:'assets/game.png',
      title:'Game'
    },
    {
      imgScr:'assets/safe.png',
      title:'Safe'
    },
    {
      imgScr:'assets/submarine.png',
      title:'Submarine'
    }
  ]
  details:any={}
  show(x:any):void{
    console.log(x);
    this.details=x
  }
}
