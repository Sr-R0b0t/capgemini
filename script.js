function desmembrarCodigo() {
    const input = document.getElementById('mdfe').value;
    const apenasNumeros = input.replace(/\D/g, '');

    if (apenasNumeros.length !== 44) {
        document.getElementById('resultado').innerText = "❌ O código deve conter exatamente 44 números.";
        return;
    }

    const partes = [
        apenasNumeros.slice(0, 2),   // Código UF
        apenasNumeros.slice(2, 6),   // Ano/Mês
        apenasNumeros.slice(6, 20),  // CNPJ
        apenasNumeros.slice(20, 22), // Modelo
        apenasNumeros.slice(22, 25), // Série
        apenasNumeros.slice(25, 34), // Número MDF-e
        apenasNumeros.slice(34, 35), // Tipo Emissão
        apenasNumeros.slice(35, 43), // Código Numérico
        apenasNumeros.slice(43, 44)  // Dígito Verificador
    ];

    const numeroSerie = partes[4];
    const numeroMDFe = partes[5];

    document.getElementById('resultado').innerHTML =
        `<strong>✅ Código válido!</strong>` +
        `<strong>Número de Série:</strong> ${numeroSerie}` +
        `<strong>Número do MDF-e:</strong> ${numeroMDFe}`;
}

function resetInput() {
    document.getElementById('mdfe').value = ''; // Limpa o campo
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado também (opcional)
}