import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';

declare var $: any;

@Component({
	selector: 'app-house',
	templateUrl: './house.component.html',
	styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {
	info: any = [
		{
			id: 0,
			houseTag: 'Modern',
			tittle: 'Modern House',
			description: 'Llenar Descripcion',
		},
		{
			id: 1,
			houseTag: 'Colonial',
			tittle: 'Colonial House',
			description: 'Llenar Descripcion',
		},
		{
			id: 2,
			houseTag: 'Ranch',
			tittle: 'Ranch House',
			description: 'Llenar Descripcion',
		},
	];
	items: any = [];
	constructor(private eventService: EventService) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'House',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/Houses', path: '.', active: true },
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
		$('#modalHouse').modal(action);
	}
}
