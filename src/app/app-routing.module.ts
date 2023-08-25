import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { CarsComponent } from './pages/cars/cars.component';

const routes: Routes = [
  {
    title: "Home",
    component: HomeComponent,
    path: "",
  },
  {
    title: "Home",
    component: HomeComponent,
    path: "home",
  },
  {
    title: "Books",
    component: BooksComponent,
    path: "books"
  },
  {
    title: "Mobiles",
    component: MobilesComponent,
    path: "mobiles"
  },
  {
    title:"Cars",
    component: CarsComponent,
    path: "cars"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
