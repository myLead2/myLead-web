import { Injectable } from "@angular/core";
@Injectable()
export class UtilityService{

    public islogged(){
        let isLogeed = false;
        if (typeof (Storage) !== 'undefined'){
            if (sessionStorage.getItem('user')){
                isLogeed = true;
            }
        }
        return isLogeed;
    }
}
