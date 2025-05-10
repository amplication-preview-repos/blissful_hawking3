import * as graphql from "@nestjs/graphql";
import { Entity1ResolverBase } from "./base/entity1.resolver.base";
import { Entity1 } from "./base/Entity1";
import { Entity1Service } from "./entity1.service";

@graphql.Resolver(() => Entity1)
export class Entity1Resolver extends Entity1ResolverBase {
  constructor(protected readonly service: Entity1Service) {
    super(service);
  }
}
