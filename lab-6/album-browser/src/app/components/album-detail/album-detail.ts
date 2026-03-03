import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Changes saved to server!');
    });
  }
}