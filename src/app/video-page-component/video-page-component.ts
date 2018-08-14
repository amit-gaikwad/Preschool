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
        youtubeService.getAll().subscribe((data)=>{
            this.videos = data["items"];
            this.videos = this.videos.map((item)=>{
                return item.id.videoId;
            });
        });
    }

    getVideoUrl( videoId : string) : any {
        return this.videoUrl+""+videoId;
    }
    
}
