
// ==================================================
// pMusic - Dados dos álbuns
// ==================================================

const dados = [

    {
        id: 1,
        titulo: "Sobrevivendo no Inferno",
        artista: "Racionais MC's",
        ano: 1997,
        tipo: "Álbum de estúdio",
        gravadora: "Cosa Nostra",
        genero: "Rap",
        quantidadeFaixas: 12,
        destaque: true,

        descricao: "Um dos discos mais importantes da história do rap brasileiro, com músicas como Diário de um Detento e Capítulo 4, Versículo 3.",

        conteudo: "Lançado em 1997 pelo selo Cosa Nostra, Sobrevivendo no Inferno é considerado uma das obras mais importantes do rap nacional. O disco apresenta narrativas sobre desigualdade social, violência, racismo e cotidiano das periferias brasileiras. Em 2018, suas letras foram publicadas em livro e a obra passou a integrar a lista de leituras obrigatórias da Unicamp.",

        faixas: [
            "Jorge da Capadócia",
            "Gênesis (Intro)",
            "Capítulo 4, Versículo 3",
            "Tô Ouvindo Alguém Me Chamar",
            "Rapaz Comum",
            "...",
            "Diário de um Detento",
            "Periferia é Periferia (Em Qualquer Lugar)",
            "Qual Mentira Vou Acreditar",
            "Mágico de Oz",
            "Fórmula Mágica da Paz",
            "Salve"
        ],

        imagem: "/public/images/sobrevivendoInferno.png",

        fotos: [
            {
                titulo: "Capa de Sobrevivendo no Inferno",
                imagem: "/public/images/sobrevivendoInferno.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    },

    {
        id: 2,
        titulo: "Nada Como um Dia Após o Outro Dia",
        artista: "Racionais MC's",
        ano: 2002,
        tipo: "Álbum duplo de estúdio",
        gravadora: "Cosa Nostra",
        genero: "Rap",
        quantidadeFaixas: 21,
        destaque: true,

        descricao: "Álbum duplo lançado em 2002, conhecido por músicas como Negro Drama, Jesus Chorou e Vida Loka.",

        conteudo: "Lançado em 2002, Nada Como um Dia Após o Outro Dia é um álbum duplo dividido em dois discos. A obra apresenta diferentes perspectivas sobre a vida nas periferias, relações pessoais, dificuldades sociais e experiências dos integrantes do grupo. Entre suas músicas mais conhecidas estão Negro Drama, Jesus Chorou e Da Ponte Pra Cá.",

        faixas: [
            "Sou + Você",
            "Vivão e Vivendo",
            "V.L. (Intro)",
            "V.L. (Parte I)",
            "Negro Drama",
            "A Vítima",
            "Na Fé Firmão",
            "12 de Outubro",
            "Eu Sou 157",
            "A Vida é Desafio",
            "1 por Amor, 2 por Dinheiro",
            "De Volta à Cena",
            "Otus 500",
            "Crime Vai e Vem",
            "Jesus Chorou",
            "Fone (Intro)",
            "Estilo Cachorro",
            "V.L. (Parte II)",
            "Expresso da Meia-Noite",
            "Trutas e Quebradas",
            "Da Ponte Pra Cá"
        ],

        imagem: "/public/images/vidaLoka.png",

        fotos: [
            {
                titulo: "Capa de Nada Como um Dia Após o Outro Dia",
                imagem: "/public/images/vidaLoka.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    },

    {
        id: 3,
        titulo: "Raio X do Brasil",
        artista: "Racionais MC's",
        ano: 1993,
        tipo: "Álbum de estúdio",
        gravadora: "Zimbabwe Records",
        genero: "Rap",
        quantidadeFaixas: 8,
        destaque: true,

        descricao: "Disco de 1993 que apresenta músicas marcantes como Fim de Semana no Parque e Homem na Estrada.",

        conteudo: "Lançado em 1993 pela Zimbabwe Records, Raio X do Brasil apresenta um retrato das desigualdades sociais e da realidade vivida nas periferias brasileiras. O trabalho ajudou a consolidar a identidade musical e temática dos Racionais MC's.",

        faixas: [
            "Introdução",
            "Fim de Semana no Parque",
            "Parte II",
            "Mano na Porta do Bar",
            "Homem na Estrada",
            "Júri Racional",
            "Fio da Navalha",
            "Agradecimentos"
        ],

        imagem: "/public/images/raioX.png",

        fotos: [
            {
                titulo: "Capa de Raio X do Brasil",
                imagem: "/public/images/raioX.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    },

    {
        id: 4,
        titulo: "Holocausto Urbano",
        artista: "Racionais MC's",
        ano: 1990,
        tipo: "EP",
        gravadora: "Zimbabwe Records",
        genero: "Rap",
        quantidadeFaixas: 6,
        destaque: false,

        descricao: "Primeiro EP do grupo, lançado em 1990, com letras de denúncia social e crítica à realidade das periferias.",

        conteudo: "Lançado em 1990 pela Zimbabwe Records, Holocausto Urbano é o EP de estreia dos Racionais MC's. O trabalho apresenta temas como racismo, desigualdade social, violência e dificuldades enfrentadas pelos moradores das periferias de São Paulo.",

        faixas: [
            "Pânico na Zona Sul",
            "Beco Sem Saída",
            "Hey Boy",
            "Mulheres Vulgares",
            "Racistas Otários",
            "Tempos Difíceis"
        ],

        imagem: "/public/images/urbano.png",

        fotos: [
            {
                titulo: "Capa de Holocausto Urbano",
                imagem: "/public/images/urbano.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    },

    {
        id: 5,
        titulo: "Escolha o Seu Caminho",
        artista: "Racionais MC's",
        ano: 1992,
        tipo: "EP",
        gravadora: "Zimbabwe Records",
        genero: "Rap",
        quantidadeFaixas: 4,
        destaque: false,

        descricao: "EP lançado em 1992, com diferentes versões da música Voz Ativa e a faixa Negro Limitado.",

        conteudo: "Lançado em 1992 pela Zimbabwe Records, Escolha o Seu Caminho é o segundo EP dos Racionais MC's. O trabalho reúne diferentes versões de Voz Ativa e a música Negro Limitado, mantendo a abordagem crítica e social característica do grupo.",

        faixas: [
            "Voz Ativa (Versão Rádio)",
            "Voz Ativa (Versão Baile)",
            "Voz Ativa (Capela)",
            "Negro Limitado"
        ],

        imagem: "/public/images/caminho.png",

        fotos: [
            {
                titulo: "Capa de Escolha o Seu Caminho",
                imagem: "/public/images/caminho.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    },

    {
        id: 6,
        titulo: "Cores & Valores",
        artista: "Racionais MC's",
        ano: 2014,
        tipo: "Álbum de estúdio",
        gravadora: "Cosa Nostra",
        genero: "Rap",
        quantidadeFaixas: 15,
        destaque: false,

        descricao: "Álbum lançado em 2014, marcando o retorno do grupo com uma sonoridade diferente e 15 faixas.",

        conteudo: "Lançado em 2014, Cores & Valores é o sexto trabalho de estúdio dos Racionais MC's. O disco apresenta uma sonoridade diferente em relação aos trabalhos anteriores e reúne 15 faixas. Entre elas estão Cores & Valores, Preto Zica, A Praça e Quanto Vale o Show?.",

        faixas: [
            "Cores & Valores",
            "Somos o Que Somos",
            "Cores & Valores: Preto e Amarelo",
            "Trilha",
            "Eu Te Disse",
            "Preto Zica",
            "Cores & Valores: Finado 'Neguin'",
            "Eu Compro",
            "A Escolha Que Eu Fiz",
            "A Praça",
            "O Mal e o Bem",
            "Você Me Deve",
            "Quanto Vale o Show?",
            "Coração Barrabaz",
            "Eu Te Proponho"
        ],

        imagem: "/public/images/cores.png",

        fotos: [
            {
                titulo: "Capa de Cores & Valores",
                imagem: "/public/images/cores.png"
            },
            {
                titulo: "Racionais MC's",
                imagem: "/public/images/racionais.png"
            }
        ]
    }

];


// ==================================================
// Card de álbum
// ==================================================

function criarCard(item) {

    return `
        <div class="col-12 col-md-4">

            <a href="detalhes.html?id=${item.id}" class="text-decoration-none">

                <div class="card bg-black text-light border-secondary h-100 p-2">

                    <img
                        src="${item.imagem}"
                        alt="Capa de ${item.titulo}"
                        class="card-img-top rounded-3 object-fit-cover capa-album"
                    >

                    <div class="card-body text-center">

                        <h3 class="h5 text-warning">
                            ${item.titulo}
                        </h3>

                        <p class="text-light small mb-1">
                            ${item.artista} (${item.ano})
                        </p>

                        <p class="text-secondary small mb-1">
                            ${item.tipo}
                        </p>

                        <p class="text-secondary small">
                            ${item.descricao}
                        </p>

                    </div>

                </div>

            </a>

        </div>
    `;

}


// ==================================================
// Normalização de textos
// ==================================================

function normalizar(texto) {

    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


// ==================================================
// Carrossel de destaques
// ==================================================

function montarDestaques() {

    const container = document.getElementById("lista-destaques");

    if (!container) return;

    const destaques = dados.filter(item => item.destaque);

    if (destaques.length === 0) {

        container.innerHTML = `
            <div class="carousel-item active">

                <div class="hero bg-black d-flex align-items-center justify-content-center">

                    <p class="text-secondary">
                        Nenhum álbum em destaque.
                    </p>

                </div>

            </div>
        `;

        return;
    }

    container.innerHTML = destaques.map((item, indice) => `

        <div class="carousel-item ${indice === 0 ? "active" : ""}">

            <div class="hero">

                <a href="./detalhes.html?id=${encodeURIComponent(item.id)}">
                    <img
                        src="${item.imagem}"
                        class="hero-img"
                        alt="Capa do álbum ${item.titulo}"
                    >
                </a>

                <div class="hero-texto">

                    <h2 class="fw-bold display-5 text-white mb-2">
                        ${item.titulo}
                    </h2>

                    <p class="text-light mb-3">
                        ${item.descricao}
                    </p>

                    <a
                        href="./detalhes.html?id=${encodeURIComponent(item.id)}"
                        class="btn btn-warning rounded-pill px-4 fw-bold position-relative"
                    >
                        Ver álbum
                    </a>

                </div>

            </div>

        </div>

    `).join("");

}


// ==================================================
// Renderização da lista de álbuns
// ==================================================

function renderizarLista(lista) {

    const container = document.getElementById("lista");
    const contador = document.getElementById("contador");

    if (!container) return;

    container.innerHTML = lista.length
        ? lista.map(criarCard).join("")
        : `
            <p class="text-center text-secondary">
                Nenhum álbum encontrado. Tente outro nome.
            </p>
        `;

    if (contador) {

        contador.textContent = `
            ${lista.length}
            ${lista.length === 1 ? "álbum encontrado" : "álbuns encontrados"}
        `;

    }

}


// ==================================================
// Filtragem de álbuns
// ==================================================

function filtrar() {

    const campoAlbum = document.getElementById("busca-album");
    const campoArtista = document.getElementById("busca-artista");

    if (!campoAlbum || !campoArtista) return;

    const album = normalizar(campoAlbum.value);
    const artista = normalizar(campoArtista.value);

    const resultado = dados.filter(item =>

        normalizar(item.titulo).includes(album) &&
        normalizar(item.artista).includes(artista)

    );

    renderizarLista(resultado);

}


// ==================================================
// Montagem dos artistas
// ==================================================

function montarArtistas() {

    const container = document.getElementById("lista-artistas");

    if (!container) return;

    const artistas = [...new Set(dados.map(d => d.artista))];

    container.innerHTML = artistas.map(nome => {

        const quantidade = dados.filter(d => d.artista === nome).length;

        return `
            <button
                type="button"
                class="btn btn-outline-warning rounded-pill"
                data-artista="${nome}"
            >
                ${nome} (${quantidade})
            </button>
        `;

    }).join("");


    container.addEventListener("click", e => {

        const botao = e.target.closest("button[data-artista]");

        if (!botao) return;

        const campoAlbum = document.getElementById("busca-album");
        const campoArtista = document.getElementById("busca-artista");

        if (campoAlbum) campoAlbum.value = "";

        if (campoArtista) {
            campoArtista.value = botao.dataset.artista;
        }

        filtrar();

        const secaoAlbuns = document.getElementById("albuns");

        if (secaoAlbuns) {

            secaoAlbuns.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ==================================================
// Montagem da página inicial
// ==================================================

function montarHome() {

    if (!document.getElementById("lista")) return;

    montarDestaques();

    renderizarLista(dados);

    montarArtistas();

    const campoAlbum = document.getElementById("busca-album");
    const campoArtista = document.getElementById("busca-artista");
    const formulario = document.getElementById("form-busca");

    if (campoAlbum) {
        campoAlbum.addEventListener("input", filtrar);
    }

    if (campoArtista) {
        campoArtista.addEventListener("input", filtrar);
    }

    if (formulario) {

        formulario.addEventListener("submit", e => {

            e.preventDefault();

            filtrar();

        });

    }

}


// ==================================================
// Página de detalhes
// ==================================================

function montarDetalhes() {

    const container = document.getElementById("detalhes");

    if (!container) return;

    const parametros = new URLSearchParams(window.location.search);

    const id = Number(parametros.get("id"));

    const item = dados.find(d => d.id === id);

    if (!item) {

        container.innerHTML = `
            <div class="text-center">

                <h2 class="text-warning">
                    Álbum não encontrado
                </h2>

                <p class="text-secondary">
                    Não encontramos o álbum solicitado.
                </p>

                <a
                    href="index.html#albuns"
                    class="btn btn-warning rounded-pill px-4 fw-bold"
                >
                    Voltar aos álbuns
                </a>

            </div>
        `;

        return;

    }

    document.title = `${item.titulo} | pMusic`;

    const relacionados = dados.filter(d =>
        d.artista === item.artista && d.id !== item.id
    );

    const fotos = item.fotos && item.fotos.length > 0
        ? item.fotos
        : [
            {
                titulo: `Capa de ${item.titulo}`,
                imagem: item.imagem
            }
        ];

    container.innerHTML = `

        <!-- Informações principais -->

        <div class="row g-4 align-items-start">

            <div class="col-12 col-md-5">

                <img
                    src="${item.imagem}"
                    alt="Capa de ${item.titulo}"
                    class="img-fluid rounded-4 shadow w-100"
                >

            </div>

            <div class="col-12 col-md-7">

                <h1 class="text-warning fw-bold display-6">
                    ${item.titulo}
                </h1>

                <p class="text-secondary">
                    ${item.artista}
                </p>

                <hr class="border-secondary">

                <p>
                    <strong>Ano de lançamento:</strong> ${item.ano}
                </p>

                <p>
                    <strong>Classificação:</strong> ${item.tipo}
                </p>

                <p>
                    <strong>Gravadora:</strong> ${item.gravadora}
                </p>

                <p>
                    <strong>Gênero:</strong> ${item.genero}
                </p>

                <p>
                    <strong>Quantidade de faixas:</strong> ${item.quantidadeFaixas}
                </p>

                <hr class="border-secondary">

                <h2 class="h5 text-warning">
                    Sobre a obra
                </h2>

                <p>
                    ${item.conteudo}
                </p>

                <a
                    href="index.html#albuns"
                    class="btn btn-outline-warning rounded-pill px-4 mt-3"
                >
                    Voltar aos álbuns
                </a>

            </div>

        </div>


        <!-- Lista de faixas -->

        <section class="mt-5">

            <h2 class="h4 text-warning mb-4">
                Lista de faixas
            </h2>

            <ol class="list-group list-group-numbered">

                ${item.faixas.map(faixa => `

                    <li class="list-group-item bg-black text-light border-secondary">
                        ${faixa}
                    </li>

                `).join("")}

            </ol>

        </section>


        <!-- Galeria de fotos -->

        <section class="mt-5">

            <h2 class="h4 text-warning mb-4">
                Galeria de fotos
            </h2>

            <div class="row g-4">

                ${fotos.map(foto => `

                    <div class="col-12 col-sm-6 col-lg-4">

                        <div class="card bg-black text-light border-secondary h-100">

                            <a
                                href="${foto.imagem}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <img
                                    src="${foto.imagem}"
                                    alt="${foto.titulo}"
                                    class="card-img-top galeria-img"
                                >

                            </a>

                            <div class="card-body">

                                <h3 class="h6 text-center">
                                    ${foto.titulo}
                                </h3>

                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

        </section>


        <!-- Álbuns relacionados -->

        ${relacionados.length ? `

            <section class="mt-5">

                <h2 class="h4 mb-4 text-warning">
                    Mais de ${item.artista}
                </h2>

                <div class="row g-4">

                    ${relacionados.map(criarCard).join("")}

                </div>

            </section>

        ` : ""}

    `;

}


// ==================================================
// Inicialização
// ==================================================

montarHome();

montarDetalhes();
