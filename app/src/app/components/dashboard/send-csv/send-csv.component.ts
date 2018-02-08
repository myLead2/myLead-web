import { Component, OnInit, Directive } from '@angular/core';
import { UserService } from '../../../user.service';
import { FileUploader } from 'ng2-file-upload';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

declare const $:any;

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
    private status= {
        'isComplete': false,
        'isUploading': false
    }
    constructor(
        private user: UserService,
        private router: Router,
        private _service: NotificationsService) { }

    ngOnInit() {
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
          }
    }

    public upload(){
        let type = this.uploader.queue[0].file.type.split('/')[1];
        if(type == "csv"){
            this.status.isUploading = true;
            console.log()
            let form = '#form-csv-upload';
            this.user.uploadFile(form).then( res => {
                this.uploader.queue.forEach(element => {
                    this.status.isComplete = true;
                    this.uploader.progress = 100;  
                    $('.lable-disable ').addClass('disabled');                  
                    // this.router.navigate(['/dashboard']);
                    console.log(res);
                });
            });
        }else{
            alert('Formato de arquivo inválido, por favor selecione um arquivo do tipo "CSV"');
            
            this.uploader.queue[0].remove();
        }
        
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}
