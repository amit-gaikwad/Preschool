import { Component } from "@angular/core";

@Component({
    selector:"my-contact-component",
    templateUrl:"./contact-page-component.html",
    styleUrls:["./contact-page-component.css"]
})

export class MyContactPageComponent {
  display(data:any){
    console.log(data);
  }
    
}