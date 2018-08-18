import { Injectable } from "../../../node_modules/@angular/core";
import { Http ,Response} from "@angular/http";
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable()
export class ProgramServices {
  
    constructor(private http:Http){
    }
    getProgram() : Observable<any> {
       return this.http.get('http://demo7805012.mockable.io').pipe(
           map((res:Response) => res.json())
       );
       
    }
}