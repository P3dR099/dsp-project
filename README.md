# 🧩 Prueba Técnica DSP — Gestión de Recibos

Este proyecto consiste en un **microservicio backend** en NestJS para la gestión de recibos de pago, y un **frontend** en Angular para visualizar y actualizar recibos.

Usuario hardcodeado para iniciar sesión en la app:

user:
```bash
admin
``` 
password: 
```bash
123456
```
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
├── src/app/
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   ├── auth/
│   │   └── auth.service.ts
│   ├── recibos/
│   │   ├── services/
│   │   │   └── recibos.service.ts
│   │   ├── recibos.component.ts
│   │   ├── recibos.component.html
│   │   └── recibos.component.css
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

1. Instalar dependencias para backend y frontend:

```bash
npm install
```

2. Variables de entorno necesarias:

```env
MONGODB_URI=mongodb://localhost:27017/recibos
JWT_SECRET=mi_clave_secreta
PORT=3000
```

3. Levantar el backend:

```bash
nx serve backend
```

4. Levantar el frontend:

```bash
nx serve frontend
```

5. Swagger UI disponible en el backend:

```
http://localhost:3000/api/docs
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
* Login

### 🔹 Endpoints principales

| Método | Ruta                | Descripción                      |
| ------ | ------------------- | -------------------------------- |
| POST   | /recibos            | Crear un nuevo recibo            |
| GET    | /recibos            | Listar recibos |
| PATCH  | /recibos/:id/cobrar | Marcar un recibo como cobrado    |

> Todos los endpoints están protegidos con JWT (`@UseGuards(JwtAuthGuard)`).

### 🔹 Ejemplo de JSON de recibo

```json
{
  "cliente": "Juan Pérez",
  "monto": 1500,
  "fechaVencimiento": "2025-12-31T00:00:00.000Z",
  "estado": "pendiente"
}
```

---

## ⚙️ Frontend (Angular)

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

* UI basada en Bootstrap

---

## 💻 Tecnologías usadas

* Backend: **NestJS 10**, **Mongoose**, **class-validator**, **Swagger**
* Frontend: **Angular**
* Base de datos: **MongoDB**
* Autenticación: **JWT**

---
