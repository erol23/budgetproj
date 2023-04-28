export const budgetData = [
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "agust salary",
    currency: "Euro",
    typeofflow:"salary"
  },
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "mar salary",
    currency: "Euro",
    typeofflow:"salary"
  },
  {
    date: "26.04.2023",
    transactiontype: "Inflow",
    account: "garanti",
    amount: 2000,
    description: "may salary",
    currency: "Euro",
    typeofflow:"salary"
  },
];

export const bankAccount = [
  {
    id: 101,
    name: "ING",
    type: "money",
  },
  {
    id: 102,
    name: "Milenium",
    type: "money",
  },
  {
    id: 103,
    name: "Wise",
    type: "money",
  },
];

export const typeofflow = [
  {
    inflow: [
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
    ],
    outflow: [
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
    ],
  },
];
