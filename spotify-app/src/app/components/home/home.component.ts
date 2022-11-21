import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  newReleases: any = [];
  loading: boolean;

  constructor(private service: SpotifyService) {
    this.loading = true;

    this.newReleases = this.service
      .getNewReleases()
      .subscribe((response: any) => {
        this.newReleases = response;
        this.loading = false;
        console.log(this.newReleases);
      });
  }

  ngOnInit(): void {}
}
