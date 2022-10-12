const db = require("./db");
const { getUsuarioLogado } = require("../resolvers/Common/auth-jwt");

const sql = `
  SELECT 
    A.* 
  FROM usuarios A
  INNER JOIN usuarios_perfis B ON B.usuario_id = A.id
  INNER JOIN perfis C ON C.id = B.perfil_id
  WHERE
    A.ativo = 1
    AND C.nome = :nomePerfil
  LIMIT 1
`;

const getUsuario = async (nomePerfil) => {
  const usuario = await db.raw(sql, { nomePerfil });
  return usuario ? usuario[0][0] : null;
};

module.exports = async (req) => {
  const usuario = await getUsuario("admin");

  if (usuario) {
    const { token } = await getUsuarioLogado(usuario);

    req.headers = {
      authorization: `Bearer ${token}`,
    };
  }
};
