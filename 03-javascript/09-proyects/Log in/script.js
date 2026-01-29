// Validacion de correo electronico

const entradacorreo = document.querySelector('.email');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

entradacorreo.addEventListener('input', e => {
    const correoActual = e.target.value;
    if (emailRegex.test(correoActual)) {
        console.log("✅ Correo valido");
    } else {
        console.log("❌ Correo invalido");
    }
})



//Ver password

const passInput = document.querySelector('.password');
const checkbox = document.getElementById('ver-pass');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        passInput.type = 'text';      // Muestra la contraseña
    } else {
        passInput.type = 'password';  // Vuelve a los puntitos
    }
});



// Validacion de contraseña que lleve las siguientes caracteristicas:
// Al menos 8 caracteres
// Al menos una letra mayúscula
// Al menos una letra minúscula
// Al menos un número
// Al menos un carácter especial (!@#$%^&*)

console.log("Para el password:");
console.log("- Al menos 8 caracteres");
console.log("- Al menos una letra mayuscula");
console.log("- Al menos una letra minuscula");
console.log("- Al menos un numero");
console.log("- Al menos un caracter especial (!@#$%^&*)");


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

const entradaPassword = document.querySelector('.password');

entradaPassword.addEventListener('input', e => {
    const passwordActual = e.target.value;

    if (passwordRegex.test(passwordActual)) {
        console.log("✅ Password valido");
    } else {
        console.log("❌ Password invalida");
    }
})



// Simulador de Login con mensaje en consola

const USUARIO_CORRECTO = "admin@kali.org";
const PASS_CORRECTO = "Hacker123!";

const btnLogin = document.querySelector('button');
const inputEmail = document.querySelector('.email');
const inputPass = document.querySelector('.password');

const kaliLogo = `
..............
          ..,;:ccc,.
        ......''';lxO.
  .....''''..........,:ld;
           .';;;:::;,,.x,
        ..'''.            0Xxoc:,.  ...
    ....                ,ONkc;,;cokOdc',.
   .                   OMo           ':ddo.
                      dMc               :OO;
                      0M.                 .:o.
                      ;Wd
                       ;XO,
                         ,d0Odlc;,..
                             ..',;:cdOOd::,.
                                      .:d;.':;.
                                         'd,  .'
                                           ;l   ..
                                            .o
                                              c
                                              .'
                                               .
                                               
      _  __     _ _   _     _                 
     | |/ /    | (_) | |   (_)                
     | ' / __ _| |_  | |    _ _ __  _   _ __  __
     |  < / _\` | | | | |   | | '_ \\| | | |\\ \\/ /
     | . \\ (_| | | | | |___| | | | | |_| | >  < 
     |_|\\_\\__,_|_|_| |_____|_|_| |_|\\__,_|/_/\\_\\
 
`;

btnLogin.addEventListener('click', () => {

    const usuarioIngresado = inputEmail.value;
    const passIngresada = inputPass.value;

    console.clear(); // Limpia la consola para que se vea dramático

    if (usuarioIngresado === USUARIO_CORRECTO && passIngresada === PASS_CORRECTO) {

        // ¡ACCESO CONCEDIDO!
        console.log("%c ACCESO CONCEDIDO ", "background: green; color: white; font-weight: bold; padding: 5px; margin-left: 100px;");
        console.log(kaliLogo);
        console.log("%c flag : > @h0r@ $oy r0ot <", "color: #00ff00; font-family: monospace; font-size: 16px; margin-left: 40px;");

    } else {

        // ACCESO DENEGADO
        console.log("%c ❌ ERROR: Credenciales Incorrectas ", "background: red; color: white; padding: 5px; margin-left: 60px;");
    }
});