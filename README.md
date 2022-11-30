<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://uploads-ssl.webflow.com/62163e8c328ad285342080f0/621642b049155333353ec220_logo.svg" width="400" alt="Laravel Logo"></a></p>
<hr>

## Apartado técnico

Este proyecto está elaborado usando las siguientes herramientas:
* Tecnologías
  * PHP version 8.1.13
  * node v16.18.1
  * npm version 9.1.2
  * mysql
  * [docker](https://docs.docker.com/get-docker/)
  * [docker compose](https://docs.docker.com/compose/install/)
* Marcos de trabajo
  * Framework Laravel [9.41.0](https://laravel.com/docs/9.x/installation)
  * Laravel [Braze & Vue](https://laravel.com/docs/9.x/starter-kits#laravel-breeze)
  * Laravel [sail](https://laravel.com/docs/9.x/sail)
  * Mysql

## Puesta en marcha

1. descargar este repositorio
   ```bash
    git clone git@github.com:miguelCasvas/konecta-interview.git
    ```
2. copia de archivo con variables de entorno .env.example » .env
   <br>para sistemas linux ``cp .env.example .env``

### Ejecución con docker

Se compone por dos contenedores uno que contiene el servicio MySql en donde está alojada la base de datos del sistema y
el contenedor principal en donde se aloja toda la codificación además del servidor para conexión a ambiente web y/o consola al proyecto

1. levantar contenedores docker 
   ```bash
    docker-compose build --no-cache
    docker-compose up -d
    ```
   **Nota:** una vez los contenedores estén activos el servicio:
   * mysql para acceso desde máquina local debe realizarse por el puerto 3307
   * web para acceso debe realizarse por el puerto 8085 ej. http://localhost:8085/dashboard
2. acceder al contenedor del proyecto para correr las migraciones y descargar dependencias
    ```bash
       # verificación de contenedores activos para ingresar por el nombre al contenedor del app
       docker ps
       
       # Acceder al contenedor por el nombre del contenedor
       docker exec -it  konecta-interview-laravel.test-1 bash
    ```

### Descargue de dependencias
**Nota:** SI los siguientes comandos se ejecutan fuera del contenedor docker del paso anterior el equipo debe contar con las herramientas mencionadas en el **apartado técnico » Tecnologías**
 
1. descarga de dependencias composer
    ```bash
        # Nota antes de correr este comando verificar conexión a BD
        composer install
    ```

2. ejecución de migraciones a base de datos o está la opción de cargar el respaldo ubicado en el archivo `./storage/konecta_user-2022_11_30_04_09_54-dump.sql`
    ```bash
        # Nota antes de correr este comando verificar conexión a BD
        php artisan migrate
    ```

3. creación de token de aplicativo en archivo de ambiente .env
    ```bash
        php artisan key:generate --ansi
    ```


## Módulos del proyecto

1. [Registro de usuario](http://www.localhost:8085/register)
2. [Inicio de sesión](http://www.localhost:8085/login)
3. [Dashboard](http://www.localhost:8085/dashboard) en donde se aprecian los puntos:
   * _Realizar una consulta que permita conocer cuál es el producto que más stock tiene._
   * _Realizar una consulta que permita conocer cuál es el producto más vendido._
4. [Administrador de Productos](http://www.localhost:8085/products)
5. [Módulo de ventas](http://www.localhost:8085/sales)
