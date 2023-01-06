import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any = {};
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
      title: "Users",
      breadCrumbItems: [{ label: 'Apps', path: '.' }, { label: 'Security/Users', path: '.', active: true }]
    });
    this._fetchData();
  }

  async _fetchData() {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
     }

     let response = await fetch("https://5818lbbi95.execute-api.us-east-1.amazonaws.com/dev/query/users", {
       method: "GET",
       headers: headersList
     });

     const res  = await response.json();
     this.user = res.data.Items;
     console.table(this.user);
  }

}
