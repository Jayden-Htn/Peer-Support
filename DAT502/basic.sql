-- basic mysql commands to create databases, tables, relationships, insert data and query data


-- create database
DROP DATABASE IF EXISTS `study_support`;
CREATE DATABASE IF NOT EXISTS `study_support`;
USE `study_support`;


-- create tables
CREATE TABLE IF NOT EXISTS `subject` (
	`subject_id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY (`subject_id`),
	UNIQUE KEY (`name`)
);

CREATE TABLE IF NOT EXISTS `students` (
	`student_id` int NOT NULL AUTO_INCREMENT,
	`first_name` varchar(50) NOT NULL,
	`last_name` varchar(50) NOT NULL,
	`fav_subject` int NOT NULL,
	PRIMARY KEY (`student_id`),
	UNIQUE KEY (`first_name`),
	-- constraint format: FK name, column to add constraint to, referenced table and column
	CONSTRAINT `FK_student_subject` FOREIGN KEY (`fav_subject`) REFERENCES `subject` (`subject_id`)
);


-- insert data
INSERT INTO `subject` (`subject_id`, `name`) VALUES 
	(1, 'DAT'), 
	(2, 'SYD');

INSERT INTO `students` (`student_id`, `first_name`, `last_name`, `fav_subject`) VALUES 
	(1, 'Sam', 'Foley', 1), 
	(2, 'Caleb', 'Eason', 2),
	(3, 'Jayden', 'Houghton', 1);

-- queries
SELECT * FROM `students`;
SELECT * FROM `subject`;

SELECT * 
FROM `students`
WHERE fav_subject = 1;

