import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';

interface Report {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  getAllReports() {
    return data.report;
  }

  getReportsByType(type: ReportType) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  getReportById(type: ReportType, id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (reportToUpdate) {
      return reportToUpdate;
    } else {
      return 'No value exists';
    }
  }

  createReport(body: Report, type: ReportType) {
    const newReport = {
      id: Math.floor(Math.random() * 10000).toString(),
      source: body.source,
      amount: body.amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }

  updateReport(body: Report, type: ReportType, id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };
    return data.report[reportIndex];
  }

  deleteReport(type: ReportType, id: string) {
    const reportToDelete = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (!reportIndex) return;
    data.report.splice(reportIndex, 1);
    return reportToDelete;
  }
}
