-- CREATE DATABASE WITH NAME: in-vino-veritas

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Creates wine table in database
CREATE TABLE "wine" (
	"id" SERIAL PRIMARY KEY,
	"vineyard" VARCHAR (255) NOT NULL,
	"vintage" INTEGER NOT NULL,
	"grape_id" INTEGER NOT NULL REFERENCES "grape",
	"price" INTEGER,
	"place_bought" VARCHAR (255),
	"notes" VARCHAR (255),
	"rating" INTEGER,
	"user_id" INTEGER NOT NULL REFERENCES "user"
);

-- Creates grape table in database
CREATE TABLE "grape" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50)
);

-- Populates grape table in database
INSERT INTO "grape" ("name") VALUES 
	('Cabernet Sauvignon'),
	('Merlot'),
	('Pinot Noir'),
	('Syrah'),
	('Malbec'),
	('Zinfandel'),
	('Chardonnay'),
	('Riesling'),
	('Pinot Grigio'),
	('Sauvignon Blanc'),
	('Chenin Blanc'),
	('Moscato');
	
	