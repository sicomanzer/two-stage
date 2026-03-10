import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              const originalFetch = window.fetch;
              if (originalFetch) {
                Object.defineProperty(window, 'fetch', {
                  get: function() { return originalFetch; },
                  set: function() { console.warn('Attempted to overwrite window.fetch'); },
                  configurable: true
                });
              }
            } catch (e) {
              // Ignore errors during patching
            }
          })();
        ` }} />
        {children}
      </body>
    </html>
  );
}
