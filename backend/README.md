# backend-node-desafio-grupo-a
Backend feito em node para ser usado para desenvolver desafio do Grupo A

# script utilizado para criação do banco de dados MySQL
CREATE DATABASE IF NOT EXISTS db_desafio;

USE db_desafio;

CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    registroAcademico INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL,
    dataCadastro DATETIME NOT NULL,
    UNIQUE(registroAcademico)
);
