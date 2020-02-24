import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter , map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

declare function init_admin();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private title: Title ) { 
    this.getDataRoute()
      .subscribe(data => {
        this.titulo = data.titulo;
        this.title.setTitle( this.titulo );
      });
  }

  ngOnInit(): void {
    init_admin();
  }


  getDataRoute() {
    return this.router.events.pipe(

      filter(event => event instanceof ActivationEnd ),
      filter((event: ActivationEnd ) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)

    );
  }

}
