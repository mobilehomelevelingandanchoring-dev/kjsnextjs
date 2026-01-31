/**
 * StructuredData Component
 * ========================
 * Injects JSON-LD structured data into pages for SEO
 *
 * Usage:
 * <StructuredData data={generateLocalBusinessSchema()} />
 * <StructuredData data={[schema1, schema2]} />
 */

export default function StructuredData({ data }) {
  if (!data) return null;

  // Handle array of schemas
  const schemas = Array.isArray(data) ? data : [data];

  // Filter out null/undefined schemas
  const validSchemas = schemas.filter(Boolean);

  if (validSchemas.length === 0) return null;

  // If multiple schemas, wrap in @graph
  const jsonLd = validSchemas.length === 1
    ? validSchemas[0]
    : {
        '@context': 'https://schema.org',
        '@graph': validSchemas.map(s => {
          // Remove @context from individual schemas when combining
          const { '@context': _, ...schemaWithoutContext } = s;
          return schemaWithoutContext;
        }),
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
    />
  );
}
