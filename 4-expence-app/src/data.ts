export enum ReportType {
  EXPENSE = 'expense',
  INCOME = 'income',
}

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 3000,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid2',
      source: 'Freelancing',
      amount: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
  ],
};
