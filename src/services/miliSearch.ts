import MeiliSearch from "meilisearch";

import generalConfig from "@/common/config/general";

const client = new MeiliSearch({
  host: generalConfig.searchUrl ?? "",
  apiKey: generalConfig.masterKey,
})

export const postIndex = client.index('post')
export const productIndex = client.index("product")
