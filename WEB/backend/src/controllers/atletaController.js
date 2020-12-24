const Atleta = require("../repository/atleta");

const cadastrarAtleta = async (req, res, next) => {
    try {
        const usuario = req.body
        await Atleta.setAtleta(usuario)
        return res.status(200).json({ message: "Novo atleta cadastrado." })
    } catch (error) {
        next();
        return res.status(400).json({ message: error })
    }

},

    buscarUsuario = async (req, res, next) => {
        try {
            const usuarios = [];
            usuarios.push(await Atleta.readUserData())
            if (usuarios.length != 0) {
                return res.status(200).json(usuarios)
            }
            return res.status(400).json({ erro: "Nenhum dado encontrado" })
        } catch (error) {
            next();
            console.log(error)
            return res.status(500).json({ message: "Internal server error", error: error })
        }
    }

module.exports = {
    cadastrarAtleta,
    buscarUsuario,
}