import { Component } from "../../../node_modules/@angular/core";
import { ProgramServices } from "../services/program-services";

@Component ({
   
    selector:"my-services-comoponent",
    templateUrl:"./services-page-component.html",
    styleUrls:["./services-page-component.css"]
})
export class MyServicesPageComponent {


    constructor(private programmeService:ProgramServices){

    }
}