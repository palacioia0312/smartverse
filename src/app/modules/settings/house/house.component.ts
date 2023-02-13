import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';

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
	constructor(private eventService: EventService, private _http:HttpService) {}

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
		 this._http.get('/config/house',true).subscribe((res:any)=>{
			console.log(res);
		 })
	}

	fnModal(action: string): void {
		$('#modalHouse').modal(action);
	}
}
