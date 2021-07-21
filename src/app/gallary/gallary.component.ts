import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(public api: ApiService, private route: ActivatedRoute) { }
  images: any;
  user: string = '';
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    var nm = this.route.snapshot.params['name'];
    console.log(id);

    this.api.fetchImage(id).subscribe(res => {


      this.images = res;
      this.user = nm;
      console.log(this.images);

    }, err => {
      console.log(err);
      // this.failureMessage = "Login Failed";
    })
  }
}
