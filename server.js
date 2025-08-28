const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');
const app = express();
const PORT = 5500;

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, '.')));

// Proxy para RSS
app.get('/rss', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("URL não fornecida");

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      },
      redirect: 'follow'
    });

    if (!response.ok) return res.status(response.status).send("Erro ao acessar RSS");

    let text = await response.text();

    // Limpa CDATA e tags problemáticas
    text = text.replace(/<!\[CDATA\[(.*?)\]\]>/gs, (_, inner) => inner);
    text = text.replace(/<img[^>]*>/gi, match => match.replace(/\/?>$/, '/>'));

    res.set('Content-Type', 'application/xml');
    res.send(text);

  } catch(e) {
    console.error("Erro no fetch do RSS:", e);
    res.status(500).send("Erro ao buscar RSS: " + e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
