import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      Authorization: "Bearer BQBiXAEvsVM2xbCT9DBydydrDD3pwCVCiLS5rntLQzpjD5tFvpLqzxhiWBXC8oaxEDfGqvs08Ftx80QT-oQOBEqh1OztjMmh-Q8H_dELTCbmA8btiCc"
    })

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
                        .pipe( map((response: any)=> {
                          return response['albums'].items;
                        }))
  }

  getArtist(text: string){
    const headers = new HttpHeaders({
      Authorization: "Bearer BQBiXAEvsVM2xbCT9DBydydrDD3pwCVCiLS5rntLQzpjD5tFvpLqzxhiWBXC8oaxEDfGqvs08Ftx80QT-oQOBEqh1OztjMmh-Q8H_dELTCbmA8btiCc"
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${text}&type=artist`, { headers })
                        .pipe( map((response: any) => {
                          return response['artists'].items;
                        }))
  }
}
