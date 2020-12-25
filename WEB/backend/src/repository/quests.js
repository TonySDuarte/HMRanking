const { query } = require('express');
const firebase = require('../services/firebase')

async function readQuestsData() {
    try {
        const itens = await firebase.database().ref('missoes').once("value")
        return itens.val();
    } catch (error) {
        return error;
    }
}

async function setQuests(quests) {
    let missoes_id = false;

    const quests_data = {
        exercicios: quests.exercicios,
        pontos: quests.pontos,
        titulo: quests.titulo
    }

    if (!missoes_id) {
        missoes_id = firebase
            .database()
            .ref()
            .child('missoes')
            .push().key;
    }

    let updates = {}
    updates['/missoes/' + missoes_id] = quests_data;

    let quests_ref = firebase.database().ref();

    quests_ref.update(updates)
        .then(() => {
            return { success: true, message: "Ok" }
        })
        .catch((error) => {
            return { success: false, message: `Erro: ${error.message}` }
        })
}

module.exports = {
    readQuestsData,
    setQuests
}