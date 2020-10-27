const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")

//UI object start

const ui = new UI;

//Storage objesi üret
const storage = new Storage();
//All event load

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        films.forEach(film => {
            ui.addFilmToUI(film);
        }); 
    
});
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value ;
    const director = directorElement.value;
    const url = urlElement.value;


    if(title === "" || director==="" || url===""){
        ui.displayMessages("Tüm alanları Doldurun","danger");
    }
    else {
        //new film

        const newFilm = new Film (title,director,url);

        ui.addFilmToUI(newFilm); // Araayüze film ekleme
        storage.addFilmToStorage (newFilm); //Storage a film ekleme
        ui.displayMessages("film başarıyla eklendi","success");
    }


    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarılı","success");
    }
    
    
}
function clearAllFilms(){

    if(confirm("Emin misiniz ?")){

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
    
}