const meals = {
    desjejum1: ["Café preto", "Chá"],
    desjejum2: ["1 fatia de pão com Camada fina de geléia dietética", "3 bolachas salgadas"],
    lanche10: ["Laranja", "Maçã", "Pera Caioba", "Bergamota", "Kiwi", "Lima", "Pessegão", "Ameixa", "Figo", "150 g de Melão", "Melancia", "Moranguinho", "Abacaxi", "Uva", "Mamão"],
    almoco1: ["1 xícara de Cebola", "Cenoura", "Abobrinha", "Brócolis", "Beterraba", "Couve Flor","Abóbora", "Chuchu", "Vagem"],
    almoco2: ["Alface", "Broto de Alfafa", "Cogumelos", "Couve", "Couve Chinesa", "Espinafre", "Moranga", "Mostarda", "Palmito", "Pimentão", "Repolho", "Rúcula", "Tomate"],
    almoco3: ["Arroz", "Massa"],
    janta1: ["1 xícara de Cebola", "Cenoura", "Abobrinha", "Brócolis", "Beterraba", "Couve Flor","Abóbora", "Chuchu", "Vagem"],
    janta2: ["Alface", "Broto de Alfafa", "Cogumelos", "Couve", "Couve Chinesa", "Espinafre", "Moranga", "Mostarda", "Palmito", "Pimentão", "Repolho", "Rúcula", "Tomate"],
    janta3: ["Arroz", "Massa"],
    lanche15: ["Laranja", "Maçã", "Pera Caioba", "Bergamota", "Kiwi", "Lima", "Pessegão", "Ameixa", "Figo", "150 g de Melão", "Melancia", "Moranguinho", "Abacaxi", "Uva", "Mamão", "1 iogurte light ou desnatado"],
    lanche17: ["Uma Laranja", "Maçã", "Pera Caioba", "Bergamota", "Kiwi", "Lima", "Pessegão", "Ameixa", "Figo", "150 g de Melão", "Melancia", "Moranguinho", "Abacaxi", "Uva", "Mamão"]
};
function chooseMeal(mealType) {
     let choiceText = "";
    // Lógica existente para gerar a sugestão de refeição...
    localStorage.setItem(mealType, choiceText); // Salva a escolha no Local Storage
    document.getElementById(`${mealType}-choice`).innerHTML = choiceText;

    // Verifica se a refeição tem múltiplas partes (desjejum, almoço, janta)
    if (mealType === 'desjejum' || mealType === 'almoco' || mealType === 'janta') {
        const parts = mealType === 'desjejum' ? 2 : 3; // Define o número de partes para o desjejum ou almoço/janta

        for (let i = 1; i <= parts; i++) {
            const choices = meals[`${mealType}${i}`];
            const choice = choices[Math.floor(Math.random() * choices.length)];
            choiceText += `Parte ${i}: ${choice}<br>`;
        }
    } else {
        const choices = meals[mealType];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        choiceText = `Sugestão: ${choice}`;
    }

    document.getElementById(`${mealType}-choice`).innerHTML = choiceText;
}


// Função para copiar a sugestão de refeição para a área de transferência
function copyToClipboard(mealType) {
    const choiceText = document.getElementById(`${mealType}-choice`).innerText;
    navigator.clipboard.writeText(choiceText).then(() => {
        alert("Refeição copiada para a área de transferência!");
    });
}

// Função para limpar todas as refeições do Local Storage
function clearMeals() {
    if (confirm("Tem certeza que deseja apagar todas as refeições?")) {
        localStorage.clear(); // Limpa o Local Storage
        // Limpa as escolhas de refeições na página, se necessário
        // Exemplo: document.getElementById(`${mealType}-choice`).innerHTML = "";
    }
}
