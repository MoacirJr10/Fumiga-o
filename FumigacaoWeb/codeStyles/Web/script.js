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
}