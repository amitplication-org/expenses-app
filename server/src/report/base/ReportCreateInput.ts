/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpenseCreateNestedManyWithoutReportsInput } from "./ExpenseCreateNestedManyWithoutReportsInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { IncomeCreateNestedManyWithoutReportsInput } from "./IncomeCreateNestedManyWithoutReportsInput";
import { EnumReportReportType } from "./EnumReportReportType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: false,
    type: () => ExpenseCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ExpenseCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  expense?: ExpenseCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => IncomeCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => IncomeCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => IncomeCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  income?: IncomeCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    enum: EnumReportReportType,
  })
  @IsEnum(EnumReportReportType)
  @IsOptional()
  @Field(() => EnumReportReportType, {
    nullable: true,
  })
  reportType?: "Expense" | "Income" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { ReportCreateInput };