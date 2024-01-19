import { DICTIONARIES } from "./locale";
import { Dictionary } from "./types";

const api = {
  dictionaries: {
    fetch: async (locale: string): Promise<Dictionary> =>
      DICTIONARIES[locale] || DICTIONARIES["pt"],
  },
};

export default api;
