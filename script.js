document.getElementById('calcular').addEventListener('click', function() {
    // Pega os valores dos inputs
    const totalFigurinhas = parseInt(document.getElementById('total_figurinhas').value);
    const numeroAmigos = parseInt(document.getElementById('numero_amigos').value);

    // Calcula a quantidade de figurinhas que o João recebe
    const figurinhasAmigo = totalFigurinhas // número de figurinhas dividido entre amigos + João e mais 1 pessoa
        / (numeroAmigos + 2); 
    const figurinhasJoao = 2 * figurinhasAmigo;

    // Exibe o resultado
    document.getElementById('resultado').textContent = `João recebeu ${Math.floor(figurinhasJoao)} figurinhas`;
});
