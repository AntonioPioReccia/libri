drop table if exists autori;
create table autori (
    id integer primary key,
    cognome text not null,
    nome text
        );

insert into autori (cognome) values ("dante");
insert into autori (cognome, nome) values ("pascoli", "giovanni");

.header on
.mode column 
select * from autori;


drop table if exists libri;
create table libri (
    id integer primary key,
    titolo text not null,
    fk_autore integer not null
        );
  
  insert into libri (titolo, fk_autore) values ("divina commedia",1);
insert into libri (titolo, fk_autore) values ("ciaociao", 2);

select * from libri;