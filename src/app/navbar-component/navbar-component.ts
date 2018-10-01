import { Component } from "@angular/core";
import { AppConstants } from '../constants/app.constants';
@Component({ 
    selector:"my-navbar",
    templateUrl:"./navbar-component.html",
    styleUrls:["./navbar-component.css"]
})
export class MyNavbarComponent {
    adminUrl ;
 constructor()
 {
   this.adminUrl =  AppConstants.adminUrl
 }
 
}