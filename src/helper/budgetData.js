import ING from "../asset/ing-logo.png";
import Millenium from "../asset/millenium-logo.png";
import Wise from "../asset/wise-logo.png";
import Akbank from "../asset/akbank-logo.png";
import IsBank from "../asset/ısbank-logo.png";
import Ziraat from "../asset/ziraat-logo.png";

export const budgetData = [
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "agust salary",
    currency: "Euro",
    typeofflow: "salary",
  },
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "mar salary",
    currency: "Euro",
    typeofflow: "salary",
  },
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "may salary",
    currency: "Euro",
    typeofflow: "salary",
  },
];

export const bankAccount = [
  {
    id: 101,
    name: "ING-Euro",
    type: "money",
    img: ING,
  },
  {
    id: 102,
    name: "Millenium-Euro",
    type: "money",
    img: Millenium,
  },
  {
    id: 103,
    name: "Millenium-Zloti",
    type: "money",
    img: Millenium,
  },
  {
    id: 104,
    name: "Millenium-Dolar",
    type: "money",
    img: Millenium,
  },
  {
    id: 105,
    name: "Wise",
    type: "money",
    img: Wise,
  },
];

export const Banks = [
  {
    id: 101,
    name: "ING",
    type: "money",
    img: ING,
  },
  {
    id: 102,
    name: "Millenium",
    type: "money",
    img: Millenium,
  },
  {
    id: 103,
    name: "Wise",
    type: "money",
    img: Wise,
  },
  {
    id: 104,
    name: "Akbank",
    type: "money",
    img: Akbank,
  },
  {
    id: 105,
    name: "Ziraat",
    type: "money",
    img: Ziraat,
  },
  {
    id: 106,
    name: "İş Bankası",
    type: "money",
    img: IsBank,
  },
]

export const inflow = [
  {
    id: 201,
    name: "salary",
    type: "inflow",
  },
  {
    id: 202,
    name: "income",
    type: "inflow",
  },
];

export const outflow = [
  {
    id: 301,
    name: "rent",
    type: "outflow",
  },
  {
    id: 302,
    name: "market",
    type: "outflow",
  },
];
