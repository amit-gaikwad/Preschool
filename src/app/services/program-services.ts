import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Http ,Response} from "@angular/http";



@Injectable()
export class ProgramServices {

    constructor(private http:Http){

    }

    getAll():Observable<any>{
        return this.http.get("http://localhost:4200/assets/events.json").pipe(
            map((res:Response)=>{
                return res.json();
            })
        )
    }

    getById(id:number):Observable<any>{
        return this.http.get("http://localhost:4200/assets/events.json").pipe(
            map((res:Response)=>{
                var event = res.json();
                event = event.filter((element) =>{
              return (element.event_id == id);
                })
            }))
             
        
        
    }
  
  
   
    

}