# 📞 Call Reminder

> Sistema de recordatorios para gestionar y dar seguimiento a llamadas telefónicas

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-Prototipo-yellow?style=flat-square)](https://github.com/0rt4/call-reminder)

[🚧 En Desarrollo](https://github.com/0rt4/call-reminder/issues) | [Reportar Bug](https://github.com/0rt4/call-reminder/issues) | [Solicitar Feature](https://github.com/0rt4/call-reminder/issues)

---

## ⚠️ Estado del proyecto

> **Este proyecto está en fase de prototipo inicial.** Actualmente solo cuenta con el frontend funcional. Se encuentra en desarrollo activo y se están agregando nuevas funcionalidades regularmente.

---

## 🎯 Descripción

**Call Reminder** es una herramienta de gestión diseñada para ayudar a vendedores y profesionales a dar seguimiento efectivo a sus clientes mediante recordatorios de llamadas telefónicas. Simplifica el proceso de mantener contacto regular con clientes, organizar seguimientos y no olvidar ninguna llamada importante.

### 💡 Problema que resuelve

En ventas y atención al cliente, dar seguimiento es crucial. Este proyecto nace de la necesidad personal de:
- 📅 Recordar cuándo llamar a cada cliente
- 📝 Mantener notas sobre conversaciones previas
- 🏷️ Organizar contactos por categorías o etiquetas
- ✅ Registrar si contestaron y qué se acordó
- 🔄 Gestionar múltiples seguimientos simultáneamente

### ✨ Funcionalidades actuales (v0.1 - Prototipo)

- ✅ **Interfaz de usuario** - Diseño moderno y responsive
- ✅ **Gestión de contactos (frontend)** - Agregar y visualizar contactos
- ✅ **Sistema de recordatorios (UI)** - Interfaz para programar llamadas
- ✅ **Diseño responsive** - Funciona en móviles y desktop

## 🚀 Funcionalidades planeadas

### 📋 Fase 1 - Backend y persistencia (Próximamente)
- [ ] **Base de datos** - Integración con [Base de datos por definir]
- [ ] **API REST** - Endpoints para CRUD de contactos
- [ ] **Autenticación** - Sistema de login y registro
- [ ] **Persistencia de datos** - Guardar contactos y recordatorios

### 🔔 Fase 2 - Notificaciones (En roadmap)
- [ ] **Notificaciones del navegador** - Alertas en tiempo real
- [ ] **Notificaciones por WhatsApp** - Integración con WhatsApp Business API
- [ ] **Recordatorios programados** - Sistema de cron jobs

### 🏷️ Fase 3 - Organización avanzada (Futuro)
- [ ] **Sistema de etiquetas** - Categorizar contactos (Cliente, Prospecto, Urgente, etc.)
- [ ] **Filtros avanzados** - Buscar por etiquetas, fechas, estado
- [ ] **Notas y seguimiento** - Registrar:
  - Si contestaron la llamada
  - Qué se habló en la conversación
  - Próximos pasos acordados
  - Historial completo de interacciones

### 📊 Fase 4 - Analytics y reportes (Visión a largo plazo)
- [ ] **Dashboard de métricas** - Estadísticas de llamadas realizadas
- [ ] **Reportes de seguimiento** - Efectividad de contactos
- [ ] **Calendario integrado** - Vista de agenda con todos los recordatorios
- [ ] **Exportación de datos** - CSV/PDF de reportes

## 🛠️ Stack Tecnológico

### Frontend (Implementado)
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Fuentes:** [Geist Font Family](https://vercel.com/font)

### Backend (Por implementar)
- **Base de datos:** Por definir (MongoDB/PostgreSQL/Supabase)
- **Autenticación:** Por definir (NextAuth.js/Clerk)
- **Notificaciones:** Por definir (Web Push API/WhatsApp Business)
- **Deploy:** [Vercel](https://vercel.com/) (planeado)

## 📋 Requisitos previos

- **Node.js** 18.x o superior
- **npm**, **yarn**, **pnpm** o **bun**

## 🔧 Instalación y uso local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/0rt4/call-reminder.git
cd call-reminder
```

### 2️⃣ Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el prototipo.

### 4️⃣ Construir para producción

```bash
npm run build
npm start
```

> **Nota:** Actualmente los datos no persisten al recargar la página. La integración con base de datos está en desarrollo.

## 🗂️ Estructura del proyecto

```
call-reminder/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales + Tailwind
│   └── favicon.ico        # Favicon
├── components/            # Componentes React (frontend)
│   ├── ContactList.tsx    # Lista de contactos
│   ├── ReminderForm.tsx   # Formulario de recordatorios
│   └── ContactCard.tsx    # Tarjeta de contacto individual
├── lib/                   # Utilidades y tipos
│   ├── types.ts          # Tipos de TypeScript
│   └── utils.ts          # Funciones auxiliares
├── public/               # Archivos estáticos
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts
```

## 📖 Uso previsto (una vez completado)

### Flujo típico de uso:

1. **Agregar contacto**
   - Nombre, teléfono, empresa
   - Asignar etiquetas (Cliente, Prospecto, etc.)

2. **Programar recordatorio**
   - Fecha y hora de la llamada
   - Agregar nota con contexto

3. **Recibir notificación**
   - Por navegador o WhatsApp
   - 15 minutos antes de la llamada

4. **Realizar seguimiento**
   - Marcar si contestó o no
   - Agregar notas de la conversación
   - Programar próxima llamada si es necesario

## 🎯 Casos de uso principales

### Para vendedores
- 📈 Dar seguimiento a prospectos
- 🔄 Recordar follow-ups post-venta
- 📊 Mantener pipeline organizado

### Para atención al cliente
- 🤝 Seguimiento de casos abiertos
- 📞 Llamadas de satisfacción programadas
- ✅ Resolución de tickets pendientes

### Para freelancers
- 💼 Seguimiento a clientes potenciales
- 🔔 Recordar check-ins con clientes actuales
- 📅 Gestionar múltiples proyectos

## 🤝 Contribuciones

Este proyecto está en desarrollo activo y **acepta contribuciones**. Si quieres colaborar:

### Áreas donde puedes ayudar:
- 🗄️ Implementar integración con base de datos
- 🔔 Desarrollar sistema de notificaciones
- 🎨 Mejorar UI/UX
- 🧪 Agregar tests
- 📱 Mejorar responsividad
- 📚 Mejorar documentación

### Cómo contribuir:

1. **Fork** el proyecto
2. Crea una rama (`git checkout -b feature/NotificacionesWhatsApp`)
3. **Commit** tus cambios (`git commit -m 'feat: Agregar notificaciones de WhatsApp'`)
4. **Push** a la rama (`git push origin feature/NotificacionesWhatsApp`)
5. Abre un **Pull Request**

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Christopher Orta**

- 🐙 GitHub: [@0rt4](https://github.com/0rt4)
- 📧 Email: [Ortal.Christopher@outlook.com](#)

## 🙏 Motivación

Este proyecto surge de la necesidad personal de mejorar el seguimiento de llamadas y contactos. Es también un proyecto de aprendizaje para explorar:
- Arquitectura de aplicaciones full-stack
- Sistemas de notificaciones
- Gestión de estado en aplicaciones complejas
- Integración con APIs externas (WhatsApp)

## 📊 Estado del desarrollo

![GitHub last commit](https://img.shields.io/github/last-commit/0rt4/call-reminder?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/0rt4/call-reminder?style=flat-square)

### Progreso estimado:
- 🟩 Frontend: 60%
- 🟨 Backend: 0%
- 🟨 Base de datos: 0%
- 🟥 Notificaciones: 0%
- 🟥 Sistema de etiquetas: 0%

---

<div align="center">

⭐ **Si este proyecto te interesa, dale una estrella y síguelo para ver su evolución** ⭐

*Proyecto en desarrollo activo - Última actualización: Octubre 2025*

**[↑ Volver arriba](#-call-reminder)**

</div>
