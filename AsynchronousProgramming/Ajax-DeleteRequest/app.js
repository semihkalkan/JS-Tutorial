//Ajax,callback ,Http request

class Request {

    constructor (){
        this.xhr = new XMLHttpRequest();
    }

    delete(url,callback){

        this.xhr.open("DELETE",url); //bağlantı açıldı

        this.xhr.onload =  () => {

            if (this.xhr.status === 200){

            
                callback(null,"Veri silme işlemi başarılı"); //isteğimiz bitti
            }
            else {
                callback("Delete Request : Herhangi bir Hata Oluştu",null);
            }

        }

        this.xhr.send();
    }

}

const request = new Request();

 request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response) {
    if (err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
});

