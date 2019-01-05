import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AppConstants } from '../constants/app.constants';
@Injectable()

export class GalleryService {

constructor(private http: Http) {}

galleryUrl = AppConstants.serverUrl + 'gallery';

getAll(): Observable <any> {
return this.http.get(this.galleryUrl).
pipe(map((res: Response) => {
    return res.json();
}));
}

getByCategary(categary: string): Observable <any> {
    if (categary === 'All') {
        return this.getAll();
        } else {
   return this.http.get(this.galleryUrl).
   pipe(map( (resp: Response) => {
    const newData = resp.json();
    const newArray = newData.filter((item) => {
        return categary.toLowerCase() === item.category.toLowerCase();
    });
    return newArray;
    }));
}

}

}




