include .env

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down --remove-orphans

.PHONY: create-kafka-consumer-topic
create-kafka-consumer-topic:
	docker exec ignite-lab-kafka-consumer kafka-topics.sh --bootstrap-server kafka:9092	--create --if-not-exists --topic notifications.send-notification

.PHONY: list-kafka-consumer.topic
list-kafka-consumer-topic:
	docker exec ignite-lab-kafka-consumer kafka-topics.sh --bootstrap-server kafka:9092 --list notifications.send-notification

.PHONY: restart-kafka-zookeeper
restart-kafka-zookeeper:
	docker restart ignite-lab-kafka-zookeeper

.PHONY: restart-kafka-consumer
restart-kafka-consumer:
	docker restart ignite-lab-kafka-consumer

.PHONY: restart-database
restart-database:
	docker restart ignite-lab-database

.PHONY: start-kafka-zookeeper
start-kafka-zookeeper:
	docker start ignite-lab-kafka-zookeeper

.PHONY: start-kafka-consumer
start-kafka-consumer:
	docker start ignite-lab-kafka-consumer

.PHONY: start-database
start-database:
	docker start ignite-lab-database

.PHONY: stop-kafka-zookeeper
stop-kafka-zookeeper:
	docker stop ignite-lab-kafka-zookeeper

.PHONY: stop-kafka-consumer
stop-kafka-consumer:
	docker stop ignite-lab-kafka-consumer

.PHONY: stop-database
stop-database:
	docker stop ignite-lab-database

.PHONY: logs-kafka-zookeeper
logs-kafka-zookeeper:
	docker logs -f ignite-lab-kafka-zookeeper

.PHONY: logs-kafka-consumer
logs-kafka-consumer:
	docker logs -f ignite-lab-kafka-consumer

.PHONY: logs-database
logs-database:
	docker logs -f ignite-lab-database

.PHONY: list-containers
list-containers:
	docker ps
