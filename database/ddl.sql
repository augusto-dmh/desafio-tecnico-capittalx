CREATE DATABASE desafio_tecnico;

CREATE TABLE IF NOT EXISTS users (
    id INT,
    email VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    created_at DATE,
    updated_at DATE
);

CREATE TABLE IF NOT EXISTS categories (
    id INT,
    name VARCHAR(255) NOT NULL,
    created_at DATE,
    updated_at DATE
);

CREATE TABLE IF NOT EXISTS products (
    id INT,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(6, 2) NOT NULL,
    description TEXT NOT NULL,
    category_id INT,
    image TEXT NOT NULL,
    created_at DATE,
    updated_at DATE
);

CREATE TABLE IF NOT EXISTS ratings (
    id INT,
    product_id INT NOT NULL,
    rate DECIMAL(2, 1) NOT NULL,
    count INT NOT NULL,
    created_at DATE,
    updated_at DATE
);

-- Constraints --
ALTER TABLE users
MODIFY id INT NOT NULL AUTO_INCREMENT,
ADD CONSTRAINT PRIMARY KEY (id),
ADD CONSTRAINT uk_user_email UNIQUE KEY (email);

ALTER TABLE categories
MODIFY id INT NOT NULL AUTO_INCREMENT,
ADD CONSTRAINT PRIMARY KEY (id),
ADD CONSTRAINT uk_category_name UNIQUE KEY (name);

ALTER TABLE products
MODIFY id INT NOT NULL AUTO_INCREMENT,
ADD CONSTRAINT PRIMARY KEY (id),
ADD CONSTRAINT fk_product_category_id FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ratings
MODIFY id INT NOT NULL AUTO_INCREMENT,
ADD CONSTRAINT PRIMARY KEY (id),
ADD CONSTRAINT fk_rating_product_id FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE;
