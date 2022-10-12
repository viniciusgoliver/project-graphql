const jwt = require("jwt-simple");
const { perfis: obterPerfil } = require("../Type/Usuario");

module.exports = {
  async getUsuariologado(usuario) {
    const perfis = await obterPerfil(usuario);
    const now = Math.floor(Date.now() / 1000);

    const usuarioInfo = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      perfis: perfis.map((p) => p.nome),
      iat: now,
      exp: now + 3 * 24 * 60 * 60,
    };

    const authSecret = process.env.APP_AUTH_SECRET;

    return {
      ...usuarioInfo,
      token: jwt.encode(usuarioInfo, authSecret),
    };
  },
};
