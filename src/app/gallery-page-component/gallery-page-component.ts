    import { Component } from "@angular/core";
    import {  GalleryService } from "../services/gallery-service";
    @Component({
        selector:"my-gallery-component",
        templateUrl:"./gallery-page-component.html",
        styleUrls:["./gallery-page-component.css","../../assets/css/lightbox.min.css"]
        
    })

    export class MyGalleryPageComponent  {
        
        gallery = 
        [  { "img_url":"./assets/img1.jpg"},
        { "img_url":"./assets/img7.jpg"},
        { "img_url":"./assets/img3.jpg"},
        { "img_url":"./assets/img4.jpg"},
        { "img_url":"./assets/img5.jpg"},
        { "img_url":"./assets/img6.jpg"}   
    ]; 

        labels = ["all","indoor","outdoor","gd","babies","monthlyactivty","specialevent","birhday","schoolreadlines"];
        selectedcategary = "all";
        constructor(private galleryservice : GalleryService ){
        galleryservice.getAll().subscribe((data)=> {
            this.gallery = data;
        }); 
        }
        oncategarychange(categary : string){
            this.selectedcategary = categary ;
            this.galleryservice.getByCategary(this.selectedcategary).subscribe(data=> {
                this.gallery = data;
            });
        }
    }       