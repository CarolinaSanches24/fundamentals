import { customType } from "drizzle-orm/pg-core";

export const customDate = customType<{ data: Date }>({
  dataType() {
    return "date";
  },
});
