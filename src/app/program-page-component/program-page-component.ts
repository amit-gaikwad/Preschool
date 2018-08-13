import { Component, OnInit } from "@angular/core";
import { ProgramServices } from "../services/program-services";


@Component({
    selector:"my-program-component",
    templateUrl:"./program-page-component.html",
    styleUrls:["./program-page-component.css"]
})

export class MyProgramPageComponent  {
    programmes = [];
    
    constructor(private programmeServices:ProgramServices){
        this.programmes = programmeServices.getAll();
    }
    
}