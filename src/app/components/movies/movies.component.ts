import { NavbarService } from 'src/app/services/navbarService/navbar.service';
import { AppComponent } from './../../app.component';
import { DataService } from '../../services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Movie } from '../create/create.component';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private dataService: DataService, public nav: NavbarService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.count
    };
  }
  movies: Array<Movie>;
  config: any;
  sortColumn = 'Id';
  messageForm: FormGroup;
  pageActual = 1;
  count;
  sortStyle: string;
  permissions;
  ngOnInit() {
    this.getAllMovies();
    this.nav.show();
    // const check = Array.of(JSON.parse(localStorage.getItem('permissionData')));
    // this.permissions = check[0];
    // console.log(this.permissions);

  }
  getAllMovies() {
    // this.dataService.getAllMovies().subscribe((data: any) => {
    //   this.movies = data.data;
    //   this.count = data.count;
    // });
    //   id?: number;
    // title: string;
    // director: string;

    // genre: string;
    // releaseDate: string;

    // description: string;
    // poster: string;

    this.movies = [
      {
        id: 1, title: 'The Lion King', director: ' Roger Allers, Rob Minkoff ', genre: 'Animation, Adventure, Drama',
        releaseDate: '1994', description: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', poster: 'sdada'
      }, {
        id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont', genre: 'action',
        releaseDate: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', poster: 'sdada'
      }, {
        id: 3, title: 'Pulp Fiction ', director: 'Robert Zemeckis', genre: 'Drama, Romance',
        releaseDate: '1994', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', poster: 'sdada'
      }, {
        id: 4, title: 'The Lion King', director: ' Roger Allers, Rob Minkoff ', genre: 'Animation, Adventure, Drama',
        releaseDate: '1994', description: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', poster: 'sdada'
      }, {
        id: 5, title: 'The Shawshank Redemption', director: 'Frank Darabont', genre: 'action',
        releaseDate: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', poster: 'sdada'
      }, {
        id: 6, title: 'Pulp Fiction ', director: 'Robert Zemeckis', genre: 'Drama, Romance',
        releaseDate: '1994', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', poster: 'sdada'
      }, {
        id: 7, title: 'The Lion King', director: ' Roger Allers, Rob Minkoff ', genre: 'Animation, Adventure, Drama',
        releaseDate: '1994', description: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', poster: 'sdada'
      }, {
        id: 8, title: 'The Shawshank Redemption', director: 'Frank Darabont', genre: 'action',
        releaseDate: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', poster: 'sdada'
      }, {
        id: 9, title: 'Pulp Fiction ', director: 'Robert Zemeckis', genre: 'Drama, Romance',
        releaseDate: '1994', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', poster: 'sdada'
      }, {
        id: 10, title: 'The Lion King', director: ' Roger Allers, Rob Minkoff ', genre: 'Animation, Adventure, Drama',
        releaseDate: '1994', description: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', poster: 'sdada'
      }, {
        id: 12, title: 'The Shawshank Redemption', director: 'Frank Darabont', genre: 'action',
        releaseDate: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', poster: 'sdada'
      }, {
        id: 13, title: 'Pulp Fiction ', director: 'Robert Zemeckis', genre: 'Drama, Romance',
        releaseDate: '1994', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', poster: 'sdada'
      }, {
        id: 11, title: 'The Lion King', director: ' Roger Allers, Rob Minkoff ', genre: 'Animation, Adventure, Drama',
        releaseDate: '1994', description: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', poster: 'sdada'
      }, {
        id: 14, title: 'The Shawshank Redemption', director: 'Frank Darabont', genre: 'action',
        releaseDate: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', poster: 'sdada'
      }, {
        id: 15, title: 'Pulp Fiction ', director: 'Robert Zemeckis', genre: 'Drama, Romance',
        releaseDate: '1994', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', poster: 'sdada'
      }

    ];

  }
  pageChanged(event: any) {
    // console.log(event);
    this.config.currentPage = event;
  }
  sort(sort: string) {
    this.dataService.getMovies(1, this.count, sort).subscribe(data => {
      this.movies = Object.keys(data).map(k => data[k]);
      // console.log(this.movies);

    });
  }
  delete(id: number) {
    this.dataService.deleteMovie(id).subscribe(res => {
      this.movies = this.movies.filter(x => {
        return x.id !== id;
      });
    });

  }
  download(id: number) {
    // let data;
    this.dataService.downloadPoster(id).subscribe((res: any) => {
      // console.log(res);
      const bytes = new Uint8Array(res.byteArray); // pass your byte response to this constructor
      const type = res.contentType.substring(1);
      const blob = this.base64ToBlob(res.file, 'image/' + type);
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);

      link.download = res.fileName + res.contentType; // filename
      link.click();


    }, error => {
      console.log('error');
    });

  }
  base64ToBlob(b64Data, contentType = '', sliceSize = 512) {

    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }
}
