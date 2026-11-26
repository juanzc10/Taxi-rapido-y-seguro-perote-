# TaxiPerote · Taxi rápido y seguro (Perote, Veracruz)

Web app para pedir taxi por WhatsApp con tarifa estimada. Sin claves ni costo: mapa OpenStreetMap, rutas OSRM y búsqueda Photon.

## Archivos
- `index.html`: app principal (mapa, GPS, tarifa por km/minutos, pedido por WhatsApp).
- `central.html`: panel de la central en tiempo real (pedidos, estados, taxista, total del día).
- `firebase-config.js`, `firebase-lib.js`, `firestore.rules`: conexión con Firebase.

## Configuración (en `index.html`)
- Precios: objeto `TARIFA` (banderazo, km, minuto, mínimo, recargo nocturno).
- Tarifas fijas por comunidad: `USAR_TARIFAS_FIJAS` y `TARIFAS_FIJAS`.
- Número de WhatsApp: `NUMERO_WHATSAPP`. Base del taxi: `BASE`.
- Destinos rápidos: arreglo `LUGARES`.

## Publicar
GitHub Pages: Settings › Pages › rama principal, carpeta raíz.

## Activar el panel de central (Firebase, plan gratis)
1. Crea un proyecto en https://console.firebase.google.com y una app **Web**; copia su configuración en `firebase-config.js`.
2. Build › **Firestore Database** › crear base de datos (modo producción).
3. Build › **Authentication** › Sign-in method › activa **Google**. La central entra con su cuenta de Google.
4. En `firestore.rules` pon los correos de la central en `esCentral()` y pega todo en Firestore › Reglas › Publicar.
5. Authentication › Settings › Authorized domains: agrega el dominio donde publiques la app (p. ej. `juanzc10.github.io`).
6. Abre `central.html`, entra con Google con ese correo y deja la pestaña abierta: cada pedido nuevo suena y aparece al instante.

Sin configurar Firebase, la app sigue funcionando: el pedido solo llega por WhatsApp.

## Instalar en el celular
Abre la página en Chrome/Safari › menú › "Agregar a pantalla de inicio". Abre a pantalla completa y carga más rápido (manifest + service worker).
