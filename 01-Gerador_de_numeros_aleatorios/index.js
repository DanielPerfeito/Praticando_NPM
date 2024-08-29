// Importa pacotes NPM
import random from 'random'; // O pacote 'random' permite gerar números e valores aleatórios de forma fácil e eficiente.
import boxen from 'boxen'; // O pacote 'boxen' cria caixas estilizadas ao redor de textos, permitindo que mensagens sejam exibidas de forma destacada no terminal.
import chalk from 'chalk'; // O pacote 'chalk' permite estilizar o texto no terminal, como adicionar cores, negrito, e outros efeitos.

// Gera uma mensagem com um número aleatório de 0 a 100
// O número gerado é estilizado com a cor verde e em negrito usando o 'chalk'
const mensagem = `Número de 0 a 100 gerado aleatoriamente: ${chalk.green.bold(random.int(0, 100))}`;

// Exibe a mensagem no terminal dentro de uma caixa estilizada
// A caixa é criada pelo 'boxen' com uma borda azul, estilo de borda 'bold', e título centralizado
console.log(boxen(mensagem, { 
    padding: 1, 
    borderStyle: 'bold', 
    borderColor: 'blue', 
    title: 'Resultado', 
    titleAlignment: 'center' 
}));