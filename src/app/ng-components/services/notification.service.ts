import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    notifyOp

    constructor(
        private toastr: ToastrService
    ) { 
        this.notifyOp = {
            positionClass: 'toast-top-right',
            timeOut: 3000
        };
    }
    
    success(message: string) {

        this.toastr.success(message, 'Success');
    }

    error(message: string) {

        this.toastr.error(message, 'Failure');
    }
}
