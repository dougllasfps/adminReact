create table controle_acesso.modulo(
  id bigserial not null primary key ,
  descricao varchar(50),
  label varchar(10)
);

create table controle_acesso.permissao(
  id bigserial not null primary key ,
  descricao varchar(50),
  label varchar(10)
);

create table controle_acesso.modulo_permissao(
  id bigserial not null primary key ,
  cd_modulo bigint,
  cd_permissao bigint
);