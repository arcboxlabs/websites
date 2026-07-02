import type { Metadata } from 'next';
import { LegalPage } from '../components/legal-page';
import { createTwitter, landingOpenGraph } from '@/lib/metadata';

const title = 'Privacy Policy';
const description = 'How ArcBox collects, uses, shares, and protects information when you use arcbox.dev and related online services.';
const updated = '2026-07-02';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  openGraph: landingOpenGraph({
    type: 'website',
    url: 'https://arcbox.dev/privacy',
    title,
    description
  }),
  twitter: createTwitter({ title, description })
};

export default function PrivacyPage() {
  return (
    <LegalPage title={title} description={description} updated={updated}>
      <p>
        ArcBox, Inc. d/b/a ArcBox Labs ("ArcBox", "Company", "we", "us", or "our") is
        committed to protecting your privacy. This Privacy Policy explains how we collect, use,
        disclose, and protect information when you access arcbox.dev, ArcBox documentation,
        downloads, and related online services (the "Service").
      </p>

      <p>
        By using the Service, you agree to this Privacy Policy and our Terms of Service. If you do
        not agree, please do not use the Service.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>
        We may collect information you choose to provide, such as your name, email address, company,
        account details, support requests, feedback, issue reports, or other information you send to
        us.
      </p>

      <h3>Information collected through technology</h3>
      <p>
        When you visit or use the Service, we may automatically collect information such as your IP
        address, browser type, device type, operating system, referring URL, pages viewed, links
        clicked, approximate location derived from IP address, dates and times of access, and
        performance or diagnostic events.
      </p>

      <p>
        The Service may use cookies, local storage, and similar technologies to remember
        preferences, understand usage, measure performance, and improve the Service. ArcBox uses
        product analytics to collect page views, page leave events, web vitals, and similar usage
        and interaction information — using local storage and cookies, or, for visitors in the
        European Economic Area, the United Kingdom, and Switzerland, in cookieless mode without
        persistent identifiers. Where you are signed in, analytics may be associated with your
        account.
      </p>

      <h3>Error and crash diagnostics</h3>
      <p>
        We may use Sentry to capture website errors, performance traces, and limited diagnostic
        information. Session replay diagnostics run only for a small sample of website sessions,
        and the integration is configured to mask text and inputs and to block media.
      </p>

      <h3>ArcBox Desktop telemetry</h3>
      <p>
        ArcBox Desktop runs on your Mac without requiring an account. Official builds of ArcBox
        Desktop include telemetry such as:
      </p>
      <ul>
        <li>
          <strong>Product analytics.</strong>
          {' '}
          ArcBox Desktop uses PostHog to collect application lifecycle and feature usage events.
          Product analytics is enabled by default. You can turn it off at any time with the
          usage data toggle in ArcBox Desktop settings.
        </li>
        <li>
          <strong>Crash and error reporting.</strong>
          {' '}
          ArcBox Desktop uses Sentry to collect crash reports, error diagnostics, session
          statistics, and sampled performance traces. Crash and error reporting is active in
          official builds and is not controlled by the usage data toggle.
        </li>
      </ul>
      <p>
        Telemetry events may include stack traces, device and operating system information, app
        version, and diagnostic metadata. Telemetry is not intended to include the contents of
        your containers, images, volumes, or files. We apply filters intended to remove
        home-directory paths from crash reports before they are sent.
      </p>

      <h3>Content on the Cloud Services</h3>
      <p>
        Where ArcBox offers account-based cloud services, the content you run, store, or share on
        them — such as code, images, volumes, and data inside your containers or sandboxes — is
        processed on infrastructure we operate to provide those services. We access it only to
        provide, secure, and support the services you request, to comply with law, or with your
        permission, as described in Section 6, and, where sharing features are offered, people
        you share content with can view it.
      </p>

      <h3>Network and infrastructure logs</h3>
      <p>
        Where you use ArcBox cloud services or your traffic transits networks that ArcBox
        operates, we log connection and traffic metadata — such as IP addresses, ports, traffic
        volumes, and timestamps — to operate the network and to support security, capacity
        planning, billing, and abuse prevention. This logging concerns network metadata; it is not
        intended to capture the contents of your communications or workloads.
      </p>

      <h3>Software distribution and boot resources</h3>
      <p>
        ArcBox software contacts ArcBox-operated endpoints in normal operation — for example, to
        check for updates, download releases, or fetch the boot images and assets required to run
        containers and virtual machines (including endpoints on the arcboxcdn.com and arcbox.dev
        domains). These requests carry standard connection metadata, such as your IP address,
        client version, and the file requested, which we and our content delivery providers log to
        operate, secure, and measure the distribution infrastructure. They occur independently of
        your telemetry settings: automatic update checks can be disabled in ArcBox Desktop
        settings, while boot asset downloads are required for the software to function.
      </p>

      <h2>2. How We Use Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>operate, maintain, secure, and improve the Service;</li>
        <li>provide documentation, downloads, support, updates, and related communications;</li>
        <li>respond to questions, feedback, bug reports, and support requests;</li>
        <li>
          analyze usage, performance, reliability, and feature quality, and develop new features
          and services;
        </li>
        <li>detect, prevent, and respond to fraud, abuse, security incidents, and technical issues;</li>
        <li>comply with legal obligations and enforce our Terms of Service; and</li>
        <li>send administrative notices, including updates to this Privacy Policy.</li>
      </ul>

      <h2>3. Legal Bases for Processing</h2>
      <p>
        ArcBox, Inc. is the controller of personal information processed in connection with the
        Service. Where the EU or UK General Data Protection Regulation applies, we process
        personal information on the following legal bases:
      </p>
      <ul>
        <li>
          <strong>Legitimate interests</strong>
          {' '}
          — operating, securing, and improving the Service, measuring usage, and diagnosing
          errors and crashes;
        </li>
        <li>
          <strong>Performance of a contract</strong>
          {' '}
          — providing services you request, including downloads, support, and any account-based
          features;
        </li>
        <li>
          <strong>Consent</strong>
          {' '}
          — where we request it, such as for marketing communications; you may withdraw consent
          at any time without affecting prior processing;
        </li>
        <li>
          <strong>Legal obligations</strong>
          {' '}
          — complying with applicable law and establishing or defending legal claims.
        </li>
      </ul>

      <h2>4. How We Share Information</h2>
      <p>
        We do not sell your personal information for money or rent it to third parties for their own
        marketing. We may share information in the following limited circumstances:
      </p>
      <ul>
        <li>
          <strong>Service providers.</strong>
          {' '}
          We may share information with vendors that help us host, secure, analyze, monitor, and
          support the Service, including PostHog, Inc. (product analytics), Functional Software,
          Inc. d/b/a Sentry (error monitoring and crash reporting), Cloudflare, Inc. (network and
          content delivery), and AI model providers that power AI features we operate. These
          vendors process information on our behalf and under our instructions.
        </li>
        <li>
          <strong>Legal and safety reasons.</strong>
          {' '}
          We may disclose information when we believe disclosure is reasonably necessary to comply
          with law, legal process, enforceable government request, or to protect rights, safety, and
          security.
        </li>
        <li>
          <strong>Business transfers.</strong>
          {' '}
          If ArcBox is involved in a merger, acquisition, financing, reorganization, bankruptcy, or
          sale of assets, information may be transferred as part of that transaction.
        </li>
        <li>
          <strong>With your direction or consent.</strong>
          {' '}
          We may share information when you ask us to or otherwise consent.
        </li>
      </ul>

      <p>
        We may use or disclose aggregated or de-identified information that does not reasonably
        identify you.
      </p>

      <h2>5. Cookies and Local Storage</h2>
      <p>
        Cookies and local storage help the Service function, remember preferences, measure traffic,
        and understand product quality. Strictly necessary cookies are always active. Analytics
        cookies are used only where they are permitted without consent: for visitors in the
        European Economic Area, the United Kingdom, and Switzerland, our analytics runs in
        cookieless mode and stores no identifiers on your device. See our
        {' '}
        <a href="/cookies">Cookie Policy</a>
        {' '}
        for details. You can control or delete cookies through your browser settings; blocking
        strictly necessary cookies may affect some features of the Service. The Service does not
        currently respond to browser "Do Not Track" signals, as no common standard for
        interpreting them has been adopted.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill the purposes for which
        it was collected. When setting a retention period for a category of data, we consider why
        we collected it, how sensitive it is, and our operational and legal needs. We retain
        information longer where necessary to comply with legal obligations, resolve disputes,
        enforce agreements, or collect fees owed, and we may retain aggregated or de-identified
        information that does not reasonably identify you. For example:
      </p>
      <ul>
        <li>if you create an account, we retain your profile information for as long as your account is active;</li>
        <li>we retain billing and transaction records for as long as required for accounting, tax, and audit purposes;</li>
        <li>we retain support requests and related correspondence for as long as needed to resolve the matter;</li>
        <li>
          we retain device, IP, usage, and diagnostic data for as long as we need it to keep our
          systems working appropriately, effectively, and securely.
        </li>
      </ul>
      <p>
        Where ArcBox offers cloud compute services, content you run or store on them — such as
        code, images, volumes, and data inside your containers or sandboxes — is your content. We
        process it only to provide the service you requested, and it is deleted when you delete it
        or terminate the resources that contain it. Where customer content includes personal
        information about a customer&apos;s own users, ArcBox processes that information on the
        customer&apos;s behalf as a processor; the customer is the controller, and requests
        concerning such information should be directed to the customer.
      </p>

      <h2>7. How We Protect Information</h2>
      <p>
        We use administrative, technical, and organizational safeguards designed to protect
        information from unauthorized access, disclosure, alteration, and destruction. No method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        ArcBox is based in the United States, and the Service is operated from the United States.
        Information we collect is transferred to, stored, and processed in the United States and
        in other countries where our service providers operate, which may have data protection
        laws different from those of your jurisdiction. Where the GDPR or UK GDPR applies to a
        transfer, we rely on appropriate safeguards, such as standard contractual clauses or our
        service providers&apos; certifications under the EU-U.S. Data Privacy Framework.
      </p>

      <h2>9. Your Choices and Rights</h2>
      <p>
        You may opt out of marketing emails by following unsubscribe instructions in those emails.
        We may still send administrative or service-related messages. You may disable cookies or
        clear local storage through your browser.
      </p>

      <p>
        Depending on where you live, you may have rights to request access, correction, deletion,
        portability, restriction, or objection regarding personal information. To make a request,
        contact us at legal@arcbox.dev. We may need to verify your request before acting on it.
      </p>

      <p>
        If you are in the European Economic Area, the United Kingdom, or Switzerland, you may also
        withdraw consent at any time without affecting the lawfulness of prior processing, and you
        may lodge a complaint with your local data protection supervisory authority.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13. If you believe a child has provided us personal
        information, contact us at legal@arcbox.dev and we will take appropriate steps to delete
        it.
      </p>

      <h2>11. Links to Other Websites</h2>
      <p>
        The Service may link to third-party websites, repositories, package registries, or services.
        This Privacy Policy applies only to information collected by ArcBox. We are not responsible
        for third-party privacy practices, content, or security.
      </p>

      <h2>12. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we may
        notify you by posting a notice on the Service or by other appropriate means. Your continued
        use of the Service after an update means you accept the updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or ArcBox privacy practices, contact us at:
      </p>
      <p>
        ArcBox, Inc. d/b/a ArcBox Labs
        <br />
        131 Continental Dr, Suite 305
        <br />
        Newark, Delaware 19713
        <br />
        legal@arcbox.dev
      </p>
    </LegalPage>
  );
}
