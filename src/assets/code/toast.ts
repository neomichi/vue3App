import Toastr from 'toastr2';
import 'toastr2/dist/toastr.min.css';

class Toast {

    public  readonly toastr:any = new Toastr();

    public  info(text:string){
       this.toastr.info(text)
    }

    public success(text:string) {       
        this.toastr.success(text)
    }

    public error(text:string) {
        this.toastr.error(text)
    }

    public warning(text:string) {
        this.toastr.error(text)
    }    

}

export const toast=new Toast()
