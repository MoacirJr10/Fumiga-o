function calcular() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);

    if (isNaN(altura) || isNaN(largura) || isNaN(comprimento)) {
        alert("Por favor, insira todos os valores corretamente.");
        return;
    }

    // Calcula a metragem cúbica
    const metragemCubica = altura * largura * comprimento;
    const sache = metragemCubica / 56;
    const pastilha = metragemCubica * 2;
    const comprimido = metragemCubica * 10;

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = `
        A metragem cúbica é: ${metragemCubica.toFixed(2)} m³<br>
        O Sache é: ${sache.toFixed(2)}<br>
        A Pastilha é: ${pastilha.toFixed(2)}<br>
        O Comprimido é: ${comprimido.toFixed(2)}
    `;

    // Salva no histórico
    salvarNoHistorico(metragemCubica, sache, pastilha, comprimido);
}

function salvarNoHistorico(metragemCubica, sache, pastilha, comprimido) {
    const dataHora = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const calculo = {
        data: dataHora,
        metragemCubica: metragemCubica.toFixed(2),
        sache: sache.toFixed(2),
        pastilha: pastilha.toFixed(2),
        comprimido: comprimido.toFixed(2)
    };

    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(calculo);
    localStorage.setItem('historico', JSON.stringify(historico));
}

function exibirHistorico() {
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    let historicoHtml = historico.map(c => `
        <div>
            <strong>${c.data}</strong><br>
            Metragem Cúbica: ${c.metragemCubica} m³<br>
            Sachê: ${c.sache}, Pastilha: ${c.pastilha}, Comprimido: ${c.comprimido}
        </div><hr>
    `).join('');
    document.getElementById('historico').innerHTML = historicoHtml;
}
