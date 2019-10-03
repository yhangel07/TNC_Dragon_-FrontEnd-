import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: any;
  
  newNotif = [
    {
      "notif_header": "New item on Sale!",
      "notif_body": "The cool Jacket is on 50% off",
      "notif_link": "https://www.deviantart.com/bryanzap/art/I-Am-Iron-Man-Poster-796671196",
      "notif_status": "unread",
      "notid_dateTime": "01-17-2014 9:27 PM"
    },
    {
      "notif_header": "TNC Branch Closes",
      "notif_body": "The TNC-Kalaw branch are now closed",
      "notif_link": "https://www.facebook.com/TNCesports/",
      "notif_status": "read",
      "notid_dateTime": "01-17-2014 9:17 PM"
    },
    {
      "notif_header": "New Branch Opened",
      "notif_body": "The TNC-Legarda Branch is now Open",
      "notif_link": "https://www.facebook.com/tnc.legarda",
      "notif_status": "unread",
      "notid_dateTime": "01-17-2014 8:27 PM"
    },
]
  constructor() { }

  ngOnInit() {
    this.notifications = this.newNotif;
  }

}
