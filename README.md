<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://uploads-ssl.webflow.com/62163e8c328ad285342080f0/621642b049155333353ec220_logo.svg" width="400" alt="Laravel Logo"></a></p>
<hr>

## Apartado técnico

Este proyecto está elaborado usando las siguientes herramientas:
* PHP versión 8.1.13
* Framework Laravel [9.41.0](https://laravel.com/docs/9.x/installation)
* Laravel [Braze & Vue](https://laravel.com/docs/9.x/starter-kits#laravel-breeze)
* Laravel [sail](https://laravel.com/docs/9.x/sail)
* Mysql

## Puesta en marcha

1. copia de archivo con variables de entorno .env.example » .env ``cp .env.example .env``

### Ejecución con docker

Se compone por dos contenedores uno que contiene el servicio MySql en donde está alojada la base de datos del sistema y
el contenedor principal en donde se aloja toda la codificación además del servidor para conexión a ambiente web y/o consola al proyecto

1.1 ejecución de bash proporcionado por el proyecto laravel sail para construcción y puestá en marcha de contenedores docker

```bash
./vendor/bin/sail up -d --build
```

1.2 paso opcional acceder al contenedor del proyecto para correr las migraciones y descargar dependencias
```bash
   # verificación de contenedores activos para ingresar por el nombre
   docker ps
   
   # Acceder al contenedor por el nombre en mi caso el nombre del contenedor corresponde a konecta-interview.test-1
   docker exec -it  konecta-interview.test-1 bash
```

1.3 descarga de dependencias composer

```bash
    # Nota antes de correr este comando verificar conexión a BD
    composer install
```

1.4 ejecución de migraciones a base de datos o está la opción de cargar el respaldo ubicado en el archivo `./storage/konecta_user-2022_11_30_04_09_54-dump.sql`

```bash
    # Nota antes de correr este comando verificar conexión a BD
    php artisan migrate
```

1.5 creación de token de aplicativo en archivo de ambiente .env

```bash
    # Nota antes de correr este comando verificar conexión a BD
    php artisan key:generate --ansi
```


## Módulos del proyecto

1. [Registro de usuario](http://www.localhost/register)
2. [Inicio de sesión](http://www.localhost/login)
3. [Dashboard](http://www.localhost/dashboard) en donde se aprecian los puntos:
   * _Realizar una consulta que permita conocer cuál es el producto que más stock tiene._
   * _Realizar una consulta que permita conocer cuál es el producto más vendido._
4. [Administrador de Productos](http://www.localhost/products)
5. [Módulo de ventas](http://www.localhost/sales)
