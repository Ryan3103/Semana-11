// ===== Dados dos álbuns (Racionais) =====
const dados = [
    {
        "id": 1,
        "titulo": "Sobrevivendo no Inferno",
        "artista": "Racionais MC's",
        "ano": 1997,
        "genero": "Rap",
        "descricao": "O disco mais icônico do rap nacional, com clássicos como Diário de um Detento.",
        "conteudo": "Lançado em 1997 pelo selo Cosa Nostra, ligado ao próprio grupo, é considerado um dos discos mais importantes da história do rap brasileiro. As letras foram publicadas em livro em 2018 e a obra entrou na lista de leituras obrigatórias do vestibular da Unicamp.",
        "faixas": [
            "Capítulo 4, Versículo 3",
            "Diário de um Detento",
            "Fórmula Mágica da Paz"
        ],
        "imagem": "/public/images/sobrevivendoInferno.png"
    },
    {
        "id": 2,
        "titulo": "Nada Como um Dia Após o Outro Dia",
        "artista": "Racionais MC's",
        "ano": 2002,
        "genero": "Rap",
        "descricao": "Álbum duplo que traz Negro Drama, um dos maiores sucessos do grupo.",
        "conteudo": "Lançado em 2002, é o disco que consolidou o grupo para um público ainda maior. Mantém a crítica social e a narrativa de rua marcantes e inclui Negro Drama, uma das músicas mais conhecidas do rap nacional.",
        "faixas": [
            "Negro Drama",
            "Vida Loka (Parte 1)",
            "Vida Loka (Parte 2)"
        ],
        "imagem": "/public/images/vidaLoka.png"
    },
    {
        "id": 3,
        "titulo": "Raio X do Brasil",
        "artista": "Racionais MC's",
        "ano": 1993,
        "genero": "Rap",
        "descricao": "Retrato da realidade brasileira, com Fim de Semana no Parque.",
        "conteudo": "Lançado em 1993 pela Zimbabwe Records, reúne faixas que mostram o cotidiano da periferia com letras diretas e produção crua, marca do início da carreira do grupo.",
        "faixas": [
            "Fim de Semana no Parque",
            "Homem na Estrada",
            "Júri Racional"
        ],
        "imagem": "/public/images/raioX.png"
    },
    {
        "id": 4,
        "titulo": "Holocausto Urbano",
        "artista": "Racionais MC's",
        "ano": 1990,
        "genero": "Rap",
        "descricao": "O primeiro álbum do grupo, ainda cru e direto.",
        "conteudo": "Lançado em 1990 pela Zimbabwe Records, marca a estreia do grupo em disco completo e apresenta a temática de denúncia social que o acompanharia por toda a carreira.",
        "faixas": [
            "Pânico na Zona Sul",
            "Hey Boy",
            "Racistas Otários"
        ],
        "imagem": "/public/images/urbano.png"
    },
    {
        "id": 5,
        "titulo": "Escolha o Seu Caminho",
        "artista": "Racionais MC's",
        "ano": 1992,
        "genero": "Rap",
        "descricao": "Segundo álbum de estúdio e uma das maiores raridades da discografia.",
        "conteudo": "Lançado em 1992, é o segundo disco de estúdio do grupo e ficou conhecido por ser difícil de encontrar em suas versões físicas originais.",
        "faixas": [
            "Escolha o Seu Caminho",
            "Voz Ativa"
        ],
        "imagem": "/public/images/caminho.png"
    },
    {
        "id": 6,
        "titulo": "Cores & Valores",
        "artista": "Racionais MC's",
        "ano": 2014,
        "genero": "Rap",
        "descricao": "Disco mais recente de estúdio, com 15 faixas e sonoridade renovada.",
        "conteudo": "Lançado em 2014, traz 15 faixas, como Preto Zica e Quanto Vale o Show, e uma sonoridade diferente da dos primeiros discos. Segundo Mano Brown, é um disco conceitual feito para ser popular.",
        "faixas": [
            "Preto Zica",
            "Quanto Vale o Show",
            "Mil Faces de um Homem Leal (Marighella)"
        ],
        "imagem": "/public/images/cores.png"
    }
];

