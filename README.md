
# 🛍️ Sistema Administrativo de Loja – Front-End

Aplicação Front-End integrada a uma API administrativa para gerenciamento completo de uma loja online.

## 👩‍💻 Desenvolvedoras
[Emily Rafaela](https://github.com/Emilyrts)

[Laura Dias](https://github.com/L-diaaas)

[Talita Yuki](https://github.com/taltsolyu)

## 📌 Sobre o Projeto

Este projeto consiste no desenvolvimento do **front-end** de uma aplicação administrativa voltada para o gerenciamento de uma loja.
Apesar de existir uma página inicial pública, **o acesso ao sistema é exclusivo para funcionários autorizados**, que devem realizar login para acessar o painel administrativo.

O objetivo principal é permitir que colaboradores da loja gerenciem produtos, clientes, compras, itens e tipos de produto de forma simples, organizada e eficiente.



## 🎯 Propósito da Aplicação

* Facilitar o controle interno da loja.
* Centralizar operações essenciais, como cadastro, atualização e visualização.
* Permitir navegação rápida entre diferentes áreas administrativas.
* Prover um front-end moderno, responsivo e fácil de usar.



## 👥 Público-Alvo

* Funcionários da loja
* Administradores
* Equipe de controle de estoque
* Colaboradores responsáveis por compras e registros internos



## 🧩 O que a Aplicação Faz

A aplicação apresenta telas que se conectam à API administrativa e permitem:

* 🔐 **Login seguro** para acesso ao painel interno
* 🏠 **Home administrativo**
* 📦 **Gestão de Produtos**
* 🧾 **Gestão de Clientes**
* 🛒 **Gestão de Compras**
* 🗂️ **Gestão de Tipos**
* 🧰 **Gestão de Itens**

### Funcionalidades por página

* **Produtos** → visualizar, adicionar (em página separada), editar e excluir
* **Compras** → visualizar e adicionar (em página separada)
* **Clientes, Tipos, Itens** → visualizar, adicionar, alterar e deletar na mesma página
* **Login** → validação de acesso
* **Página inicial** → pública



## 🛠️ Stack e Tecnologias Utilizadas

* **Next.js**
* **TailwindCSS**
* **React Hooks**
* **Node.js + npm**



## 🚀 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse a pasta do projeto

```bash
cd nome-da-pasta
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse no navegador

```
http://localhost:3000
```


## 📁 Estrutura das Páginas no host

* `/` – Página inicial
* `/login` – Acesso exclusivo para funcionários
* `/admin` – Painel administrativo
* `/produtos` – Gerenciamento de produtos
* `/produtos/adicionar` – Cadastro de novo produto
* `/clientes` – CRUD de clientes
* `/compras` – Lista de compras
* `/compras/adicionar` – Cadastro de compra
* `/tipos` – CRUD de tipos
* `/itens` – CRUD de itens





