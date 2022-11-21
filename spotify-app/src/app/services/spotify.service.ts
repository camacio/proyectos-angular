import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDrGkrQ-2EfebyO5VUk41mfR9zbJwSZ4HIerEx1TXkohTIGW2wjrmDgGKvf5kidbWn8Ia0Gt_L2VrUj7sY0Z0up7MDkaR6o5KVqeNBOUDraAJkCdUM',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    const query = 'browse/new-releases';

    return this.getQuery(query).pipe(
      map((response: any) => {
        return response['albums'].items;
      })
    );
  }

  getArtist(text: string) {
    const query = `search?q=${text}&type=artist`;

    return this.getQuery(query).pipe(
      map((response: any) => {
        return response['artists'].items;
      })
    );
  }

  getOneArtist(id: string){
    const query = `artists/${id}`;

    return this.getQuery(query);
  }

  getTopTracks(id: string){
    const query = `artists/${id}/top-tracks/?country=us`;
    
    return this.getQuery(query).pipe(
      map((response: any) => response['tracks'])
    );
  }
}