// ===== Componente reutilizável: card de álbum =====
function criarCard(item) {
    return `
    <div class="col-12 col-md-4">
      <a href="detalhes.html?id=${item.id}" class="text-decoration-none">
        <div class="card bg-black text-light border-secondary h-100 p-2">
          <img src="${item.imagem}" alt="Capa de ${item.titulo}"
               class="card-img-top rounded-3 object-fit-cover" style="height: 200px;">
          <div class="card-body text-center">
            <h3 class="h5 text-warning">${item.titulo}</h3>
            <p class="text-light small mb-1">${item.artista} (${item.ano})</p>
            <p class="text-secondary small">${item.descricao}</p>
          </div>
        </div>
      </a>
    </div>`;
}

// Remove acentos e maiúsculas para a busca ("maquina" acha "Máquina")
function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

// ===== Home =====
function renderizarLista(lista) {
    const container = document.getElementById("lista");
    const contador = document.getElementById("contador");

    container.innerHTML = lista.length
        ? lista.map(criarCard).join("")
        : `<p class="text-center text-secondary">Nenhum álbum encontrado. Tente outro nome.</p>`;

    contador.textContent = `${lista.length} ${lista.length === 1 ? "álbum encontrado" : "álbuns encontrados"}`;
}

function filtrar() {
    const album = normalizar(document.getElementById("busca-album").value);
    const artista = normalizar(document.getElementById("busca-artista").value);

    renderizarLista(dados.filter(item =>
        normalizar(item.titulo).includes(album) &&
        normalizar(item.artista).includes(artista)
    ));
}

function montarArtistas() {
    const container = document.getElementById("lista-artistas");
    const artistas = [...new Set(dados.map(d => d.artista))];

    container.innerHTML = artistas.map(nome => {
        const qtd = dados.filter(d => d.artista === nome).length;
        return `<button type="button" class="btn btn-outline-warning rounded-pill" data-artista="${nome}">
              ${nome} (${qtd})
            </button>`;
    }).join("");

    // Clicar em um artista filtra os álbuns dele
    container.addEventListener("click", e => {
        const botao = e.target.closest("button[data-artista]");
        if (!botao) return;
        document.getElementById("busca-album").value = "";
        document.getElementById("busca-artista").value = botao.dataset.artista;
        filtrar();
        document.getElementById("albuns").scrollIntoView({ behavior: "smooth" });
    });
}

function montarHome() {
    if (!document.getElementById("lista")) return;

    renderizarLista(dados);
    montarArtistas();

    document.getElementById("busca-album").addEventListener("input", filtrar);
    document.getElementById("busca-artista").addEventListener("input", filtrar);
    document.getElementById("form-busca").addEventListener("submit", e => {
        e.preventDefault();
        filtrar();
    });

    const anos = dados.map(d => d.ano);
    document.getElementById("resumo").textContent =
        `Conheça os ${dados.length} álbuns de estúdio do grupo, de ${Math.min(...anos)} a ${Math.max(...anos)}.`;
}

// ===== Detalhes =====
function montarDetalhes() {
    const container = document.getElementById("detalhes");
    if (!container) return;

    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const item = dados.find(d => d.id === id);

    if (!item) {
        container.innerHTML = `
      <div class="text-center">
        <p class="text-secondary">Álbum não encontrado.</p>
        <a href="index.html#albuns" class="btn btn-warning rounded-pill px-4 fw-bold">Voltar aos álbuns</a>
      </div>`;
        return;
    }

    document.title = `${item.titulo} | pMusic`;

    const relacionados = dados.filter(d => d.artista === item.artista && d.id !== item.id);

    container.innerHTML = `
    <div class="row g-4 align-items-start">
      <div class="col-12 col-md-5">
        <img src="${item.imagem}" alt="Capa de ${item.titulo}" class="img-fluid rounded-4 shadow w-100">
      </div>
      <div class="col-12 col-md-7">
        <h1 class="text-warning fw-bold display-6">${item.titulo}</h1>
        <p class="text-secondary">${item.artista} · ${item.ano} · ${item.genero}</p>
        <p>${item.conteudo}</p>
        <h2 class="h5 text-warning mt-4">Faixas</h2>
        <ol>${item.faixas.map(f => `<li>${f}</li>`).join("")}</ol>
        <a href="index.html#albuns" class="btn btn-outline-warning rounded-pill px-4 mt-3">Voltar aos álbuns</a>
      </div>
    </div>
    ${relacionados.length ? `
      <section class="mt-5">
        <h2 class="h4 mb-4">Mais de ${item.artista}</h2>
        <div class="row g-4">${relacionados.map(criarCard).join("")}</div>
      </section>` : ""}`;
}

montarHome();
montarDetalhes();