type JsonLdProps = {
  /** A single schema object or an array of schema objects */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders one or more JSON-LD `<script>` blocks.
 * Place this component inside any server or client component.
 *
 * @example
 * <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", ... }} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
