# Pago con tarjeta (Mercado Pago) vía Jelou.ia

La app envía por WhatsApp el pedido con una línea de pago que el bot puede leer:

- `💵 Pago: Efectivo` → el flujo no cobra, pasa a la central.
- `💳 Pago: TARJETA (Mercado Pago) - enviar botón de pago` → el flujo envía el cobro.
- `💰 Tarifa estimada: $45 MXN (...)` → de aquí se toma el monto.

## Flujo en Brain Studio

1. **Disparador:** mensaje entrante que contiene `Hola Central TaxiPerote`.
2. **Condición (contiene texto):** `💳 Pago: TARJETA` → rama tarjeta; si no, rama efectivo (avisar a la central).
3. **Extraer monto:** variable `monto` = número tras `Tarifa estimada: $` (regex `Tarifa estimada: \$(\d+)`). Si dice "por confirmar", pedir al taxista el monto antes de cobrar.
4. **Pedir correo** (Mercado Pago lo exige): guardar en `email_cliente`.
5. **Nodo Mercado Pago:**
   - Motivo de pago: `Viaje TaxiPerote`
   - Monto gravable: `{{monto}}` · Monto exento: `0` · Moneda: MXN
   - Correo del comprador: `{{email_cliente}}`
   - Credenciales: Producción
6. **Salidas:**
   - *successful* → "✅ Pago recibido, tu taxi va en camino" + aviso a la central.
   - *pending* → "Tu pago está en proceso, te avisamos".
   - *failed / error* → "No se pudo cobrar. ¿Pagas en efectivo?" y pasa a la central.
7. La tarifa es **estimada**: si el taxista confirma otro monto, reenviar el cobro con el monto final.

## Requisitos
- WhatsApp Business verificado (para el WebView de pago dentro del chat).
- El número que recibe pedidos (`NUMERO_WHATSAPP` en `index.html`) debe ser el del bot de Jelou.
