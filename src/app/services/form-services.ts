import { Injectable } from "@angular/core";

@Injectable()
export class FormService{
pdfDetails = [
    {id:1, pdfUrl:"http://www.funnydayschildcare.com.au/images/Waiting_List_Application_form.pdf",name:"Form16"},
    {id:2, pdfUrl:"http://funnydayschildcare.com.au/images/Medical_Management_Plan.pdf",name:"Form26"},
    {id:3, pdfUrl:"http://www.funnydayschildcare.com.au/images/Funny_Days_Kindergarten-Child _Enrolment form.pdf",name:"Form8"}
];

getAll():any[]
{
    return this.pdfDetails;
}

getByID(id:number):any{
    var element=this.pdfDetails.find((item)=>{
        return (item.id===id);
    })
   return element ||{};
}
}
