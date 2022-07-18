import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { IncomeResolverBase } from "./base/income.resolver.base";
import { Income } from "./base/Income";
import { IncomeService } from "./income.service";

@graphql.Resolver(() => Income)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class IncomeResolver extends IncomeResolverBase {
  constructor(
    protected readonly service: IncomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
