.DEFAULT_GOAL := help

.PHONY: up
up:
	@docker-compose up -d
	@docker-compose logs -f -t
.PHONY: stop
stop:
	@docker-compose stop
.PHONY: down
down:
	@docker-compose down --remove-orphans
.PHONY: install
install:
	@docker-compose -f docker-compose.yml exec conectv npm ci
.PHONY: rebuild
rebuild:
	@docker-compose down --remove-orphans
	@docker-compose build --no-cache