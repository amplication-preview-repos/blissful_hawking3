import { Entity1WhereInput } from "./Entity1WhereInput";
import { Entity1OrderByInput } from "./Entity1OrderByInput";

export type Entity1FindManyArgs = {
  where?: Entity1WhereInput;
  orderBy?: Array<Entity1OrderByInput>;
  skip?: number;
  take?: number;
};
