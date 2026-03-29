USE NestRoom;

CREATE Table guestsRole (
    id int AUTO_INCREMENT PRIMARY key NOT null,
    name VARCHAR(100) not null
);

CREATE Table guests (
    id int AUTO_INCREMENT PRIMARY key NOT null,
    fi VARCHAR(200) not null,
    DATE_of_birth DATE not null,
    gender VARCHAR(10) not null,
    citizenship VARCHAR(50) not null,
    passport int not null,
    phone BIGINT not null,
    roleId int NOT null,

    Foreign Key (roleId) REFERENCES guestsRole(id)
);

INSERT into `guestsRole` (name) VALUE ("user")
