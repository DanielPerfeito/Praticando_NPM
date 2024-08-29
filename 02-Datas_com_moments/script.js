import moment from 'moment'; // Importa o pacote 'moment' para manipulação de datas e horas

// Cria uma instância do momento com a data e hora atuais
const agora = moment(); 

// Exibe a data e hora atuais formatadas em diferentes estilos
console.log(`
    Dia: ${agora.format('DD')}
    Mês: ${agora.format('MM')}
    Ano: ${agora.format('YYYY')}
    Hora: ${agora.format('HH:mm')}
    Data completa: ${agora.format('DD-MM-YYYY, HH:mm')}`
); 