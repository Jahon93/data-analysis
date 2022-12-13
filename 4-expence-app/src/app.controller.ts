import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from './data';

@Controller('report')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get all
  @Get()
  getAllReports() {
    return this.appService.getAllReports();
  }

  // Get by Type
  @Get(':type')
  getReportsByType(@Param('type') type: ReportType) {
    return this.appService.getReportsByType(type);
  }

  // Get by Type and ID
  @Get(':type/:id')
  getReportById(@Param('type') type: ReportType, @Param('id') id: string) {
    return this.appService.getReportById(type, id);
  }

  // Create a report
  @Post(':type')
  createReport(
    @Body() body: { amount: number; source: string },
    @Param('type') type: ReportType,
  ) {
    return this.appService.createReport(body, type);
  }

  // Update a report
  @Put(':type/:id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id') id: string,
    @Body()
    body: { amount: number; source: string },
  ) {
    return this.appService.updateReport(body, type, id);
  }

  @HttpCode(204) // return 204 http response
  @Delete(':type/:id')
  deleteReport(@Param('type') type: ReportType, @Param('id') id: string) {
    return this.appService.deleteReport(type, id);
  }
}
