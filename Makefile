default: build

build:
	docker build -t tcia/prism_landing .

push:
	docker push tcia/prism_landing
