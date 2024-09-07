# <p align="center">Sales Date Prediction - WebApp - Angular </p>

## Descripción

This project was generated with [Angular CLI] version 18.2.1 for the development of the interface of the Sales Date Prediction project.

## Libraries used

> [!NOTE]
>
> - Angular 18.2
> - Bootstrap 5.3
> - ngx-toastr 19.0

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes elementos:

> - [Node js](https://nodejs.org/en/download/package-manager/current)
> - [CLI Angular](https://v17.angular.io/cli)

## Libraries used

> [!NOTE]
> Angular 18.2
> Bootstrap

## Clonación del Repositorio

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tatanlejo17/SalesDatePredictionApp.git
   ```

## Configuración del Proyecto

1. Instalar Dependencias:

> [!IMPORTANT]
> Ejecutar el siguiente comando en la raíz del proyecto, para restablecer librerías

    ```bash
    nom install
    ```

2. Configurar el archivo "enviroments.ts" con la url del Api Rest

   ```ts
   export const environments = {
     production: false,
     apiUrl: "http://localhost:5041/api",
   };
   ```

## Ejecución del Proyecto

1. Para iniciar el proyecto de Angular, usa el siguiente comando:

   ```bash
   ng serve
   ```

   Esto iniciará el servidor y podrás acceder a la aplicación en el navegador por la url http://localhost:4200
