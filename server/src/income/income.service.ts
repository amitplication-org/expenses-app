import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { IncomeServiceBase } from "./base/income.service.base";

@Injectable()
export class IncomeService extends IncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
