# Sabrina Feitoza | Arquitetura & Interiores

> **"Casas pensadas para unir estética, conforto e funcionalidade."**

Web application de alto padrão desenvolvida em **React 19 + TypeScript + Vite**, projetada com layout editorial minimalista (*clean luxury*) e módulo imersivo de simulação de caminhada em primeira pessoa pelo empreendimento **Villa Bella III**.

---

## 🌟 Funcionalidades Principais

- **Página Inicial Clean & Editorial (`/`):** Apresentação da arquiteta, posicionamento de marca, metodologia autoral em 4 etapas e portfólio selecionado.
- **Tour Imersivo do Pedestre (`/tour-villa-bella`):** 
  - 8 estações sequenciais de percurso com animação de passos (*Head Bobbing*).
  - Masterplan com mini-mapa SVG e radar de visão em tempo real.
  - Alternador de iluminação atmosférica (*Dia*, *Golden Hour*, *Noite com iluminação cênica*).
  - Hotspots de detalhamento de materiais nobres e acabamentos.
  - Player de vídeo cinema integrado com voos de drone e dolly forward.
  - Efeitos sonoros e ambientais sintetizados via Web Audio API.
- **Briefing Express & Contato (`/contato`):** Formulário interativo com cálculo e envio automatizado de mensagem diretamente para o WhatsApp oficial da arquiteta (+55 81 99416-4831).

---

## 🛠️ Tecnologias Utilizadas

- **Core:** React 19, TypeScript
- **Bundler:** Vite 6
- **Ícones & UI:** Lucide React
- **Estilização:** CSS Vanilla com Design Tokens e tipografia Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*)
- **Deploy:** Otimizado para **Vercel** (`sabrinafeitoza.vercel.app`)

---

## 🚀 Como Executar Localmente

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

3. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## 📁 Estrutura de Diretórios

```
├── models/                           # Modelos 3D SketchUp (.skp)
├── public/assets/                    # Mídias estáticas servidas na web (imagens e vídeos)
│   ├── images/                       # Renders do Villa Bella III e foto oficial
│   └── videos/                       # Vídeos do percurso e drone
├── src/
│   ├── components/                   # Componentes reutilizáveis (Navbar, Footer)
│   ├── data/                         # Dados estruturados das estações e hotspots
│   ├── pages/                        # Páginas (Home, Walkthrough, Contato)
│   ├── styles/                       # Folha de estilos e tokens de design
│   ├── types/                        # Tipagens TypeScript
│   ├── App.tsx                       # Roteador principal
│   └── main.tsx                      # Ponto de entrada React
├── vercel.json                       # Configuração de rewrites para Vercel
├── vite.config.ts                    # Configuração Vite
└── package.json
```

---

© 2026 Sabrina Feitoza Arquitetura. Todos os direitos reservados.
