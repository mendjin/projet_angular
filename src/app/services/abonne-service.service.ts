import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbonneServiceService {

  constructor(private http: HttpClient) { }
/**
 * Abonne
 * API
 * Services 
 * Starts
 */
  postAbonne(data: any) {
    return this.http.post<any>('http://localhost:8000/api/abonne/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAbonne() {
    return this.http.get<any>('http://localhost:8000/api/abonne/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateAbonne(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/abonne/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAbonne(id:number){
    return this.http.delete<any>("http://localhost:8000/api/abonne/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
