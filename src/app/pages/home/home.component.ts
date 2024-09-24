import { Component, OnInit } from '@angular/core';
import { SearchbarService } from '../../services/searchbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private sb: SearchbarService, private router: Router) {

  }

  onNavigation(pageName: string) {
    if (pageName == 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }

  public browserAll = [
    { bgcolor: "#f0f8ff", color: "white", title: "Fresh" },
    { bgcolor: "#ffebcd", color: "white", title: "Romantic" },
    { bgcolor: "#fffacd", color: "white", title: "Happy" },
    { bgcolor: "#e6e6fa", color: "white", title: "Sad" },
    { bgcolor: "#fafad2", color: "white", title: "Energetic" },
    { bgcolor: "#fff0f5", color: "white", title: "Melancholic" },
    { bgcolor: "#f5f5dc", color: "white", title: "Vintage" },
    { bgcolor: "#ffeb3b", color: "white", title: "Cheerful" },
    { bgcolor: "#b0e0e6", color: "white", title: "Tranquil" },
    { bgcolor: "#d3d3d3", color: "white", title: "Classic" },
    { bgcolor: "#f0fff0", color: "white", title: "Nature" }
  ];

  public songCards = [
    {
      song_id: 1,
      image: "aaj-din-chadeya.jpg",
      title: "Aaj Din Chadeya",
      description: "'Aaj Din Chadheya' sung by Rahat Fateh Ali Khan from Love Aaj Kal featuring Saif Ali Khan & Giselli Monteiro.",
      song_link: "aaj-din-chadeya.mp3"
    },
    {
      song_id: 2,
      image: "tum-hi-aana.jpg",
      title: "Tum Hi Aana",
      description: "A touching song from 'Marjaavaan' that captures the essence of longing and heartbreak.",
      song_link: "tum-hi-aana.mp3"
    },
    {
      song_id: 3,
      image: "shayad.jpeg",
      title: "Shayad",
      description: "From 'Love Aaj Kal,' this track offers a romantic vibe with poignant lyrics and a soothing melody.",
      song_link: "shayad.mp3"
    },
    {
      song_id: 4,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Journey Through the Stars",
      description: "Journey Through the Stars takes listeners on an epic musical voyage with its orchestral grandeur and space-inspired themes.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 5,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Fading Lights",
      description: "Fading Lights takes listeners on an epic musical voyage with its orchestral grandeur and space-inspired themes.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 6,
      image: "zaalima-coca.jpg",
      title: "Zaalima Coca Cola",
      description: "A fun and energetic track from the film 'Sardar Udham,' known for its lively beats and catchy rhythm.",
      song_link: "zaalima-coca-cola.mp3"
    },
    {
      song_id: 7,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Whispering Pines",
      description: "Whispering Pines is a tranquil folk song that evokes the serenity of nature. The gentle acoustic guitar and soothing vocals create a calming atmosphere, perfect for relaxing or meditating.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 8,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Echoes of Tomorrow",
      description: "Echoes of Tomorrow blends futuristic synths with classical elements to create a unique and forward-thinking sound.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 9,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Distant Horizons",
      description: "Distant Horizons is an adventurous instrumental track that evokes the thrill of exploration and discovery.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 10,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Hearts in Harmony",
      description: "Hearts in Harmony is a vibrant and upbeat track celebrating the unity and connection between people.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 11,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Velvet Dreams",
      description: "Velvet Dreams is a smooth R&B track that envelops listeners in its rich, velvety sound.",
      song_link: '' // Ensure this is intentional
    },
    {
      song_id: 12,
      image: "https://static.vecteezy.com/system/resources/previews/010/879/924/original/music-note-illustration-melody-symbol-musical-design-icon-and-abstract-sound-treble-art-song-tune-element-composition-isolated-white-and-black-graphic-sign-silhouette-classical-opera-shape-vector.jpg",
      title: "Timeless Journey",
      description: "Timeless Journey is an epic orchestral piece that captures the essence of adventure and exploration through a grand, sweeping arrangement.",
      song_link: '' // Ensure this is intentional
    }
  ];
}
