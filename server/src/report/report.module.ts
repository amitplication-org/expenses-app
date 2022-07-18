import { Module } from "@nestjs/common";
import { ReportModuleBase } from "./base/report.module.base";
import { ReportService } from "./report.service";
import { ReportResolver } from "./report.resolver";

@Module({
  imports: [ReportModuleBase],
  providers: [ReportService, ReportResolver],
  exports: [ReportService],
})
export class ReportModule {}
