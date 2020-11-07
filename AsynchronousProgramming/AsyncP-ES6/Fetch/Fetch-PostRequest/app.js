class Request {


    get (url){

        return new Promise((resolve,reject)=> {

        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
    }
    post(url,data){
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
          

    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    }
    
}
const request = new Request ();
let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then( albums => {

//     console.log(albums);
// })
// .catch(err => console.log(err));

