/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateIncomeArgs } from "./CreateIncomeArgs";
import { UpdateIncomeArgs } from "./UpdateIncomeArgs";
import { DeleteIncomeArgs } from "./DeleteIncomeArgs";
import { IncomeFindManyArgs } from "./IncomeFindManyArgs";
import { IncomeFindUniqueArgs } from "./IncomeFindUniqueArgs";
import { Income } from "./Income";
import { Report } from "../../report/base/Report";
import { IncomeService } from "../income.service";

@graphql.Resolver(() => Income)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IncomeResolverBase {
  constructor(
    protected readonly service: IncomeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "read",
    possession: "any",
  })
  async _incomesMeta(
    @graphql.Args() args: IncomeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Income])
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "read",
    possession: "any",
  })
  async incomes(@graphql.Args() args: IncomeFindManyArgs): Promise<Income[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Income, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "read",
    possession: "own",
  })
  async income(
    @graphql.Args() args: IncomeFindUniqueArgs
  ): Promise<Income | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Income)
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "create",
    possession: "any",
  })
  async createIncome(@graphql.Args() args: CreateIncomeArgs): Promise<Income> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        reports: args.data.reports
          ? {
              connect: args.data.reports,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Income)
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "update",
    possession: "any",
  })
  async updateIncome(
    @graphql.Args() args: UpdateIncomeArgs
  ): Promise<Income | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          reports: args.data.reports
            ? {
                connect: args.data.reports,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Income)
  @nestAccessControl.UseRoles({
    resource: "Income",
    action: "delete",
    possession: "any",
  })
  async deleteIncome(
    @graphql.Args() args: DeleteIncomeArgs
  ): Promise<Income | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Report, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async reports(@graphql.Parent() parent: Income): Promise<Report | null> {
    const result = await this.service.getReports(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
