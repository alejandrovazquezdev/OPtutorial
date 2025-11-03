# Tutorial Open Payments - Pagos Peer-to-Peer

> **Nota importante:** Este repositorio no contiene credenciales sensibles. Sin tu `private.key` personal, nadie puede ejecutar transacciones reales.

Un tutorial completo para implementar pagos descentralizados usando **Open Payments** e **Interledger**. Aprende a crear un sistema de pagos moderno que conecta diferentes proveedores financieros sin intermediarios tradicionales.

## ¿Qué hace este proyecto?

- **Pagos directos** entre billeteras digitales
- **Sin intermediarios** costosos ni complejos
- **Interoperabilidad** entre diferentes bancos y proveedores
- **Microtransacciones** optimizadas para streaming y contenido
- **Seguridad** con firmas digitales y autorización granular

## Ejecución Rápida

### Prerrequisitos
- **Node.js 22** (gestionado automáticamente con mise)
- Una cuenta en [Interledger Testnet](https://ilp.interledger-test.dev)

### 1. Clonar e instalar
```bash
git clone https://github.com/alejandrovazquezdev/OPtutorial.git
cd OPtutorial
npm install
```

### 2. Configurar tus credenciales
Necesitas generar tu propia clave privada y registrarla en Interledger:

```bash
# El archivo private.key NO está en el repo por seguridad
# Genera la tuya en: https://ilp.interledger-test.dev
```

Luego edita `index.js` con tus datos:
```javascript
const client = await createAuthenticatedClient({
  walletAddressUrl: 'https://ilp.interledger-test.dev/TU_WALLET',
  privateKey: fs.readFileSync('private.key', 'utf-8'), // Tu clave privada
  keyId: 'TU_KEY_ID' // Tu ID de clave registrada
});
```

### 3. Ejecutar el tutorial
```bash
# Con mise (recomendado - gestiona Node.js automáticamente)
mise install
node index.js

# O con tu Node.js local
node index.js
```

## ¿Cómo funciona?

El tutorial implementa un **flujo completo de pago peer-to-peer**:

1. **Descubrimiento** - Obtiene información de las billeteras
2. **Autorización** - Solicita permisos para crear pagos
3. **Cotización** - Calcula costos exactos de la transacción  
4. **Consentimiento** - El usuario autoriza el pago interactivamente
5. **Ejecución** - Transfiere fondos de forma segura

## Nota de Seguridad

**¿Es seguro este código?** Sí, completamente.

- No hay claves privadas en el repositorio
- Solo código educativo y configuración pública  
- Cada persona necesita sus propias credenciales
- Sin `private.key` no se pueden ejecutar transacciones reales

El archivo `.gitignore` protege automáticamente cualquier clave privada:
```
private.key
*.pem
*.key
```

## Tecnologías Utilizadas

- **[Open Payments](https://openpayments.guide/)** - Estándar para APIs de pago
- **[Interledger](https://interledger.org/)** - Protocolo de pagos cross-network  
- **[mise](https://mise.jdx.dev/)** - Gestión de herramientas de desarrollo
- **Node.js 22** - Runtime JavaScript moderno

## Estructura del Proyecto

```
├── index.js          # Tutorial completo paso a paso
├── package.json       # Dependencias del proyecto  
├── .mise.toml        # Configuración de herramientas
├── .gitignore        # Protección de archivos sensibles
└── private.key       # TU archivo (no incluido)
```

## Progreso por Clases

- `clase-13` - Configuración inicial del entorno
- `clase-14` - Grants y wallet addresses
- `clase-15` - Incoming payments y quotes  
- `clase-16` - **Flujo completo funcional**