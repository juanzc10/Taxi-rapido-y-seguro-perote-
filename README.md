# TaxiPerote · Taxi rápido y seguro (Perote, Veracruz)

Web app para pedir taxi por WhatsApp con tarifa estimada. Sin claves ni costo: mapa OpenStreetMap, rutas OSRM y búsqueda Photon.

## Archivos
- `index.html`: app principal (mapa, GPS, tarifa por km/minutos, pedido por WhatsApp).
- `central.html`: versión básica con tarifas fijas por destino.

## Configuración (en `index.html`)
- Precios: objeto `TARIFA` (banderazo, km, minuto, mínimo, recargo nocturno).
- Tarifas fijas por comunidad: `USAR_TARIFAS_FIJAS` y `TARIFAS_FIJAS`.
- Número de WhatsApp: `NUMERO_WHATSAPP`. Base del taxi: `BASE`.
- Destinos rápidos: arreglo `LUGARES`.

## Publicar
GitHub Pages: Settings › Pages › rama principal, carpeta raíz.
