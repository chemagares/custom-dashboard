import { Table } from "../Table/Table"
import { WidgetWrapper } from "../WidgetWrapper/WidgetWrapper"

export const GlobalMarkets = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          header: [
            { value: "Índice" },
            { value: "Último" },
            { value: "Cambio" },
            { value: "%" },
          ],
          title: "Mercados Globales",
          rows: [
            [
              { value: "Dow Jones" },
              { value: "34,500" },
              { value: "+120" },
              { value: "+0.35%" },
            ],
            [
              { value: "S&P 500" },
              { value: "4,500" },
              { value: "+15" },
              { value: "+0.33%" },
            ],
            [
              { value: "NASDAQ" },
              { value: "13,800" },
              { value: "-50" },
              { value: "-0.36%" },
            ],
            [
              { value: "FTSE 100" },
              { value: "7,100" },
              { value: "+20" },
              { value: "+0.28%" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const Currencies = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          title: "Currencies",
          header: [
            { value: "Par" },
            { value: "Último" },
            { value: "Cambio" },
            { value: "%" },
          ],
          rows: [
            [
              { value: "EUR/USD" },
              { value: "1.1020" },
              { value: "+0.0012" },
              { value: "+0.11%" },
            ],
            [
              { value: "USD/JPY" },
              { value: "146.50" },
              { value: "-0.25" },
              { value: "-0.17%" },
            ],
            [
              { value: "GBP/USD" },
              { value: "1.2850" },
              { value: "+0.0008" },
              { value: "+0.06%" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const TopGainers = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          title: "Top Gainers",
          header: [
            { value: "Acción" },
            { value: "Último" },
            { value: "Cambio" },
            { value: "%" },
          ],
          rows: [
            [
              { value: "AAPL" },
              { value: "172.50" },
              { value: "+3.50" },
              { value: "+2.07%" },
            ],
            [
              { value: "TSLA" },
              { value: "720.00" },
              { value: "+15.00" },
              { value: "+2.13%" },
            ],
            [
              { value: "AMZN" },
              { value: "3,250" },
              { value: "+50" },
              { value: "+1.56%" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const ExampleWidget4 = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      Hello I'm example widget 4
    </WidgetWrapper>
  )
}
