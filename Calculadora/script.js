const preTxt = document.getElementById("cima");
const curTxt = document.getElementById("baixo");
const buttons = document.querySelectorAll("#buttons button");
const del = document.getElementById("DEL");

class Calcular {
    constructor(preTxt, curTxt) {
        this.preTxt = preTxt;
        this.curTxt = curTxt;
        this.cur = "";
        this.operacaoPendente = null; // Nova propriedade para armazenar a operação pendente
    }

    
    addnum(num) {
        // Só deixa 1 vírgula
        if (num === "." && this.curTxt.innerText.includes(".")) {
            return;
        }
        this.cur += num;
        this.updateScreen();
    }
    
    
    soumzero(num) {
        // Verifica se o número é diferente de zero
        if (num !== "0") {
          // Remove todos os zeros à esquerda
          num = num.replace(/^0+/, "");
          // Verifica se o número é igual a zero
          if (num === "") {
            // Se o número for igual a zero, adiciona um zero
            this.cur = "0";
          } else {
            // Se o número for diferente de zero, atualiza a tela
            this.cur = num;
          }
          this.updateScreen();
        } else {
          // Se o número for igual a zero, verifica se já existe um zero na tela
          if (this.cur === "0") {
            // Se já existir um zero na tela, não faz nada
            return;
          } else {
            // Se não existir um zero na tela, adiciona um zero
            this.cur += "0";
            this.updateScreen();
          }
        }
      }

    Pross_Operacao(operacao) {
        // Se houver uma operação pendente, execute-a primeiro
        if (this.operacaoPendente !== null) {
            this.realizarOperacaoPendente();
        }

        // Pegar valor atual e anterior
        const previous = +this.curTxt.innerText;
        const current = +this.cur;

        switch (operacao) {
            case "+":
            case "-":
            case "x":
            case "÷":
                this.operacaoPendente = { operacao, previous };
                this.cur = ""; // Limpar o número atual
                this.preTxt.innerText = this.curTxt.innerText + " " + operacao;
                this.curTxt.innerText = "";
                break;
            case "=":
                this.realizarOperacaoPendente();
                break;
            default:
                return;
        }
    }

    realizarOperacaoPendente() {
        if (this.operacaoPendente === null) {
            return;
        }

        const { operacao, previous } = this.operacaoPendente;
        const current = +this.cur;

        let valor_operacao;
        switch (operacao) {
            case "+":
                valor_operacao = previous + current;
                break;
            case "-":
                valor_operacao = previous - current;
                break;
            case "x":
                valor_operacao = previous * current;
                break;
            case "÷":
                valor_operacao = previous / current;
                break;
            default:
                return;
        }

        this.curTxt.innerText = valor_operacao;
        this.preTxt.innerText = "";
        this.cur = "";
        this.operacaoPendente = null;
    }

    updateScreen() {
        this.curTxt.innerText = this.cur;
    }
}

del.addEventListener("click", () => {
    // Lógica para deletar o último caractere
    calc.cur = calc.cur.slice(0, -1);
    if (calc.cur === "") {
        // Se a string ficar vazia, atualize a tela com 0
        calc.cur = "";
    }
    calc.updateScreen();
});

const calc = new Calcular(preTxt, curTxt);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addnum(value);
        } else if (value === "C" || value === "CE") {
            // Limpar a tela
            calc.curTxt.innerText = "";
            calc.preTxt.innerText = "";
            calc.cur = "";
            calc.operacaoPendente = null;
        } else {
            calc.Pross_Operacao(value);
        }
    });
});