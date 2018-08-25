import {Injectable} from "@angular/core";
import { Http ,Response} from "@angular/http";
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import {AppConstants} from "../constants/app.constants"

@Injectable()
export class YoutubeService {
    
    constructor(private http:Http){

    }

    getAll() : Observable<any> {
        return this.http.get(AppConstants.youtubeApi).pipe(
            map((res:Response) => {
                return res.json();
            }));
     }
}   