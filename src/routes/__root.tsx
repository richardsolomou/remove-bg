/// <reference types="vite/client" />
import geistWoff2 from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url'
import geistMonoWoff2 from '@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2?url'
import type { QueryClient } from '@tanstack/react-query'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { chunkRecoveryScript, updateNoticeId } from '~/client/chunkRecovery'
import { DefaultCatchBoundary } from '~/components/default-catch-boundary'
import { NotFound } from '~/components/not-found'
import { PHProvider } from '~/components/ph-provider'
import { seo } from '~/lib/seo'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'remove-bg.ras.sh | AI-powered background removal',
        description: '✂️ AI-powered background removal that runs entirely in your browser. No uploads, no paywalls, fully client-side.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: geistWoff2,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: geistMonoWoff2,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [{ children: chunkRecoveryScript }],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

// A shell rather than a component, so the root route's error and not-found pages render inside the document too.
function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="dark min-h-dvh font-sans text-foreground antialiased">
        <p id={updateNoticeId} hidden className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-950">
          A new version is available. Reload the page to continue.
        </p>
        <PHProvider>{children}</PHProvider>
        <Scripts />
      </body>
    </html>
  )
}
