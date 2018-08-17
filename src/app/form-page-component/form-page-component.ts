import { Component } from "../../../node_modules/@angular/core";
import { FormService } from '../../app/services/form-services';



@Component({
    selector:"my-form-page-component",
    templateUrl:"./form-page-component.html",
    styleUrls:["./form-page-component.css"]
})
export class MyFormPageComponennt {
    pdfforms=[];
    constructor(private formService:FormService)
    {
     formService.getAll().subscribe
     (
        (data)=>
                {
                this.pdfforms=data;
                }
     )
    }

}