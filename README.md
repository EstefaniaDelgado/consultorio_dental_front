# 🦷 Aplicación Frontend – Consultorio Odontológico

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Material Tailwind](https://img.shields.io/badge/Material--Tailwind-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Estado del proyecto](https://img.shields.io/badge/Estado-Terminado-brightgreen?style=for-the-badge)
![Autor](https://img.shields.io/badge/Autor-Estefanía%20Delgado-blueviolet?style=for-the-badge)
 <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white" />

---

## 🧾 Descripción

Este es el **frontend** de una aplicación para la gestión de un consultorio odontológico. Permite registrar y administrar la información de pacientes, odontólogos y turnos. La interfaz es dinámica, intuitiva y desarrollada con **React**, **TypeScript** y **Material Tailwind** para ofrecer una experiencia moderna y responsiva.

---

## ✨ Funcionalidades principales

- 👨‍⚕️ Registro, listado y edición de **odontólogos**
- 🧑‍💼 Registro, listado y edición de **pacientes**
- 📅 Agendamiento de **turnos** (consultas)
- 🔍 **Búsqueda filtrada** de pacientes y odontólogos
- ✅ Confirmaciones visuales al registrar correctamente
- 📷 Subida y almacenamiento de imágenes con Cloudinary
- 🔄 Paginación de turnos y carga condicional con spinner
- 🌞🌜 Modo Oscuro/Claro

---

## 🛠️ Tecnologías utilizadas

- ⚛️ **React** 
- 🟦 **Javascript** 
- 🎨 **Tailwind CSS + Material Tailwind** – Estilos responsivos y modernos
- 📡 **Fetch API** – Consumo del backend con Java + Spring Boot para CRUD
- 🧩 Arquitectura modular y organizada
  
---

## 🌐 Despliegue
La aplicación está desplegada en:

👉 https://consultorio-dental-front.vercel.app/

---

## 🚀 Instalación local

1. Clona el repositorio:

```bash
git clone https://github.com/EstefaniaDelgado/consultorio_dental_front.git
cd consultorio-odontologico-front
npm i
npm run dev
```

2. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega tus claves:

```bash
VITE_APP_API_URL=URL_LOCALHOST
VITE_APP_URL_DEPLOYMENT=URL_DEL_DEPLOY
VITE_UPLOAD_PRESENT=UPLOAD_PRESENT
VITE_CLOUD_NAME=CLOUD_NAME
```

3. Inicia el servidor de desarrollo:
   
 ```bash
npm run dev
```

4. Abre tu navegador en http://localhost:5173

---

## 🔗 Repositorio Backend
Consulta el backend aquí:
➡️ [Dental-Care-Backend](https://github.com/EstefaniaDelgado/consultorioDental)
