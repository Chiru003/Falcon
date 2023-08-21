import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
