import { Component } from "@angular/core";
import{YoutubeService} from "../services/youtube.service"
import {AppConstants} from "../constants/app.constants";

@Component({
    selector:"my-video-component",
    templateUrl:"./video-page-component.html",
    styleUrls:["./video-page-component.css"]
})
export class MyVideoPageComponent {
    videoUrls = [];

    constructor(private youtubeService : YoutubeService){
        youtubeService.getAll().subscribe((data)=>{
                     this.videoUrls = data["items"];
                     this.videoUrls = this.videoUrls.map((item)=>{
                    return AppConstants.youtubeUrl+""+item.id.videoId;
                  });
          });
    }
    
}
