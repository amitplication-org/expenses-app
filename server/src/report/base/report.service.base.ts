/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Report, Expense, Income, User } from "@prisma/client";

export class ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>
  ): Promise<number> {
    return this.prisma.report.count(args);
  }

  async findMany<T extends Prisma.ReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>
  ): Promise<Report[]> {
    return this.prisma.report.findMany(args);
  }
  async findOne<T extends Prisma.ReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>
  ): Promise<Report | null> {
    return this.prisma.report.findUnique(args);
  }
  async create<T extends Prisma.ReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportCreateArgs>
  ): Promise<Report> {
    return this.prisma.report.create<T>(args);
  }
  async update<T extends Prisma.ReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportUpdateArgs>
  ): Promise<Report> {
    return this.prisma.report.update<T>(args);
  }
  async delete<T extends Prisma.ReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportDeleteArgs>
  ): Promise<Report> {
    return this.prisma.report.delete(args);
  }

  async findExpense(
    parentId: string,
    args: Prisma.ExpenseFindManyArgs
  ): Promise<Expense[]> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .expense(args);
  }

  async findIncome(
    parentId: string,
    args: Prisma.IncomeFindManyArgs
  ): Promise<Income[]> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .income(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
