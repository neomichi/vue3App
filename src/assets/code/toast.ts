import Toastr from 'toastr2';
import 'toastr2/dist/toastr.min.css';

export class Toast {

    public static readonly toastr:any = new Toastr();

    public static info(text:string){
       this.toastr.info(text)
    }

    public static success(text:string) {       
        this.toastr.success(text)
    }

    public static error(text:string) {
        this.toastr.error(text)
    }

    public static warning(text:string) {
        this.toastr.error(text)
    }    

}