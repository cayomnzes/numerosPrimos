// Nome da Disciplina: JavaScript
// Código da Turma: 123N-89719
// Nome: Cayo Henrique Menezes Cortes
// Matrícula: 2024100169

// Função para verificar se um número é primo
function isPrime(num) {
  if (num < 2) {
    return false; // Números menores que 2 não são primos
  }
  for (let i = 2; i < num; i++) { // Verifica todos os números de 2 até num - 1
    if (num % i === 0) {
      return false; // Se num for divisível por qualquer número entre 2 e num - 1, não é primo
    }
  }
  return true; // Se não encontrou divisor, é primo
}

// Função para encontrar os 10 maiores números primos a partir de um número fornecido pelo usuário
function findLargestPrimes() {
  const userInput = prompt("Digite um número:"); // Solicita ao usuário um número
  const startNumber = parseInt(userInput); // Converte a entrada do usuário para um número

  if (isNaN(startNumber)) { // Verifica se a entrada é um número
    console.log("Entrada inválida. Por favor, digite um número válido.");
    return; // Sai da função se a entrada for inválida
  }

  const primeNumbers = []; // Array para armazenar os números primos encontrados

  for (let currentNumber = startNumber; primeNumbers.length < 10; currentNumber++) {
    if (isPrime(currentNumber)) {
      primeNumbers.push(currentNumber); // Adiciona o número primo encontrado ao array
    }
  }

  console.log("Os 10 maiores números primos a partir de " + startNumber + " são:");
  console.log(primeNumbers.join(", ")); // Exibe os números primos encontrados
}

// Executa a função findLargestPrimes
findLargestPrimes();