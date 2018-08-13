import {Injectable} from "@angular/core";
import { Http ,Response} from "@angular/http";

import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class YoutubeService {
    youtubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeMSLh2vRcYgV_ahmgYWzRA&type=video&key=AIzaSyAcviOah4O8RZKGX_BgGQkALryXRqTl-JM";
    
    youtubeData = [];

    constructor(private http:Http){
    
    }
                
    getAll() : any[] {
            this.getChannelData().subscribe((data)=>{
                this.youtubeData = data["items"];
                this.youtubeData = this.youtubeData.map((item)=>{
                    return item.id.videoId;
                });
            });
            return this.youtubeData;
    }
    
    getChannelData() : Observable<any> {
        return this.http.get(this.youtubeUrl).pipe(
            map((res:Response) => {
                return res.json();
            })
        );
        
     }
}