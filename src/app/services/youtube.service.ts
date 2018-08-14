import {Injectable} from "@angular/core";
import { Http ,Response} from "@angular/http";
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class YoutubeService {
    
    apiKey = "AIzaSyAcviOah4O8RZKGX_BgGQkALryXRqTl-JM";
    channelId = "UCeMSLh2vRcYgV_ahmgYWzRA";
    youtubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId="+this.channelId+"&order=date&type=video&key="+this.apiKey;

    constructor(private http:Http){
    }

    getAll() : Observable<any> {
        return this.http.get(this.youtubeUrl).pipe(
            map((res:Response) => {
                return res.json();
            })
        );
        
     }
}