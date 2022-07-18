import { Module } from "@nestjs/common";
import { ExpenseModuleBase } from "./base/expense.module.base";
import { ExpenseService } from "./expense.service";
import { ExpenseResolver } from "./expense.resolver";

@Module({
  imports: [ExpenseModuleBase],
  providers: [ExpenseService, ExpenseResolver],
  exports: [ExpenseService],
})
export class ExpenseModule {}
