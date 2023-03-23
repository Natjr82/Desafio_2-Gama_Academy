document.getElementById('btn-enviar').addEventListener('click', function(event) {
    event.preventDefault(); 
    var nome = document.getElementById('nome').value;
    var banner = document.getElementById('banner').value;
    var atracoes = document.getElementById('atracoes').value;
    var descricao = document.getElementById('descricao').value;
    var data = document.getElementById('data').value;
    var lotacao = document.getElementById('lotacao').value;
    
    var evento = {
        name: nome,
        poster: banner,
        attractions: [atracoes],
        description: descricao,
        scheduled: data,
        number_tickets: lotacao
    };
    
    // Enviar a requisição PUT para a API
    var id = localStorage.getItem('criar-evento');
    fetch(`https://soundgarden-api.vercel.app/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(evento)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Evento atualizado com sucesso!');
    })
    .catch(error => {
        console.error(error);
        alert('Erro ao atualizar evento!');
    });
});