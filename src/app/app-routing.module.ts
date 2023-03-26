import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent , title:'Home'},
  {path:'about' , component:AboutComponent , title:'About'},
  {path:'portfolio' , component:PortfolioComponent , title:'Portfolio'},
  {path:'contact' , component:ContactComponent , title:'Contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
