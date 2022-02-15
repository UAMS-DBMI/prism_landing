.PHONY: run

last_update: Dockerfile
	docker build -t tcia/prism_landing .
	touch $@

push:
	docker push tcia/prism_landing

clean:
	rm last_update