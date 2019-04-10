import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { HNavbarComponent } from './h-navbar/h-navbar.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { OMDBService } from './omdb.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent,
    DetailsComponent,
    HNavbarComponent,
    AddMovieComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [OMDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
