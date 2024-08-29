// Importa o pacote 'dayjs' para manipulação de datas e horas
import dayjs from 'dayjs';

// Cria uma instância de 'dayjs' com a data e hora atuais
const hoje = dayjs();

// Exibe a data e hora atuais formatadas no terminal no formato 'DD-MM-YYYY, HH:mm'
console.log(`Data e hora atual: ${hoje.format('DD-MM-YYYY, HH:mm')}`);

// Adiciona 7 dias à data atual e armazena o resultado em uma nova variável
const umaSemanaMais = hoje.add(7, 'day');
// Exibe a data resultante após adicionar 7 dias, no formato 'DD-MM-YYYY'
console.log(umaSemanaMais.format('DD-MM-YYYY'));

// Adiciona 1 mês à data atual e armazena o resultado em uma nova variável
const umMesMais = hoje.add(1, 'month');
// Exibe a data resultante após adicionar 1 mês, no formato 'DD-MM-YYYY'
console.log(umMesMais.format('DD-MM-YYYY'));

// Cria uma instância de 'dayjs' com uma data específica: 06 de outubro de 2025
const dataEspecifica = dayjs('2025-10-06');
// Verifica se a data atual é antes da data específica (06-10-2025)
// Se for antes, a função retorna 'Depois', se não, retorna 'Antes'
// Exibe se a data de hoje é antes ou depois da data específica
console.log(`A data 06-10-2025 é antes ou depois da data de hoje? ${hoje.isBefore(dataEspecifica) ? 'Antes' : 'Depois'}`);
