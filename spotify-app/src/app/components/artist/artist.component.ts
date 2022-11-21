import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private service: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getOneArtist(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  private getOneArtist(id: string){
    this.service.getOneArtist(id).subscribe((artist: any) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    })
  }

  private getTopTracks(id: string){
    this.service.getTopTracks(id).subscribe((topTracks: any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    })
  }

}
