import { Component } from "@angular/core";
import{YoutubeService} from "../services/youtube.service"

@Component({
    selector:"my-video-component",
    templateUrl:"./video-page-component.html",
    styleUrls:["./video-page-component.css"]
})

export class MyVideoPageComponent {
    videos = [];
    videoUrl = "https://www.youtube.com/embed/";

    constructor(private youtubeService : YoutubeService){
        this.videos = youtubeService.getAll();
        setTimeout(()=>{
            this.videos = youtubeService.getAll();        
        },2000);
    }

    getVideoUrl( videoId : string) : any {debugger
        return this.videoUrl+""+videoId;
    }
    
}
