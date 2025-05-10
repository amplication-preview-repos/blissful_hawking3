import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Entity1ServiceBase } from "./base/entity1.service.base";

@Injectable()
export class Entity1Service extends Entity1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
