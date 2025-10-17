/*
fetch("https://api.imgflip.com/get_memes")
.then((response) => (console.log(response.json())));
*/

// Faz a requisição e armazena a resposta
$.getJSON("https://api.imgflip.com/get_memes", (response) => {

    // Para cada objeto representado por "m" do array "response.data.memes"
    for (let m of response.data.memes) {
        document.getElementById("memes").innerHTML += 
            `<br><div class="card m-auto p-3 shadow-lg mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">${m.name}</h5>
                </div>
                <img src=${m.url} class="card-img-top shadow rounded" alt="memeID_${m.id}">            
            </div>`;
    }

});