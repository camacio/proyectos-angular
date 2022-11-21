import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) {
    this.loading = true;
  }


  search(text: string) {
    this.service.getArtist(text).subscribe((response: any) => {
      console.log(response);
      this.artists = response;
      this.loading = false;
    });
  }
}
