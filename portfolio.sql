CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);


INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "website", "github", "date_completed", "tag_id") 
VALUES ( 'Gallery', 'Gallery of my life', 'https://warm-scrubland-53994.herokuapp.com/', 'https://github.com/phiathao/weekend-4-gallery', '12-2-2018', '1'), 
( 'koala hola', 'Our client, Koala Holla (1976 Llama Comma Drive, Walla Walla WA) is a non-profit dedicated to the ethical transitioning of koalas from the outdoors (whereupon they may be rained) to urban areas where roofs exist. Your team has been hired to build a web app to handle their terrarium residents', 'https://lit-atoll-41769.herokuapp.com/', '', '11/27/2018', '2'),
('Pizza Parlor', 'Our team have to try to build a pizza ordering system, the goal is to build a order by selection of pizza, entering customer information, and a checkout section with the given time to work together', 'https://calm-caverns-54076.herokuapp.com/#/', 'https://github.com/ryanmundy/redux-pizza-parlor', '12/8/2018', '1'), 
('Simple Calculator', 'One of the very first project we did, to create a calculator that can do simple math and to be able to connect to the server', 'https://tranquil-gorge-81495.herokuapp.com/', 'https://github.com/phiathao/weekendChallenge2', '11/18/2018', '2');

