import { Component, OnInit } from '@angular/core';
import { SongDataService } from '../../services/song-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent implements OnInit {
  public songData: any = {};
  ngOnInit(): void {
    this.route.params.pipe(map((d) => window.history.state)).subscribe((data)=> (this.songData = data))
    console.log(this.songData)
    if(this.songData.link == ''){
      this.router.navigate(['']);
      window.alert(`No Song Available For Selected Album with ${this.songData.title}`)
    }
    // this.sd.songData.subscribe((data:any)=>{
    //   this.songData = data;
    //   console.log(data)
    // })
  }


  constructor(public sd: SongDataService, public route: ActivatedRoute, public router:Router) { }
}
