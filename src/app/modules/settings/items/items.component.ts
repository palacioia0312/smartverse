import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';

declare var $: any;

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
	items2: any = {};
	info = [
		{
			id: 0,
			itemTag: 'CouchColonial',
			itemTracker: 'Pets/Couch/CouchColonial',
			thumbUrl: 'htttps:google.com',
			tokenPrice: 100,
			displayName: 'Couch Colonial',
			displayDescription: 'this item is amazing!',
			categories: 1,
			subCategories: 2,
		},
		{
			id: 1,
			itemTag: 'MiniGolf',
			itemTracker: 'MiniGames/Sport/MiniGolf',
			thumbUrl: 'htttps:google.com',
			tokenPrice: 500,
			displayName: 'Super mini golf game',
			displayDescription: 'Play with your friends this...',
			categories: 3,
			subCategories: 4,
		},
	];
	itemsListBase : any[] = [];
	items : any[] = [];
	constructor(private eventService: EventService, private _http:HttpService) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'Items',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/Items', path: '.', active: true },
			],
		});
		this.listItems();
	}

	listItems = ()=> {
		this._http.get('/config/items',true).subscribe((res: any)=>{
		   this.itemsListBase = res.result;
		   this.items = this.itemsListBase;
		})
    }

	fnModal(action: string): void {
		$('#modalItems').modal(action);
	}
}
