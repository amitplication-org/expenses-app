import { Module } from "@nestjs/common";
import { IncomeModuleBase } from "./base/income.module.base";
import { IncomeService } from "./income.service";
import { IncomeResolver } from "./income.resolver";

@Module({
  imports: [IncomeModuleBase],
  providers: [IncomeService, IncomeResolver],
  exports: [IncomeService],
})
export class IncomeModule {}
