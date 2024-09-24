import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchbarService } from '../../services/searchbar.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
  public isSearchFileVisible : boolean = false;
  @Output() isSearch = new EventEmitter<any>;
  
  ngOnInit(): void {
      this.sb.isSearchVisible.subscribe((status)=>{
          this.isSearchFileVisible = status;
      })
  }

  searchSong(event:any){
    const input = event.target.value;
    this.isSearch.emit(input)
  }


  constructor(private sb:SearchbarService){}
}
