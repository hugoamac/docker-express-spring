-- MySQL Workbench Synchronization
-- Generated: 2019-04-18 02:46
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: hugo machado

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `itauapp` DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE IF NOT EXISTS `itauapp`.`tags` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `tag_UNIQUE` (`tag` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `itauapp`.`users` (
  `id` BIGINT(19) UNSIGNED NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `screen_name` VARCHAR(200) NOT NULL,
  `location` VARCHAR(200) NOT NULL,
  `followers_count` INT(11) NOT NULL DEFAULT 0,
  `lang` VARCHAR(45) NOT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `profile_image_url` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `itauapp`.`tweets` (
  `id` BIGINT(19) UNSIGNED NOT NULL,
  `text` MEDIUMTEXT NOT NULL,
  `tags_id` INT(10) UNSIGNED NOT NULL,
  `users_id` BIGINT(19) UNSIGNED NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tweets_tags_idx` (`tags_id` ASC),
  INDEX `fk_tweets_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_tweets_tags`
    FOREIGN KEY (`tags_id`)
    REFERENCES `itauapp`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tweets_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `itauapp`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

USE `itauapp`;

INSERT INTO tags (tag) values ('openbanking');
INSERT INTO tags (tag) values ('apifirst');
INSERT INTO tags (tag) values ('devops');
INSERT INTO tags (tag) values ('cloudfirst');
INSERT INTO tags (tag) values ('microservices');
INSERT INTO tags (tag) values ('apigateway');
INSERT INTO tags (tag) values ('oauth');
INSERT INTO tags (tag) values ('swagger');
INSERT INTO tags (tag) values ('raml');
INSERT INTO tags (tag) values ('openapis');
