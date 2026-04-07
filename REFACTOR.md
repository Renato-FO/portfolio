# 🎨 Refatoração do Portfolio - Plano de Implementação

## 📋 Visão Geral
Refatorar o portfolio atual para replicar o design moderno e profissional mostrado no `goal.png`.

---

## 🎯 Design Target (goal.png)

O design alvo apresenta:
- **Tema**: Dark mode com fundo `#0a0f1a` (azul escuro profundo)
- **Estilo**: Cards com bordas sutis, glassmorphism, gradientes
- **Tipografia**: Limpa, hierarquia clara com títulos em branco
- **Cor de destaque**: Azul/violeta (`#6366f1` - Indigo)

---

## 📐 Estrutura do Novo Layout

### 1. Navbar (Topo Fixo)
```
[Logo/Name] ──────────────────── [About] [Projects] [Blog] [Contact] [Resume Button]
```
- Fundo transparente com backdrop-blur
- Links com hover effect
- Botão "Resume" destacado com cor de destaque

### 2. Hero Section
```
[Badge: Available for International Opportunities]
[Title: Senior Fullstack Developer]
[Subtitle: Building scalable, high-performance web applications...]
[View Projects →] [↓ Download Resume]
─────────────────────────────────────────
[8+]      [50+]      [15+]      [3]
Years     Projects   Tech       Continents
```

### 3. Tech Stack Section
```
[Title: Tech Stack]
[Subtitle: Core technologies I work with...]

[Frontend Card]  [Backend Card]  [Cloud & DevOps Card]  [Database Card]
   🎨              ⚙️                ☁️                     🗄️
   React           Node.js           AWS                   PostgreSQL
   Next.js         Python            Docker                MongoDB
   TypeScript      Django            Kubernetes            Redis
   Tailwind        Express                               MySQL
```

### 4. Featured Projects Section
```
[Title: Featured Projects]                    [View All Projects →]

[Digital Banking Platform]     [Telemedicine Platform]
[Image/Mockup]                 [Image/Mockup]
[Fintech] [2024]               [Healthcare] [2023]
Description...                 Description...
[React] [Node.js] [PostgreSQL] [Next.js] [Python] [MongoDB]
[View Case Study →]            [View Case Study →]

[Global Marketplace]           [Predictive Analytics]
...
```

### 5. Latest Articles Section
```
[Title: Latest Articles]                       [View All Articles →]

[Article Card 1]  [Article Card 2]  [Article Card 3]
[Code Image]      [Cloud Diagram]   [DB Schema]
Dec 10, 2023 • 8 min read
Title...
Description...
[React] [Performance]
```

### 6. CTA Section
```
┌────────────────────────────────────────────┐
│  Ready to Work Together? (gradiente azul)  │
│  I'm currently open to new opportunities... │
│  [Get in Touch →] [↓ Download Resume]      │
└────────────────────────────────────────────┘
```

### 7. Footer
```
[Name]               [Navigation]        [Resources]
Senior Fullstack     About               Resume
Developer...         Projects            Case Studies
[Social Icons]       Blog                Tech Stack
                     Contact             Testimonials
─────────────────────────────────────────────────────────
© 2024 ...                              Built with React, Next.js & Tailwind
```

---

## 🔧 Arquivos a Criar/Modificar

### Novos Componentes
```
src/components/
├── Navbar.tsx          (novo - substitui Header atual como menu)
├── Hero.tsx            (novo - hero section com stats)
├── TechStack.tsx       (novo - cards de tecnologias)
├── Projects.tsx        (novo - projetos em destaque)
├── Articles.tsx        (novo - seção de artigos)
├── CTA.tsx             (novo - call to action)
└── Footer.tsx          (novo - footer completo)
```

### Componentes a Manter/Adaptar
```
src/components/
├── About.tsx           (adaptar - integrar ao novo layout)
├── Companies.tsx       (remover ou integrar em About)
├── Contact.tsx         (remover - usar CTA + footer)
├── Tooling.tsx         (remover - substituído por TechStack)
└── Header.tsx          (remover - substituído por Hero + Navbar)
```

### Arquivos a Modificar
```
src/pages/index.tsx     (refatorar - nova estrutura)
src/pages/_app.tsx      (manter - fonts)
src/styles/globals.css  (atualizar - tema dark)
tailwind.config.ts      (atualizar - cores customizadas)
```

---

## 🎨 Paleta de Cores

```css
--bg-primary: #0a0f1a      /* Fundo principal */
--bg-card: #111827         /* Fundo dos cards */
--bg-card-hover: #1f2937   /* Hover dos cards */
--text-primary: #ffffff    /* Texto principal */
--text-secondary: #9ca3af  /* Texto secundário */
--accent: #6366f1          /* Cor de destaque (indigo) */
--accent-hover: #4f46e5    /* Hover da cor de destaque */
--border: #1f2937          /* Bordas sutis */
```

---

## 📝 Passo a Passo da Implementação

### Fase 1: Configuração
1. Atualizar `tailwind.config.ts` com cores customizadas
2. Atualizar `globals.css` com tema dark base

### Fase 2: Componentes Base
3. Criar `Navbar.tsx` com navegação fixa
4. Criar `Hero.tsx` com stats e CTAs
5. Criar `Footer.tsx`

### Fase 3: Seções de Conteúdo
6. Criar `TechStack.tsx` com cards categorizados
7. Criar `Projects.tsx` com grid de projetos
8. Criar `Articles.tsx` com cards de artigos
9. Criar `CTA.tsx` com gradiente

### Fase 4: Integração
10. Refatorar `index.tsx` com nova estrutura
11. Adaptar/remove componentes antigos
12. Testar responsividade

### Fase 5: Polimento
13. Adicionar animações/transições
14. Verificar acessibilidade
15. Testar build

---

## ⚠️ Considerações

- **I18n**: Manter suporte multi-idioma (pt-BR / en-US)
- **Responsividade**: Design deve funcionar em mobile, tablet e desktop
- **Performance**: Lazy load para imagens, otimizar bundle
- **SEO**: Meta tags, Open Graph, structured data
- **Acessibilidade**: ARIA labels, contraste adequado, navegação por teclado

---

## 📦 Dependências Adicionais (Opcionais)

```bash
# Ícones (já temos SVGs, mas pode usar lucide-react)
npm install lucide-react

# Animações (opcional)
npm install framer-motion
```

---

*Gerado em 06/04/2026*
