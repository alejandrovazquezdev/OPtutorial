// Tutorial del cliente de Open Payments
// Objetivo: Realizar un pago entre pares entre dos direcciones de billetera (usando cuentas en la cuenta de prueba)

// https://ilp.interledger-test.dev/aledev - cliente
// https://ilp.interledger-test.dev/aliciadev - remitente
// https://ilp.interledger-test.dev/bobdev - receptor

// Configuración inicial
 import { createAuthenticatedClient, isFinalizedGrant } from "@interledger/open-payments";
 import fs from "fs";
import { finalization } from "process";

// a. Importar dependencias y configurar el cliente
const privateKey = fs.readFileSync('private.key', 'utf-8')

// Instanciar el cliente autenticado
const client = await createAuthenticatedClient({
  walletAddressUrl: 'https://ilp.interledger-test.dev/aledev',
  privateKey: 'private.Key',
  keyId: '30c571c4-3941-4221-8206-92eb2bedd81b'
});

// b. Crear una instancia del cliente Open Payments
// c. Cargar la clave privada del archivo
// d. Configurar las direcciones de las billeteras del remitente y el receptor
// Flujo de pago entre pares

// 1. Obtener una concesiÃ³n para un pago entrante)
  const sendingWalletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/aliciadev", // Make sure the wallet address starts with https:// (not $)
  });
  const receivingWalletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/bobdev", // Make sure the wallet address starts with https:// (not $)
  });

  console.log(sendingWalletAddress, receivingWalletAddress);

// 2. Obtener una concesion para un pago entrante
  const incomingPaymentGrant = await client.grant.request(
    {
      url: receivingWalletAddress.authServer,
    },
    {
      access_token: {
        access: [
          {
            type: "incoming-payment",
            actions: ["read", "complete", "create"],
          },
        ],
      },
    }
  );


    if (!isFinalizedGrant(incomingPaymentGrant)) {
        throw new Error("se espera que finalize la consesion");
  }

  console.log(incomingPaymentGrant);

// 3. Crear un pago entrante para el receptor
 const incomingPayment = await client.incomingPayment.create(
    {
      url: receivingWalletAddress.resourceServer,
      accessToken: incomingPaymentGrant.access_token.value,
    },
    {
      walletAddress: receivingWalletAddress.id,
      incomingAmount: {
        assetCode: receivingWalletAddress.assetCode,
        assetScale: receivingWalletAddress.assetScale,
        value: "1000", //aqui son 10 dolares
      },
    }
  );

  console.log(incomingPayment);


// 4. Crear un concesión para una cotización

  const quoteGrant = await client.grant.request(
    {
      url: sendingWalletAddress.authServer,
    },
    {
      access_token: {
        access: [
          {
            type: "quote",
            actions: ["create", "read"],
          },
        ],
      },
    }
  );
  if(!isFinalizedGrant(quoteGrant)){
    throw new Error("Se espera finalice la concesion");
  }

    console.log(quoteGrant);
  


// 5. Obtener una cotización para el remitente

// 6. Obtener una concesión para un pago saliente

// 7. Continuar con la concesión del pago saliente

// 8. Finalizar la concesión del pago saliente

// 9. Continuar con la cotización de pago saliente