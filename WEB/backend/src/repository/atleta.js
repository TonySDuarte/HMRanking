const { query } = require('express');
const firebase = require('../services/firebase')

async function readUserData() {
    try {
        const itens = await firebase.database().ref('usuarios').once("value")
        return itens.val();
    } catch (error) {
        return error;
    }
}

async function setAtleta(user) {
    let user_id = false;

    const user_data = {
        nome: user.nome,
        senha: user.senha,
        usuario: user.usuario,
        exp: user.exp,
        patente: user.patente
    }

    if (!user_id) {
        user_id = firebase
            .database()
            .ref()
            .child('usuarios')
            .push().key;
    }

    let updates = {}
    updates['/usuarios/' + user_id] = user_data;

    let usuario_ref = firebase.database().ref();
    usuario_ref.update(updates)
        .then(() => {
            return { success: true, message: "Ok" }
        })
        .catch((error) => {
            return { success: false, message: `Erro: ${error.message}` }
        })
}

module.exports = {
    readUserData,
    setAtleta,
}