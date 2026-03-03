import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styles: [`
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .photo-card {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
      border-radius: 8px;
    }
    .photo-card img { width: 100%; border-radius: 4px; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }
}