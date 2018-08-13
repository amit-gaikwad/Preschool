import { Component, OnInit } from "../../../node_modules/@angular/core";
import { ProgramServices } from "../services/program-services";


@Component({
    selector:"my-program-component",
    templateUrl:"./program-page-component.html",
    styleUrls:["./program-page-component.css"]
})

export class MyProgramPageComponent  {
     private programSer = new Array();
     private Even = new Array();
     private Odd  = new Array();
    constructor(private programServies:ProgramServices){
        this.programServies.getProgram().subscribe(data => {
         
            this.programSer = data;
          
        }
      )
    }
}