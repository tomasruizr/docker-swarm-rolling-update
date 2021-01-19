# Hacer Rolling update de docker swarm

### Pasos para levantar el swarm
Ir al server que va a correr el swarm y ejecutar
```
docker swarm init
```

Levantar el stack a partir del docker-compose
```
docker stack deploy -c docker-compose.yaml <NOMBRE DEL STACK (cualquiera)>
```

Para hacer logs de un service
```
docker service logs <NOMBRE DEL SERVICIO>
```

Para hacer el update de la imagen
```
docker service update --image docker-rolling-update:bla <NOMBRE DEL SERVICIO>
```

Para hacer el rollback
```
docker service rollback <NOMBRE DEL SERVICIO>
```

Detener el stack
```
docker stack rm <NOMBRE DEL STACK (cualquiera)>
```


