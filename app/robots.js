export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://kjsupremepressurewashing.com/sitemap.xml',
    host: 'https://kjsupremepressurewashing.com',
  };
}
