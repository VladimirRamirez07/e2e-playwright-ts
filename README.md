# E2E Web Testing con Playwright + TypeScript

![Playwright Tests](https://github.com/VladimirRamirez07/e2e-playwright-ts/actions/workflows/playwright.yml/badge.svg)

Automatización end-to-end de un e-commerce real (Sauce Demo) usando Playwright y TypeScript con el patrón Page Object Model.

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) — Framework de automatización E2E
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- [GitHub Actions](https://github.com/features/actions) — CI/CD pipeline

## 📁 Estructura del proyecto
tests/
├── pages/              # Page Object Model
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── data/
│   └── users.ts        # Datos de prueba
├── login.spec.ts        # Tests de autenticación
└── checkout.spec.ts     # Tests de flujo de compra
## 🧪 Casos de prueba

### Login
- ✅ Login exitoso con usuario válido
- ✅ Error con usuario bloqueado
- ✅ Error con credenciales inválidas

### Flujo de compra
- ✅ Compra exitosa de un producto end-to-end

## 🚀 Correr los tests localmente

```bash
# Instalar dependencias
npm install
npx playwright install

# Correr todos los tests
npx playwright test

# Solo en Chromium
npx playwright test --project=chromium

# Ver reporte HTML
npx playwright show-report
```

## 🌐 Aplicación bajo prueba

[Sauce Demo](https://www.saucedemo.com) — E-commerce de práctica para QA