class Request {

    constructor (){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url); //bağlantı açıldı

        this.xhr.onload =  () => {

            if (this.xhr.status === 200){

            
                callback(null,this.xhr.responseText); //isteğimiz bitti
            }
            else {
                callback("Herhangi bir Hata Oluştu",null);
            }

        }

        this.xhr.send();
    }

    put (url,data,callback){

        this.xhr.open("PUT",url)
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){

                callback(null,this.xhr.responseText);
            }

            else {
                callback("PutRequest:Herhangi bir hata oluştu",null);
            }

            this.xhr.send(JSON.stringify(data));
        }
    }

}

const request = new Request();



request.put ("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan Karma"},function(err,album){

    if (err === null){

        console.log(album);
    }
    else {

        console.log(err);
    }
})
