/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { IncomeWhereUniqueInput } from "../../income/base/IncomeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class IncomeUpdateManyWithoutReportsInput {
  @Field(() => [IncomeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IncomeWhereUniqueInput],
  })
  connect?: Array<IncomeWhereUniqueInput>;

  @Field(() => [IncomeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IncomeWhereUniqueInput],
  })
  disconnect?: Array<IncomeWhereUniqueInput>;

  @Field(() => [IncomeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IncomeWhereUniqueInput],
  })
  set?: Array<IncomeWhereUniqueInput>;
}
export { IncomeUpdateManyWithoutReportsInput };
