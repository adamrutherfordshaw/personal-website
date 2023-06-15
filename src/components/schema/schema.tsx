import { SchemaProps } from "./schema.types";

export const Schema = ({ schema }: SchemaProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  );
};
