import { EventPattern, Payload } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { RedisMessage } from "./redisMessage";

@Controller("redis-controller")
export class RedisController {
  @EventPattern("topic.service1")
  async onTopicService1(
    @Payload()
    message: RedisMessage
  ): Promise<void> {}
}
