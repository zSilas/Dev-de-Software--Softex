
interface OperationStrategy {
    execute(num1: number, num2: number): number;
  }
  

  class AdditionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  class SubtractionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  class MultiplicationStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculator {
    private strategy: OperationStrategy;
  
    constructor(strategy: OperationStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: OperationStrategy) {
      this.strategy = strategy;
    }
  
    calculate(num1: number, num2: number): number {
      return this.strategy.execute(num1, num2);
    }
  }
  

  const num1: number = parseInt(prompt("Digite o primeiro número:") || "0");
  const num2: number = parseInt(prompt("Digite o segundo número:") || "0");
  const operation: string = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):") || '';
  
  let strategy: OperationStrategy;
  
 
  if (operation === "+") {
    strategy = new AdditionStrategy();
  } else if (operation === "-") {
    strategy = new SubtractionStrategy();
  } else if (operation === "*") {
    strategy = new MultiplicationStrategy();
  } else {
    console.log("Operação inválida");
    process.exit(1);
  }
  
  const calculator = new Calculator(strategy);
  const result = calculator.calculate(num1, num2);
  
  console.log(`O resultado da operação é: ${result}`);