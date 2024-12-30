// Atualize o conteúdo de GameLogic.ts
export interface Turn {
  year: number;
  monthIndex: number; // Índice do mês, de 0 (Janeiro) a 11 (Dezembro)
  receita: number; // Receita do turno
  despesas: number; // Despesas do turno
  saldoEconomia: number; // Saldo acumulado da economia (soma de receita e despesas de todos os turnos)
  ganhoPopularidade: number; // Ganho de popularidade no turno
  perdaPopularidade: number; // Perda de popularidade no turno
  popularidade: number; // Popularidade (ganho - perda)
}

export const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

export const initializeTurn = (year: number): Turn => ({
  year,
  monthIndex: 0,
  receita: 0,  // Exemplo de valor de receita inicial
  despesas: 0,  // Exemplo de valor de despesas inicial
  saldoEconomia: 100, // Inicializa com 100 de saldo
  ganhoPopularidade: 0,  // Exemplo de valor de ganho de popularidade inicial
  perdaPopularidade: 0,  // Exemplo de valor de perda de popularidade inicial
  popularidade: 50,  // Inicializa com 50 de popularidade
});

export const advanceTurn = (currentTurn: Turn, despesaEducacao: number): Turn => {
  const nextMonthIndex = (currentTurn.monthIndex + 1) % 12;
  const nextYear = currentTurn.year + (nextMonthIndex === 0 ? 1 : 0);

  const totalDespesa =  despesaEducacao;
  // Acumula o saldoEconomia (considerando a receita e a despesa)
  const saldoEconomia = currentTurn.saldoEconomia + currentTurn.receita - totalDespesa;

  // Atualiza a popularidade (acumulando o ganho e perda de popularidade)
  const popularidade = Math.min(100, Math.max(0, currentTurn.popularidade + currentTurn.ganhoPopularidade - currentTurn.perdaPopularidade));

  return {
    year: nextYear,
    monthIndex: nextMonthIndex,
    receita: 0,
    despesas: 0,
    saldoEconomia, // Acumula o saldo da economia
    ganhoPopularidade: 0,
    perdaPopularidade: 0,
    popularidade,
  };
};
