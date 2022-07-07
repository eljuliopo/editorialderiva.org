/** @jsx jsx */
import { jsx, Themed, Flex } from "theme-ui"
import React from "react"

export default function TransactionDetails(props) {
  const dateString = props.transaction_date
    ? new Date(props.transaction_date).toLocaleDateString("es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null
  return (
    <React.Fragment>
      {props ? <Themed.h4 sx={{ mt: 0, textAlign: "center" }}>Detalles de la transacción</Themed.h4> : null}
      {[
        props.buy_order ? { key: "Número de orden", value: props.buy_order } : null,
        props.amount ? { key: "Monto", value: "CLP$" + props.amount } : null,
        props.authorization_code ? { key: "Código de autorización", value: props.authorization_code } : null,
        dateString ? { key: "Fecha", value: dateString } : null,
        props.payment_type_code ? { key: "Tipo de pago", value: payment_type_codes[props.payment_type_code] } : null,
        // Tipo de cuota
        props.installments_number ? { key: "Cantidad de cuotas", value: props.installments_number } : null,
        props.installments_amount ? { key: "Monto de cuota", value: "CLP$" + props.installments_amount } : null,
        props.card_detail?.card_number ? { key: "Tarjeta bancaria terminada en", value: "***" + props.card_detail?.card_number } : null,
        props.product ? { key: "Detalle", value: props.product } : null,
      ]
        .filter(el => el)
        .map(({ key, value }) => (
          <Flex key={key} sx={{ justifyContent: "space-between" }}>
            <Themed.p sx={{ fontSize: 1, my: 1 }}>{key}</Themed.p>
            <Themed.p sx={{ fontSize: 1, my: 1 }}>
              <strong>{value}</strong>
            </Themed.p>
          </Flex>
        ))}
    </React.Fragment>
  )
}

const payment_type_codes = {
  VD: "Venta Débito",
  VN: "Venta Normal",
  VC: "Venta en cuotas",
  SI: "3 cuotas sin interés",
  S2: "2 cuotas sin interés",
  NC: "N Cuotas sin interés",
  VP: "Venta Prepago",
}
