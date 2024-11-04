.PHONY: help, connect, start, stop, install
.DEFAULT_GOAL=help

help: ## Show help options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

connect: ## Enter in docker container
	docker exec -it php_container /bin/bash

start: ## Start dev server
	docker compose -p simulator up -d

stop: ## Stop dev server
	docker compose -p simulator down

install: ## Init application
	cp .env.example .env
	docker compose up -d --build
	docker exec -it php_container composer install
	docker exec -it php_container php artisan key:generate
	docker exec -it php_container php artisan storage:link
	docker exec -it php_container touch /var/www/html/database/database.sqlite
	docker exec -it php_container php artisan optimize
	docker exec -it php_container php artisan cache:clear
	docker exec -it node_container npm install
	docker exec -it node_container npm run dev
