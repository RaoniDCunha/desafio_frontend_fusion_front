# 🎯 Desafio Frontend Junior - Card de Perfil

Este projeto foi desenvolvido como parte do desafio técnico para a **Frontend Fusion**. O objetivo foi construir um componente de Card de Perfil interativo, responsivo e acessível, seguindo fielmente o design proposto no Figma.

## 🚀 Funcionalidades Implementadas

Além dos requisitos obrigatórios, foram adicionados diversos diferenciais para enriquecer a experiência do usuário:

* **Componente Dinâmico:** `ProfileCard` construído para receber dados via *props* (nome, cargo, números, bio e foto).
* **Interatividade Avançada:** Botão "Seguir" com mudança de estado, texto e estilo visual.
* **Persistência de Dados:** O estado do botão "Seguir" é salvo no `localStorage`, mantendo a escolha do usuário mesmo após recarregar a página.
* **Animações Suaves (Diferencial):** Transições de interface utilizando **Framer Motion** para evitar cortes bruscos na troca de botões, além de um Modal interativo para o botão "Mensagem".
* **Responsividade:** Layout adaptável para dispositivos móveis e desktop.

## 🛠️ Tecnologias Utilizadas

* **[Next.js 14+](https://nextjs.org/)** - Framework React com App Router.
* **[React](https://react.dev/)** - Biblioteca de interfaces (uso de Hooks como `useState` e `useEffect`).
* **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utilitária e responsiva.
* **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca para animações fluidas e micro-interações.
* **[Lucide React](https://lucide.dev/)** - Ícones SVG leves e customizáveis.

---

## 💻 Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto na sua máquina:

1. Clone este repositório:
```bash
git clone https://github.com/RaoniDCunha/desafio_frontend_fusion_front.git

```

2. Acesse a pasta do projeto:
```bash
cd desafio_frontend_fusion_front

```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Acesse no navegador:

Abra o seu navegador e acesse http://localhost:3000 para ver o resultado. O layout será atualizado automaticamente caso você faça alterações no código.

