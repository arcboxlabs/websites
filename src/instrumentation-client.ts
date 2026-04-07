import * as Sentry from '@sentry/nextjs';
import { posthog } from 'posthog-js';

if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    capture_pageleave: true,
    capture_pageview: true,
    capture_performance: { web_vitals: true },
    persistence: 'localStorage+cookie',
    loaded(ph) {
      if (process.env.NODE_ENV === 'production') {
        ph.debug(true);
      }
    }
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,

  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.01,
  replaysOnErrorSampleRate: 1,

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: true,
      maskAllInputs: true,
      blockAllMedia: true
    })
  ]
});

const asciiArt = String.raw`
%c
     ___                 ____                   __           __
    /   |   _____ _____ / __ ) ____  _  __     / /   ____   / /_   _____
   / /| |  / ___// ___// __  |/ __ \| |/_/    / /   / __ \// __ \ / __ /
  / ___ | / /   / /__ / /_/ // /_/ />   <    / /___/ /_/ // /_/ /(__  )
 /_/  |_|/_/    \___//_____/ \____//_/|_|   /_____/\___,_\\.___//____/
`;

console.log(
  asciiArt
  + '\n%c We build high-performance container and VM runtime.\n'
  + '\n'
  + '%c Our GitHub                     https://arcbox.link/github\n'
  + '%c Source code of this website    https://github.com/arcboxlabs/websites\n'
  + '%c Source code of ArcBox core     https://github.com/arcboxlabs/arcbox\n'
  + '%c Source code of ArcBox Desktop  https://github.com/arcboxlabs/arcbox-desktop\n',

  'color: #e86518; font-family: monospace; font-weight: bold; white-space: pre;',
  'color: #e86518; font-size: 14px; font-weight: bold; padding: 4px 0; white-space: pre;',

  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;',
  'color: #999; font-size: 12px; white-space: pre;'
);
