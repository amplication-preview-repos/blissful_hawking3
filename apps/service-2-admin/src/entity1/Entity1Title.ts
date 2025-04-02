import { Entity1 as TEntity1 } from "../api/entity1/Entity1";

export const ENTITY1_TITLE_FIELD = "id";

export const Entity1Title = (record: TEntity1): string => {
  return record.id?.toString() || String(record.id);
};
