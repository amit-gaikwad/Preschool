import { Injectable } from "@angular/core";
import {Http,Response} from "@angular/http";
import { Observable} from "rxjs";
import { map, filter } from "rxjs/operators";
import { GlobalUrl } from "../constant/global-url";
@Injectable()

export class GalleryService{

constructor(private http:Http){}
 link=GlobalUrl.url;
getAll() : Observable <any> {
return this.http.get(this.link).
pipe(map((res:Response)=>{
    return res.json();
}));
}

getByCategary(categary : string) : Observable <any>{
    if(categary == 'all'){
        return this.getAll();
        }
    else{
   return this.http.get(this.link).
   pipe(map( (resp : Response)=> {
    var newData= resp.json();
    var newArray = newData.filter((item)=>{
        return categary == item.categary;
    })
    return newArray;
    }));
}
 
}

}




