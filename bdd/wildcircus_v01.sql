drop database if exists wildcircus; 
CREATE DATABASE `wildcircus`;
USE `wildcircus`;

CREATE TABLE `contact`(
  `contactID` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `message` TEXT,
  PRIMARY KEY (`contactID`) 
);