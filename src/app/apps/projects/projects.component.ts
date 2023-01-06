import { Component, OnInit } from '@angular/core';
// constants
import { EventType } from 'src/app/core/constants/events';
// services
import { EventService } from 'src/app/core/service/event.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items: any = {};
  info = [
    {
     "id": "CouchColonial",
     "houseType": "Colonial",
     "category": "Furniture",
     "subCategory": "Couch",
     "isDynamic": "Trues",
     "name": "Couch Colonial",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CouchModern",
     "houseType": "Modern",
     "category": "Furniture",
     "subCategory": "Couch",
     "isDynamic": "Trues",
     "name": "Couch Modern",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CouchRanch",
     "houseType": "Ranch",
     "category": "Furniture",
     "subCategory": "Couch",
     "isDynamic": "Trues",
     "name": "Couch Ranch",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaColonial-Hor",
     "houseType": "Colonial",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Colonial Horizontal",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaColonial-Ver",
     "houseType": "Colonial",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Colonial Vertical",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaRanch-Hor",
     "houseType": "Ranch",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Ranch Horizontal",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaRanch-Ver",
     "houseType": "Ranch",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Ranch Vertical",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaModern-Hor",
     "houseType": "Modern",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Modern Horizontal",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "CanvaModern-Ver",
     "houseType": "Modern",
     "category": "Furniture",
     "subCategory": "Canvas",
     "isDynamic": "Trues",
     "name": "Canvas Modern Vertical",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "TableColonial",
     "houseType": "Colonial",
     "category": "Furniture",
     "subCategory": "Table",
     "isDynamic": "Falses",
     "name": "Table Colonial",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "TableRanch",
     "houseType": "Ranch",
     "category": "Furniture",
     "subCategory": "Table",
     "isDynamic": "Falses",
     "name": "Table Ranch",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "TableModern",
     "houseType": "Modern",
     "category": "Furniture",
     "subCategory": "Table",
     "isDynamic": "Falses",
     "name": "Table Modern",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "BeachChair-1",
     "houseType": "Standard",
     "category": "Furniture",
     "subCategory": "Chairs",
     "isDynamic": "Falses",
     "name": "Beach Ranch Chair",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "DogHouse-1",
     "houseType": "Standard",
     "category": "Furniture",
     "subCategory": "House",
     "isDynamic": "Falses",
     "name": "Dog house",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "SmartTV",
     "houseType": "Standard",
     "category": "Electronics",
     "subCategory": "Display",
     "isDynamic": "Falses",
     "name": "Smart Tv",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "SmartTV-Wall",
     "houseType": "Standard",
     "category": "Electronics",
     "subCategory": "Display",
     "isDynamic": "Falses",
     "name": "SmartTv Wall",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "TableChair",
     "houseType": "Standard",
     "category": "Garden",
     "subCategory": "TableChair",
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotMod-1x1",
     "houseType": "Modern",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Modern 1x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotMod-2x1",
     "houseType": "Modern",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Modern 2x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotMod-2x2",
     "houseType": "Modern",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Modern 2x2",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotCol-1x1",
     "houseType": "Colonial",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Colonial 1x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotCol-2x1",
     "houseType": "Colonial",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Colonial 2x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotCol-2x2",
     "houseType": "Colonial",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Colonial 2x2",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotRan-1x1",
     "houseType": "Ranch",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Ranch 1x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotRan-2x1",
     "houseType": "Ranch",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Ranch 2x1",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "PotRan-2x2",
     "houseType": "Ranch",
     "category": "Garden",
     "subCategory": "Pot",
     "isDynamic": "Falses",
     "name": "Pot Ranch 2x2",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "FloatWatermelon",
     "houseType": "Standard",
     "category": "Garden",
     "subCategory": "Pool",
     "isDynamic": "Falses",
     "name": "Floater Watermelon",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "FloatDonut",
     "houseType": "Standard",
     "category": "Garden",
     "subCategory": "Pool",
     "isDynamic": "Falses",
     "name": "Floater Donut",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "BeachBall",
     "houseType": "Standard",
     "category": "Garden",
     "subCategory": "Pool",
     "isDynamic": "Falses",
     "name": "Beach Ball",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "WateringCan",
     "houseType": "Standard",
     "category": "Garden",
     "subCategory": "WaterCan",
     "isDynamic": "Falses",
     "name": "Watering Can",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "MiniGolf",
     "houseType": "Standard",
     "category": "MiniGames",
     "subCategory": "Sport",
     "isDynamic": "Falses",
     "name": "MiniGolf",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "Gift",
     "houseType": "Standard",
     "category": "Habytat",
     "subCategory": "Gifts",
     "isDynamic": "Falses",
     "name": "Gift",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "Chest",
     "houseType": "Standard",
     "category": "Habytat",
     "subCategory": "Gifts",
     "isDynamic": "Falses",
     "name": "Chest",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    },
    {
     "id": "MailBox",
     "houseType": "Standard",
     "category": "Habytat",
     "subCategory": "Common",
     "isDynamic": "Falses",
     "name": "MailBox",
     "description": "this item is amazing!",
     "previewImageUrl": "Solicitar Renders a arte",
     "minimumLevel": 1,
     "xp": 0,
     "price": 100,
     "currency": "Ninrad"
    }
   ];
  constructor (private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
      title: "Items",
      breadCrumbItems: [{ label: 'Apps', path: '.' }, { label: 'Items', path: '.', active: true }]
    });
    this._fetchData();
  }

  /**
   * fetches data
   */
  async _fetchData() {
    // let headersList = {
    //   "Accept": "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    //   "TOKEN_ISS": 'habytat-dev',
    //   "TOKEN_AUD": 'habytat-management',
    //   "Authorization": "Bearer sk<dfhc<nakljfsdklcnslcknsalkdxnsalkdnsd"
    //  }

    //  let response = await fetch("https://5818lbbi95.execute-api.us-east-1.amazonaws.com/dev/query/users", {
    //    method: "GET",
    //    headers: headersList
    //  });
    //  const res  = await response.json();
     this.items = this.info;
     console.table(this.items);
  }

}
