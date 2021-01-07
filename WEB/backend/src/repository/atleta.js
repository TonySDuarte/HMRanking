const firebase = require('../services/firebase')

async function readUserData() {
    try {
        return firebase.database().ref('usuarios').once('value')
    } catch (error) {
        return error;
    }
}

async function setAtleta(user) {
    let user_id = false;

    const user_data = {
        nome: user.nome,
        usuario: user.usuario,
        senha: user.senha,
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