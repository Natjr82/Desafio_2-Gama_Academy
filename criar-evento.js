const form = document.getElementById("criar-evento");
form.addEventListener("submit", async(event) => {
event.preventDefault();
const nome = document.getElementById("nome").value;
const poster= document.getElementById("poster").value;
const atracoes = document.getElementById("atracoes").value;
const descricao = document.getElementById("descricao").value;
const adata = document.getElementById("data").value;
const lotacao = document.getElementById("lotacao").value;



const data = {
name: nome,
poster: poster,
attractions: [atracoes],
description: descricao,
scheduled: adata,
number_tickets: lotacao,
};
console.log(data)
try {
const response = await fetch("https://soundgarden-api.vercel.app/events", {
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(data),
});
const result = await response.json();
localStorage.setItem("criar-evento", result._id);
alert("Evento criado com sucesso");

}catch(error) {
console.log (error);
alert("Deu erro ao criar evento");
}
});