import { Injectable } from "@angular/core";
import { Http,Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class FormService{
pdfDetails = [];
constructor(private http:Http){}


getAll():Observable<any>
{
    return this.http.get("http://localhost:4200/assets/forms.json").pipe((map((res:Response)=>{
        return res.json();
    })));
}

getByID(id:number):any{
    var element=this.pdfDetails.find((item)=>{
        return (item.id===id);
    })
   return element ||{};
}
}
