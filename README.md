## Comando para inicializar el contenedor de docker
docker run -d -p 27017:27017 --name mongo-local -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -v C:\docker-data\mongo:/data/db mongo