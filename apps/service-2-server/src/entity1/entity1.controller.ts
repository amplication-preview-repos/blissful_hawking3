import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Entity1Service } from "./entity1.service";
import { Entity1ControllerBase } from "./base/entity1.controller.base";

@swagger.ApiTags("entity1s")
@common.Controller("entity1s")
export class Entity1Controller extends Entity1ControllerBase {
  constructor(protected readonly service: Entity1Service) {
    super(service);
  }
}
