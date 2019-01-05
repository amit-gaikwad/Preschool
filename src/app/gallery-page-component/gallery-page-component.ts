    import { Component } from '@angular/core';
    import {  GalleryService } from '../services/gallery-service';
    @Component({
        selector: 'my-gallery-component',
        templateUrl: './gallery-page-component.html',
        styleUrls: ['./gallery-page-component.css', '../../assets/css/lightbox.min.css']

    })

    export class MyGalleryPageComponent  {

        gallery = [];
        labels = ['All', 'Indoor', 'Outdoor', 'Group Activity', 'Babies', 'Monthly Activity', 'Special Event', 'Birthday', 'School Readiness'];
        selectedcategary = 'all';
        constructor(private galleryservice: GalleryService ) {
        galleryservice.getAll().subscribe((data) => {
            this.gallery = data;
        });
        }
        oncategarychange(categary: string) {
            this.selectedcategary = categary ;
            this.galleryservice.getByCategary(this.selectedcategary).subscribe(data => {
                this.gallery = data;
            });
        }
    }
