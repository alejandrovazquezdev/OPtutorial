// Tutorial del cliente de Open Payments
// Objetivo: Realizar un pago entre pares entre dos direcciones de billetera (usando cuentas en la cuenta de prueba)

// https://ilp.interledger-test.dev/aledev - cliente
// https://ilp.interledger-test.dev/aliciadev - remitente
// https://ilp.interledger-test.dev/bobdev - receptor

// Configuración inicial
 import { createAuthenticatedClient } from "@interledger/open-payments";
 import fs from "fs";

// a. Importar dependencias y configurar el cliente
(async () => {
    const privateKey =fs.readFileSync("./private-key.pem", "utf8");
    const client = await createAuthenticatedClient({
        walletAddressUrl: "https://ilp.interledger-test.dev/aledev",
        privateKey: 'private.Key',
        kyedId: "30c571c4-3941-4221-8206-92eb2bedd81b",

    });


// b. Crear una instancia del cdliente Open Payments
// c. Cargar la clave privada del archivo
// d. Configurar las direcciones de las billeteras del remitente y el receptor
// Flujo de pago entre pares
// 1. Obtener una concesiÃ³n para un pago entrante)
// 2. Obtener una concesiÃ³n para un pago entrante
// 3. Crear un pago entrante para el receptor
// 4. Crear un concesiÃ³n para una cotizaciÃ³n
// 5. Obtener una cotizaciÃ³n para el remitente
// 6. Obtener una concesiÃ³n para un pago saliente
// 7. Continuar con la concesiÃ³n del pago saliente
// 8. Finalizar la concesiÃ³n del pago saliente
// 9. Continuar con la cotizaciÃ³n de pago sali
})();