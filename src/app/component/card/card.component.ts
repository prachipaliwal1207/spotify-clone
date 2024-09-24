import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongDataService } from '../../services/song-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() public playlistThumbnail!: any;
  @Input() public title !: any;
  @Input() public description!: any;
  @Input() public link: any;
  @Input() public id!: any;


  ngOnInit(): void {

  }

  constructor(private router: Router, public sd: SongDataService) { }


  navigateToSong() {
    this.router.navigateByUrl(`/song/${this.id}`, {
      state: {
        thumbail: this.playlistThumbnail,
        title: this.title,
        description: this.description,
        song_link: this.link
      }
    })
    //this.sd.songData.next({ });
  }
}
