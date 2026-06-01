# Clinic Perfect Face · Dr. Bruno Camargo

Landing page de harmonização orofacial — branco + dourado, construída em **Astro** com imagens otimizadas automaticamente (WebP responsivo).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
npm run preview  # serve o build
```

## Deploy na Vercel

1. Importe este repositório em https://vercel.com/new
2. A Vercel detecta **Astro** automaticamente (build: `astro build`, output: `dist`). Nenhuma configuração extra é necessária.
3. A cada `git push` na branch `main`, a Vercel publica de novo.

## Onde editar

- **Conteúdo / textos:** `src/pages/index.astro`
- **Estilos (cores, tipografia, responsividade):** `src/styles/style.css`
- **Interações (scroll, menu, cursor):** `public/assets/js/main.js`
- **Imagens:** `src/assets/img/` (otimizadas no build) · logo e favicon em `public/`

## A trocar (placeholders)

- **WhatsApp:** procure por `5599999999999` em `src/pages/index.astro` e troque pelo número real (formato `55` + DDD + número).
- **E-mail, endereço e @Instagram:** no rodapé de `src/pages/index.astro`.

---
Paleta: dourado `#BD9A56` · marfim `#FBF8F2` · grafite `#16130E`. Fontes: Playfair Display + Inter.
