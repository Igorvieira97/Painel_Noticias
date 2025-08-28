
                      📰 Painel de Notícias - Tecnologia e Mundo com integração ao GLPI e DASHBOARDS 
                                       para ser exibidos na televisão da empresa

Este projeto é um painel que exibe automaticamente notícias de tecnologia (G1, Canaltech) e notícias do mundo (G1 Mundo), atualizado em tempo real a partir de feeds RSS.

As notícias são exibidas de forma visual, com imagens (ou placeholders elegantes quando não há imagem disponível), título e resumo.

Funcionalidades

Busca automática de notícias dos seguintes portais:

G1 - Tecnologia

Canaltech

G1 - Mundo

Exibição em cards responsivos e intercalados.

Placeholder aplicado quando a notícia não possui imagem.

Atualização em tempo real sem necessidade de recarregar a página.

📁 painel-noticias
 ┣ 📄 index.html      # Interface do painel (frontend)
 ┣ 📄 server.js       # Servidor Node.js responsável por buscar e servir os feeds RSS
 ┣ 📄 package.json    # Dependências do projeto
 ┗ 📄 README.md       # Documentação

 ⚙️ Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/painel-noticias.git
cd painel-noticias

2️⃣ Instalar dependências
npm install

3️⃣ Iniciar o servidor
node server.js

4️⃣ Acessar no navegador

Abra:

http://localhost:3000

🌐 Personalização

Você pode adicionar novos feeds RSS dentro do arquivo server.js.

O placeholder pode ser alterado no index.html para outro estilo de imagem.

O intervalo de atualização pode ser configurado no setInterval do index.html.


📜 Licença

Este projeto é de uso livre para estudos e pode ser adaptado conforme necessário.
