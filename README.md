
# Menu and Pages

A simple menu and three pages are created and handled by routing

## Created components:

<pre>
ng g component pages/home
ng g component pages/about
ng g component pages/courses
</pre>

## Implemented this, but with pages above:
https://angular.io/guide/router

### app.module.ts

<pre>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent
  ],
  imports: [
    RouterModule.forRoot(
      routerConfig,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

</pre>

### This look interesting:
http://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system



## Angular CLI overview
https://github.com/angular/angular-cli/wiki

## Git info

When a new branch are created remotely then use "git checkout branchname" to get it locally, and "git branch -a" to see all branches.
