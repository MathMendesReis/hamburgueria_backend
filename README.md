# Projeto Backend - Hamburgueria E-commerce

Bem-vindo ao repositório do projeto backend da Hamburgueria E-commerce! Este projeto consiste em um servidor de backend para suportar as funcionalidades do website de uma hamburgueria, como gerenciamento de pedidos, cardápio e informações dos clientes.

O projeto foi desenvolvido utilizando TypeScript para garantir a tipagem estática do código, Prisma como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados, e seguindo princípios de orientação a objetos (POO) para uma melhor organização e manutenção do código.

## Funcionalidades

O backend da Hamburgueria E-commerce oferece as seguintes funcionalidades:

1. Gerenciamento de pedidos: permite criar, visualizar, atualizar e cancelar pedidos dos clientes.
2. Gerenciamento do cardápio: possibilita adicionar, editar e remover itens do cardápio, incluindo informações como nome, descrição, preço e ingredientes.
3. Autenticação e autorização: implementa um sistema de autenticação para permitir que os usuários façam login e acessem as funcionalidades restritas.
4. Integração com o banco de dados: utiliza o Prisma para se comunicar com o banco de dados e realizar operações de leitura e escrita.
5. API RESTful: fornece uma API RESTful para que o frontend possa se comunicar com o servidor.

## Como executar o projeto

Para executar o projeto Hamburgueria E-commerce Backend, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o banco de dados (MySQL, PostgreSQL, etc.) instalados em sua máquina.
2. Faça o clone deste repositório para o seu ambiente local.
3. No diretório raiz do projeto, execute o comando `npm install` para instalar as dependências necessárias.
4. Configure o arquivo `.env` com as variáveis de ambiente necessárias, como a conexão com o banco de dados e a chave secreta para autenticação.
5. Execute o comando `npx prisma generate` para gerar os arquivos de tipos e queries do Prisma.
6. Execute o comando `npm run dev` para iniciar o servidor em modo de desenvolvimento.


## Contribuição

Agradecemos pelo interesse em contribuir com o projeto Hamburgueria E-commerce Backend. Se você deseja contribuir, siga as etapas abaixo:

1. Faça um fork deste repositório e faça o clone para o seu ambiente local.
2. Crie uma branch com um nome descritivo para a sua contribuição.
3. Implemente as melhorias, correções de bugs ou novas funcionalidades desejadas.
4. Execute os testes para garantir que tudo está funcionando corretamente.
5. Envie um pull request detalhando as alterações feitas e explicando os motivos por trás delas.

## Contato

Se você tiver alguma dúvida ou sugestão relacionada ao projeto Hamburgueria E-commerce Backend, sinta-se à vontade para entrar em contato conosco através do email seu-email@example.com ou abrir uma issue neste repositório.

Obrigado por utilizar o Hamburgueria E-commerce Backend! Esperamos que você tenha uma ótima experiência de desenvolvimento e sucesso com seu projeto!
