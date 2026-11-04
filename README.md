# LCR Speaking Portfolio

Site profissional para palestras, masterclasses, workshops e participações em eventos de Leonardo Camargo Rossato.

**Site:** https://leonardocamargorossato.github.io/LCR-Speaking-Portfolio/

## Desenvolvimento
```bash
npm install
npm run dev
npm run test
GITHUB_PAGES=true npm run build
```

GitHub Pages: `.github/workflows/deploy-pages.yml` (mantido). O build publica com base `/LCR-Speaking-Portfolio/`.

## Manutenção editorial
- `src/data/talks.ts`: ofertas e formatos de palestras.
- `src/data/events.ts`: acervo histórico da V0 e destaques.
- `src/data/gallery.ts`: fotografias do projeto original.
- `src/data/projects.ts`: três projetos técnicos demonstráveis.
- `src/data/publications.ts`: trabalhos científicos com DOI.
- `src/lib/contact.ts`: endereço de contato e geração do e-mail.
- `src/assets/speaker-reel-placeholder.svg`: **capa provisória**, não fotografia/vídeo real.

## Pendências
Validar indicadores históricos (30+ palestras/painéis, 10+ estados, 8+ curadorias e anos de P&D), conferir papéis e localidades dos eventos destacados, complementar links oficiais de comprovação, revisar legendas do acervo fotográfico, adicionar vídeo real e PDF de Speaker Kit. Nenhuma dessas informações pendentes foi fabricada nesta versão.

A V1 não utiliza banco de dados ou Supabase. Formulário prepara um `mailto:`; o visitante confirma o envio pelo aplicativo de e-mail.