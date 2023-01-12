import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/modules/dashboards/dashboard.model';
// types

@Component({
	selector: 'app-dashboard-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
	@Input() messages: Message[] = [];

	constructor() {}

	ngOnInit(): void {}
}
