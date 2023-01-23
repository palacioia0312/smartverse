import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';

declare var $: any;

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
	items: any = {};
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
	constructor(private eventService: EventService) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'Items',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/Items', path: '.', active: true },
			],
		});
		this._fetchData();
	}

	_fetchData() {
		// fetch("https://li49rtqc28.execute-api.us-east-1.amazonaws.com/v1/items",{
		// 	method: 'GET',
		// 	redirect: 'follow'
		// })
		// .then(response => response.text())
		// .then(result => console.log(result))
		// .catch(error => console.log('error', error));
		this.items = this.info;
		console.table(this.items);
	}

	fnModal(action: string): void {
		$('#modalItems').modal(action);
	}
}
