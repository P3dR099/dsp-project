# 🧩 Prueba Técnica DSP — Gestión de Recibos

Este proyecto consiste en un **microservicio backend** en NestJS para la gestión de recibos de pago, y un **frontend** en React/Angular para visualizar y actualizar recibos.

---

## 📦 Estructura del proyecto

```
/backend
├── src/app/
│   ├── app.module.ts
│   ├── main.ts
│   ├── recibos/
│   │   ├── dto/crear-recibo.dto.ts
│   │   ├── recibos.controller.ts
│   │   ├── recibos.service.ts
│   │   └── recibos.module.ts
│   └── common/
│       └── filters/all-exceptions.filter.ts
├── package.json
└── README.md

/frontend
├── src/
├── package.json
└── README.md
```

---

## ⚙️ Backend (NestJS + MongoDB)

### 🔹 Descripción

Microservicio para gestionar recibos de pago. Incluye:

* Creación de recibos
* Listado de recibos con filtros por estado o cliente
* Cobro de recibos
* Validaciones con `class-validator`
* Manejo centralizado de errores con filtro global
* Documentación de API con Swagger (`/api/docs`)

### 🔹 Instalación

1. Instalar dependencias:

```bash
cd backend
npm install
```

2. Variables de entorno necesarias:

```env
MONGODB_URI=mongodb://localhost:27017/recibos
JWT_SECRET=mi_clave_secreta
PORT=3000
```

> Si deseas usar RabbitMQ (opcional):
>
> ```env
> AMQP_URL=amqp://localhost
> ```

3. Levantar el servidor:

```bash
npm run start:dev
```

4. Swagger UI disponible en:

```
http://localhost:3000/api/docs
```

### 🔹 Endpoints principales

| Método | Ruta                | Descripción                      |
| ------ | ------------------- | -------------------------------- |
| POST   | /recibos            | Crear un nuevo recibo            |
| GET    | /recibos            | Listar recibos (opcional filtro) |
| PATCH  | /recibos/:id/cobrar | Marcar un recibo como cobrado    |

> Todos los endpoints están protegidos con JWT (`@UseGuards(JwtAuthGuard)`).

---

## ⚙️ Frontend (React/Angular)

### 🔹 Descripción

Aplicación para visualizar y actualizar recibos:

* Listado en tabla con:

  * Cliente
  * Monto
  * Estado (badge o color)
  * Fecha de vencimiento
  * Botón “Cobrar” (solo si pendiente)
* Filtro visual por estado
* Llamadas a la API backend para crear, listar y cobrar recibos

### 🔹 Instalación

```bash
npm install
nx serve backend
```

## 💻 Tecnologías usadas

* Backend: **NestJS 10**, **Mongoose**, **class-validator**, **Swagger**
* Frontend: **Angular**
* Base de datos: **MongoDB**
* Autenticación: **JWT**
