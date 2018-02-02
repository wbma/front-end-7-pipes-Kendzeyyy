import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');

  }

}
