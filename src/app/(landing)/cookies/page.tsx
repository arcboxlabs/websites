import type { Metadata } from 'next';
import { LegalPage } from '../components/legal-page';
import { createTwitter, landingOpenGraph } from '@/lib/metadata';

const title = 'Cookie Policy';
const description = 'How ArcBox uses cookies and similar technologies on arcbox.dev and related online services.';
const updated = '2026-07-02';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/cookies' },
  openGraph: landingOpenGraph({
    type: 'website',
    url: 'https://arcbox.dev/cookies',
    title,
    description
  }),
  twitter: createTwitter({ title, description })
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title={title} description={description} updated={updated}>
      <p>
        Cookies are small text files stored on your device by your browser; local storage serves a
        similar purpose. This Cookie Policy explains how ArcBox, Inc. d/b/a ArcBox Labs uses
        cookies and similar technologies on arcbox.dev and related online services (the
        "Service"). By continuing to use the Service, you acknowledge the use of cookies as
        described in this policy.
      </p>

      <h2>1. Strictly Necessary Cookies</h2>
      <p>We use strictly necessary cookies and local storage for purposes such as:</p>
      <ul>
        <li>
          <strong>Authentication and sessions.</strong>
          {' '}
          Keeping you signed in and securing your session when you use account-based features.
        </li>
        <li>
          <strong>Security and abuse prevention.</strong>
          {' '}
          Protecting the Service and our systems against intrusion, bots, and abusive traffic,
          including cookies set by our network and content delivery providers.
        </li>
        <li>
          <strong>Preferences.</strong>
          {' '}
          Remembering settings you choose, such as theme or language.
        </li>
      </ul>
      <p>
        These cookies are necessary for the secure and stable operation of our website and
        systems and for providing the services you request. They cannot be switched off in our
        systems. If your browser blocks or deletes them, parts of the Service — including signing
        in — may not function.
      </p>

      <h2>2. Analytics</h2>
      <p>
        We use PostHog to understand how the Service is used, through page views, page leave
        events, and web vitals. In the European Economic Area, the United Kingdom, and
        Switzerland, analytics runs in cookieless mode: it stores no cookies or persistent
        identifiers on your device, and measurements last only for the current page visit.
        Elsewhere, analytics may use cookies and local storage to recognize repeat visits.
      </p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can delete or block cookies at any time by consulting the instructions or help
        documentation of the browser you use. Blocking strictly necessary cookies may prevent
        parts of the Service from working.
      </p>

      <h2>4. Changes and Contact</h2>
      <p>
        We may update this Cookie Policy from time to time; material changes will be reflected on
        this page. For more about how we handle information, see our
        {' '}
        <a href="/privacy">Privacy Policy</a>. Questions may be sent to legal@arcbox.dev.
      </p>
    </LegalPage>
  );
}
