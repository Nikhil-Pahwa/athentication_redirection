import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RemoteUser, User, UserFromRemote } from './shared/resources/';
import { SessionService, HttpClient } from './modules/core/';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = environment.name;
  private user: User;
  constructor(private sessionService: SessionService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getUserDetail();
  }

  // TODO (npahwa) Need to move this into service and replace the hardcoded url with config url
  private getUserDetail() {
    this.httpClient.get(`${environment.apiBaseUrl}/user`)
      .map(res => res.json())
      .map((remoteUser: RemoteUser) => {
        return UserFromRemote(remoteUser);
      }).subscribe((user: User) => {
        this.user = user;
      });
  }
}
