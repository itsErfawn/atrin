# 🛍️ Atrin Project

*A modern multi-vendor e-commerce platform with admin panel, automation system, and accounting logic.*

---

## 📁 Architecture

This project is fully built using the **MVC architecture pattern** in **Next.js App Router** with a clear separation of concerns:

```
src/
├── app/                  # Next.js pages (routes)
│   └── ...               # Route handlers (Controllers + UI binding)
├── components/           # View components (UI)
│   └── ...
├── controllers/          # Controllers (Business flow logic)
│   └── usersController.ts
├── models/               # Prisma-based Models (Data layer)
│   └── userModel.ts
├── lib/
│   └── db.ts             # Prisma client instance
└── prisma/
    └── schema.prisma     # Database schema (PostgreSQL)
```

> All data access logic lives in the `models`,
> business flow logic (e.g., form handlers) live in `controllers`,
> and UI is cleanly separated in `components`.

---

## 🧠 Features

* 🔐 Admin Panel with role-based access
* 🧾 Invoice and Quotation (Pre-invoice) generation
* 🛍️ Multi-vendor product listing and seller management
* 📊 Accounting-related logic
* 📨 Office automation workflows
* 🗃️ PostgreSQL database via Prisma ORM
* 🧩 Clean, maintainable, and scalable MVC codebase

---

## 🚀 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **ORM:** Prisma
* **Database:** PostgreSQL

---

## 📬 Contact

For any contributions, please open an issue or submit a PR.

> Made with ❤️ by [ErFaN](https://github.com/itsErfawn), [Mahdi](https://github.com/Mahdi-Devm)
