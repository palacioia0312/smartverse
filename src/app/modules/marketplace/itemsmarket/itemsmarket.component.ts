import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';
declare var $:any;
@Component({
  selector: 'app-itemsmarket',
  templateUrl: './itemsmarket.component.html',
  styleUrls: ['./itemsmarket.component.scss']
})
export class ItemsmarketComponent implements OnInit {

	items: any[] = [
		{
            "itemId": "MiniGames/Sport/MiniGolf",
            "itemName": "Mini Golf Game",
            "itemDescription": "Super nice and long description",
            "itemType": 0,
            "itemPrice": 500000.0,
            "previewMode": 0,
            "thumbUrl": ""
        },
        {
            "itemId": "Pets/House/DogHouse-1",
            "itemName": "Pet House - Classic",
            "itemDescription": "Super nice and long description",
            "itemType": 1,
            "itemPrice": 250.0,
            "previewMode": 0,
            "thumbUrl": ""
        }
	];
	categoryArray = [
		'Furniture',
		'Pets',
		'Electronics',
		'Garden',
		'MiniGames',
		'Habytat'
	];
	subcategoryArray = [
		'Coach',
		'Canvas',
		'Table',
		'Chair',
		'Display',
		'Tablechair',
		'Pot',
		'Pool',
		'WaterCan',
		'Sport',
		'Gifts',
		'Common'
	];



	constructor(private eventService:EventService, private _http: HttpService) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: "Items",
			breadCrumbItems: [{ label: 'Apps', path: '.' }, { label: 'Marketplace/Items', path: '.', active: true }]
		  });
		  this._fetchData();
	}

	_fetchData() {
		this._http.get('/config/items',true).subscribe((res:any)=>{
		   console.log(res);
		})
   }

	fnModal(action: string): void {
		$('#modalMarketPlace').modal(action);
	}

}
