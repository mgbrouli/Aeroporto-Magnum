CREATE TABLE `employees` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`email` text NOT NULL UNIQUE,
	`age` integer NOT NULL,
	`role` text NOT NULL
);
