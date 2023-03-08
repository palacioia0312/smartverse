import { Component, OnInit } from '@angular/core';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
declare var Swal: any;
@Component({
	selector: 'app-notification-topic',
	templateUrl: './notification-topic.component.html',
	styleUrls: ['./notification-topic.component.scss'],
})
export class NotificationTopicComponent implements OnInit {
	data: { title: string, describe: string, data: string} = { data: '', describe: '', title: ''};
	objectTopic: any = [
		{
			name: 'Habytat',
		},
		{
			name: 'Art District',
		},
		{
			name: 'Colonial',
		},
		{
			name: 'Farm',
		},
		{
			name: 'Modern',
		},
	];
	constructor(private _alert: SweetAlertService) {}

	ngOnInit(): void {}

	save(): void {
		if (Object.values(this.data).some((element) => !element)) {
			this._alert.notify({
				titleText: 'Ingrese todos los campos solicitados',
				icon: 'warning',
			});
			return;
		}

		this._alert
			.confirm({
				title: '¿Seguro que desea guardar?',
				icon: 'question',
				showCancelButton: true,
				showConfirmButton: true,
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Confirmar',
			})
			.then((response) => {
				if (!response.isConfirmed) {
					return;
				}
			});
	}
}
