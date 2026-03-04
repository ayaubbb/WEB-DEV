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
  styles: [`.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }`]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = []; 
  albumId!: number;
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.albumId = id; 

  if (id) {
    this.albumService.getAlbumPhotos(id).subscribe((data: Photo[]) => {
      this.photos = data;
      this.loading = false;
    });
  }
}
}