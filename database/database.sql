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

create table controle_acesso.grupo(
  id bigserial not null primary key ,
  label varchar(20) ,
  descricao varchar (30),
  nivel integer,
  cd_modulo bigint
);

create table controle_acesso.grupo_permissao(
  id bigserial not null primary key ,
  cd_grupo bigint not null,
  cd_permissao bigint not null
);

create table controle_acesso.usuario(
  id bigserial not null primary key ,
  login varchar(20),
  senha varchar (200),
  nome varchar (100),
  email varchar (100),
  hash_recupera_senha varchar (200)
);

create table controle_acesso.usuario_grupo (
  id bigserial not null primary key ,
  cd_grupo bigint,
  cd_usuario bigint
);

alter table controle_acesso.usuario_grupo
add constraint fk_usuario_grupo_grupo
foreign key (cd_grupo)
references controle_acesso.grupo (id);

alter table controle_acesso.usuario_grupo
add constraint fk_usuario_grupo_usuario
foreign key (cd_usuario)
references controle_acesso.usuario (id);

alter table controle_acesso.modulo_permissao
add constraint fk_modulo_perm_permissao
foreign key (cd_permissao)
references controle_acesso.permissao (id);

alter table controle_acesso.modulo_permissao
add constraint fk_modulo_perm_modulo
foreign key (cd_modulo)
references controle_acesso.modulo (id);

alter table controle_acesso.grupo
add constraint fk_grupo_modulo
foreign key (cd_modulo)
references controle_acesso.modulo (id);

alter table controle_acesso.grupo_permissao
add constraint fk_grupo_permissao_grupo
foreign key (cd_grupo)
references controle_acesso.grupo (id);

alter table controle_acesso.grupo_permissao
add constraint fk_grupo_permissao_permissao
foreign key (cd_permissao)
references controle_acesso.permissao (id);
