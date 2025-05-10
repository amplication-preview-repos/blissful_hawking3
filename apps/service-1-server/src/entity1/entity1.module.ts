import { Module } from "@nestjs/common";
import { Entity1ModuleBase } from "./base/entity1.module.base";
import { Entity1Service } from "./entity1.service";
import { Entity1Controller } from "./entity1.controller";
import { Entity1Resolver } from "./entity1.resolver";

@Module({
  imports: [Entity1ModuleBase],
  controllers: [Entity1Controller],
  providers: [Entity1Service, Entity1Resolver],
  exports: [Entity1Service],
})
export class Entity1Module {}
