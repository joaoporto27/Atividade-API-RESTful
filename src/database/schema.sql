CREATE DATABASE herois;

\c herois

CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    photo TEXT
);

CREATE TABLE publisher (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    hero_id INTEGER REFERENCES heroes(id) ON DELETE CASCADE
);

INSERT INTO heroes (name, photo) VALUES 
    ('Homem Aranha', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESdem_zNbPgpWUYFqFQL2eox6zzkoAS-Lig&s'),
    ('Capitão América', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoZvI5g_FKV49A_sqMAQq9B9_6JRBiv3WAg&s'),
    ('Deadpool', 'https://www.deviante.com.br/wp-content/uploads/2016/02/deadpool-001.jpg'),
    ('Flash', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Gi98-KkqvY1GrCV6PBHFXLEvpQt-CUaXog&s'),
    ('Batman', 'https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_promo-2048x1152-ed2be22b3f24f446534b90b122ed560d.jpg'),
    ('Aquaman', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrxUrmVdvvsIqUMp24u9EwlhBm4YqtpvStw&s');

INSERT INTO publisher (name, image, hero_id) VALUES
    ('Marvel', 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/03/14122530/marvel.jpg?fit=2560%2C1440&ssl=1', 1),
    ('Marvel', 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/03/14122530/marvel.jpg?fit=2560%2C1440&ssl=1', 2),
    ('Marvel', 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/03/14122530/marvel.jpg?fit=2560%2C1440&ssl=1', 3),
    ('Dc', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg', 4),
    ('DC', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg', 5),
    ('DC', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg', 6);

    