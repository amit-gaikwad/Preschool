import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Http ,Response} from "@angular/http";
import { AppConstants } from "../constants/app.constants";



@Injectable()
export class ProgramServices {
    eventUrl = '';
    constructor(private http:Http){
        this.eventUrl = AppConstants.serverUrl+'event';

    }

    getAll():Observable<any>{
        return this.http.get(this.eventUrl).pipe(
            map((res:Response)=>{
                return res.json();
            })
        )
    }

    getById(id:number):Observable<any>{
        return this.http.get(this.eventUrl+'/'+id).pipe(
            map((res:Response)=>{
                var event = res.json();
                event = event.filter((element) =>{
              return (element.event_id == id);
                })
            }))
             
        
        
    }
}