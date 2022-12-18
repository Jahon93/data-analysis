import { Exclude } from 'class-transformer';
import {
  isNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ReportType } from 'src/data';

export class CreateRepoerDTO {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  source: string;
}

export class UpdateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  source: string;
}

export class ReportResponseDto {
  id: string;
  source: string;
  amount: string;
  created_at: string;

  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
