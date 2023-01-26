import { formatCurrency } from '@angular/common';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Play } from '../play';
import { PlaysService } from '../plays.service';

const emptyPlay: Play = {
  id: null,
  title: '',
}

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit{
  selectedPlay = emptyPlay;
  originalTitle = '';

  plays = [];


  selectPlay(play) {
    this.selectedPlay = {...play};
    this.originalTitle = play.title;
  }

  reset() {
    this.selectedPlay = null;
  }

  constructor(private playsService: PlaysService) { }

  ngOnInit(): void {
    this.fetchPlays();
  }

  fetchPlays() {
    this.playsService.all()
    .subscribe((result:any) => this.plays = result);
  }

  savePlay(play) {
    if(play.id) {
      this.updatePlay(play);
    } else {
      this.createPlay(play);
    } 
  }

  createPlay(play) {
    this.playsService.create(play).subscribe(result => this.fetchPlays());
  }

  updatePlay(play) {
    this.playsService.update(play).subscribe(result => this.fetchPlays());
  }

  deletePlay(playId) {
    this.playsService.delete(playId).subscribe(result => this.fetchPlays());
  }
}
