#!/usr/bin/make

include .env

## ----- Make Environment -----
COMPOSE_CONFIG=--env-file .env -p $(PROJECT_NAME) -f docker/docker-compose.$(MODE).yml

## -------- Actions -----------
up: ## Start all containers
	docker compose $(COMPOSE_CONFIG) up -d

down: ## Stop all containers
	docker compose $(COMPOSE_CONFIG) down

restart: down up ## Restart all containers
	#docker compose $(COMPOSE_CONFIG) restart

install: ## Install all dependencies
	docker compose $(COMPOSE_CONFIG) run --rm fanscrm-server npm ci

init: install up ## Make full application initialization

help: ## Show help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[92m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
