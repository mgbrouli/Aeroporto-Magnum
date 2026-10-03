CREATE TABLE `aircrafts` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`model` text NOT NULL,
	`autonomy` integer NOT NULL,
	`qtd_assentos` integer NOT NULL,
	`in_use` integer
);
