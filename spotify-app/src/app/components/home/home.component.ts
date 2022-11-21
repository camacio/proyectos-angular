import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public newReleases: any = []

  constructor(private service: SpotifyService ) { 
    this.newReleases = this.service.getNewReleases()
                                    .subscribe((response: any) => {
                                      this.newReleases = response;
                                      console.log(this.newReleases);
                                    })
  }

  ngOnInit(): void {
  }

}
