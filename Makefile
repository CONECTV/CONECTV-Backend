.DEFAULT_GOAL := help

#BEFORE UP KILL PROCESS
# netstat -ano | findstr :3306
# taskkill /pid <PID> /F 
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
	@docker volume rm conectv-backend_mysql_data