
# **Consumo de API - Github **  

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

## **📋 Descrição**  
Aplicação web que busca e exibe perfis do GitHub, desenvolvida como trabalho para a disciplina de **Programação Web**. 
Compara duas abordagens de estilização:  
- **Styled Components** (CSS-in-JS)  
- **Tailwind CSS** (Utility-first CSS)  

---

## ** Funcionalidades**  
- Busca de usuários do GitHub por username  
- Exibição de:  
  - Foto do perfil  
  - Nome de usuário  
  - Lista de repositórios recentes  
- 🎨 Duas rotas com estilos distintos:  
  - `/styled` → Versão com Styled Components  
  - `/tailwind` → Versão com Tailwind CSS  

---

## **🛠️ Tecnologias**  
| Tecnologia | Finalidade |  
|------------|------------|  
| React + Vite | Framework frontend e tooling |  
| TypeScript | Tipagem estática |  
| Styled Components | Estilização CSS-in-JS |  
| Tailwind CSS | Framework CSS utilitário |  
| GitHub API | Integração com dados do GitHub |  
| React Router | Navegação entre rotas |  

---

## **🚀 Como Executar**  

### **Pré-requisitos**  
- Node.js (v18+)  
- npm ou yarn  

### **Instalação**  
```bash
# Clone o repositório
git clone https://github.com/dudaclw/github-profile-request.git
cd github-profile-request

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### **Acesso**  
- Abra no navegador:  
  - **Styled Components**: `http://localhost:5173/styled`  
  - **Tailwind CSS**: `http://localhost:5173/tailwind`  

---

## **📂 Estrutura do Projeto**  
```
src/
├── components/       # Componentes reutilizáveis
├── hooks/            # Custom hooks
├── pages/            # Páginas/rotas
├── styles/           # Estilos globais
├── utils/            # API
├── App.tsx           # Configuração de rotas
└── main.tsx          # Ponto de entrada
```

---

## **📝 Relatório Técnico **  

### **Objetivos**  
- Comparar abordagens de estilização em React  
- Consumir APIs REST com tratamento de erros  
- Implementar boas práticas de componentização  

### **Diferenciais**  
✔ **Clean Architecture**  
✔ **Feedback visual (loading/erros)**  

---

## **🖼️ Screenshots**  
| Styled Components | Tailwind CSS |  
|-------------------|-------------|  
| <img src="./screenshots/styled-version.png" width="300"> | <img src="./screenshots/tailwind-version.png" width="300"> |  

---

## **📚 Documentação Adicional**  
- [GitHub API Docs](https://docs.github.com/en/rest)  
- [Styled Components](https://styled-components.com/docs)  
- [Tailwind CSS](https://tailwindcss.com/docs)  

---

## **📄 Licença**  
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para detalhes.
