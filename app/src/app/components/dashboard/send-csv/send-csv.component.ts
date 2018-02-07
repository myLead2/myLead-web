import { Component, OnInit, Directive } from '@angular/core';
import { UserService } from '../../../user.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-send-csv',
    templateUrl: './send-csv.component.html',
    styleUrls: ['./../../../../assets/sass/material-dashboard.scss']
})

@Directive({ selector: '[ng2FileSelect]' })

export class SendCsvComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: this.user.getUploadUrl() });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    constructor(private user: UserService) { }

    ngOnInit() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
          }
    }

    public upload(){
        console.log('preparando para enviar...');
        this.uploader.queue.forEach(element => {
            this.user.uploadFile(element).then();
            true
        });
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}
