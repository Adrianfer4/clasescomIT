const usuarioYPassword = 'pepito2017,12345';
const nombreDeUsuario = usuarioYPassword.substring(0, 10);
const password = usuarioYPassword.substring(11);
console.log(`${nombreDeUsuario} tiene ${password} como password`);