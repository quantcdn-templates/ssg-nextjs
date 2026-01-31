export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #000 0%, #111 100%)',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          maxWidth: '600px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h1 style={{ margin: '0 0 16px', fontSize: '2.5rem', color: '#000' }}>
          Next.js on QuantCDN
        </h1>
        <p style={{ margin: '0 0 24px', fontSize: '1.125rem', color: '#666' }}>
          Your Next.js static site is live! Built with the App Router and React
          Server Components.
        </p>

        <h2 style={{ margin: '0 0 12px', fontSize: '1.25rem', color: '#333' }}>
          Features
        </h2>
        <ul style={{ margin: '0 0 24px', paddingLeft: '20px', color: '#666' }}>
          <li>Static Export for blazing-fast performance</li>
          <li>App Router with React Server Components</li>
          <li>TypeScript support out of the box</li>
          <li>Automatic deployment via GitHub Actions</li>
          <li>Global CDN distribution</li>
        </ul>

        <h2 style={{ margin: '0 0 12px', fontSize: '1.25rem', color: '#333' }}>
          Next Steps
        </h2>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#666' }}>
          <li>
            Edit <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>src/app/page.tsx</code> to customize this page
          </li>
          <li>Add new routes in <code style={{ background: '#f4f4f4', padding: '2px 6px', borderRadius: '3px' }}>src/app/</code></li>
          <li>Push to trigger automatic deployment</li>
        </ul>
      </div>
    </main>
  );
}
