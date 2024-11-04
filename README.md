## Installation

```shell
git clone https://github.com/abourtnik/simulator.git
cd simulator
make install
```

Then go to `http://localhost:8080`

## After installation

```shell
make start
make stop
```

## Connect to container

```shell
docker exec -it php_container /bin/bash
docker exec -it node_container /bin/bash
```
