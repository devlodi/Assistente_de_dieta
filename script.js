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
