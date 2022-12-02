const produtinho: string = 'Livro';
const precinho: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5,
};

type IPneu = {
  aro: number;
  psi: number;
};

function somar(a: number, b: number): number {
  return a + b;
}

somar(4, 10);

const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
};

function transformaPreco(produto: { nome: string; preco: string }) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
}

const produtoNovo = transformaPreco(nintendo);

console.log(produtoNovo);

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// trim tira o whitespace dos dois ends da string

console.log(normalizarTexto('DdEesiGnN'));

// nodelist = objeto diferente de array
// com foreach

const links = document.querySelectorAll('.link');

// array de elemnts
const button = document.querySelector('button');

function handleClick(
  this: HTMLButtonElement,
  event: TouchEvent | MouseEvent | KeyboardEvent,
) {
  console.log(event);
}

button?.addEventListener('click', handleClick);

async function getData(url: string) {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

function fetchProduto() {
  const response = getData('http://api.origamid.dev/json/notebook.json');
  handleProduto(response);
}

fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

'nome' in {};

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    console.log(data.nome);
  }
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}

fetchCursos();

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  tags: string[];
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'horas' in value &&
    'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <p>${item.aulas}</p>
        `;
    });
  }
}
