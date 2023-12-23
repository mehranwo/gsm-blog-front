import type { CodegenConfig } from "@graphql-codegen/cli";

import generalConfig from "./general";

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:1337/graphql`,
  // schema: `https://gsm-blog-back-gsm-back-develop.apps.gsmapp.dev/graphql`,

  documents: [
    "./src/**/*.ts",
    // "./src/**/*.tsx"
  ],
  generates: {
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./introspection.json": {
      plugins: ["introspection"],
    },
    "./src/services/Graphql/types.generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
