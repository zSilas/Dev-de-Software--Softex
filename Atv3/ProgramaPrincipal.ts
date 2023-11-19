
import SistemaSeguranca from "./SistemaSeguranca";

// Agente tenta acessar a Base Secreta com senha correta
const agente007 = SistemaSeguranca.getInstance();
agente007.acessarBaseSecreta("SenhaSuperSecreta123");

// Agente tenta acessar a Base Secreta com senha incorreta
agente007.acessarBaseSecreta("SenhaIncorreta321");
