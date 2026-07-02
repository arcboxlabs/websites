import type { Metadata } from 'next';
import { LegalPage } from '../components/legal-page';
import { createTwitter, landingOpenGraph } from '@/lib/metadata';

const title = 'Terms of Service';
const description = 'Terms that govern access to arcbox.dev, ArcBox software, and ArcBox cloud services.';
const updated = '2026-07-02';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms' },
  openGraph: landingOpenGraph({
    type: 'website',
    url: 'https://arcbox.dev/terms',
    title,
    description
  }),
  twitter: createTwitter({ title, description })
};

export default function TermsPage() {
  return (
    <LegalPage title={title} description={description} updated={updated}>
      <p>
        The website located at arcbox.dev and related pages, documentation, and downloads (the
        "Site"), software distributed by ArcBox (including ArcBox Desktop), and ArcBox&apos;s
        account-based cloud services (collectively, the "Services") are owned or operated by
        ArcBox, Inc. d/b/a ArcBox Labs ("ArcBox", "Company", "we", "us", or "our"). These Terms of
        Service ("Terms") are a legally binding agreement between you and ArcBox governing your
        use of the Services. Additional or product-specific terms presented with a particular
        Service are incorporated into these Terms and, for that Service, control over them.
      </p>

      <p>
        By accessing or using the Services, you accept these Terms on behalf of yourself or the
        entity you represent, and you represent that you have the authority to do so. If you do
        not agree to these Terms, do not access or use the Services.
      </p>

      <p>
        <strong>
          Please read Section 13 carefully. It contains an agreement to arbitrate, a class action
          waiver, and a jury trial waiver.
        </strong>
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You may not use the Services or accept these Terms if you are not at least 18 years old,
        or if you are barred from using the Services under applicable law. If you use the Services
        on behalf of an organization, you agree to these Terms for that organization and represent
        that you have the authority to bind it.
      </p>

      <h2>2. Access to the Site</h2>
      <h3>Limited license</h3>
      <p>
        Subject to these Terms, ArcBox grants you a limited, revocable, non-exclusive,
        non-transferable license to access and use the Site for your personal or internal business
        purposes.
      </p>

      <h3>Restrictions</h3>
      <p>
        You may not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise
        commercially exploit the Site or its content except as expressly allowed by us. You may not
        modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part
        of the Site except to the extent such restriction is prohibited by law or by an applicable
        open-source license. You may not access the Site to build a competing website, product, or
        service.
      </p>

      <h3>Changes to the Services</h3>
      <p>
        We may modify, suspend, or discontinue the Services, in whole or in part, at any time with
        or without notice. We are not liable to you or any third party for any modification,
        suspension, or discontinuation of the Services.
      </p>

      <h3>Ownership</h3>
      <p>
        Excluding your User Content and Customer Content, the Services and their content are owned
        by ArcBox or its suppliers and are protected by intellectual property laws. These Terms do
        not transfer any ownership rights to you. All rights not expressly granted are reserved.
      </p>

      <h2>3. Accounts and User Content</h2>
      <p>
        Some features may require an account. If you create an account, you must provide accurate
        information, keep that information current, maintain the confidentiality of your login
        credentials, and notify us promptly of unauthorized use.
      </p>

      <p>
        "User Content" means content or information you submit to or through the Services, other
        than Customer Content (defined in Section 5). You are solely responsible for your User
        Content. You grant ArcBox a worldwide, non-exclusive, royalty-free license to host,
        reproduce, display, perform, modify, and use your User Content solely to operate, provide,
        secure, and improve the Services.
      </p>

      <p>
        Feedback, ideas, or suggestions you provide about ArcBox may be used by us without
        restriction or compensation. Do not submit confidential or proprietary information through
        public forms, issue trackers, support channels, or feedback channels unless a separate
        written agreement with ArcBox covers that information.
      </p>

      <h2>4. Software, Downloads, and Separate Licenses</h2>
      <p>
        The Site may link to ArcBox software, source code, documentation, packages, releases, or
        other downloadable materials. Those materials may be governed by separate open-source or
        source-available licenses, commercial licenses, subscription terms, or written agreements.
        If separate terms apply, those separate terms control for the relevant software or service.
      </p>

      <p>
        Nothing in these Terms limits rights granted to you under an applicable open-source
        license. For proprietary or commercial ArcBox software, you may use the software only as
        permitted by the applicable license or agreement.
      </p>

      <p>
        Official builds of ArcBox software, including ArcBox Desktop, may check for and install
        updates and may send crash reports or telemetry as described in our Privacy Policy. Unless
        we expressly agree otherwise in writing, ArcBox has no obligation to provide support or
        maintenance for the software.
      </p>

      <p>
        ArcBox software may also rely on ArcBox-operated network services in normal operation,
        such as update feeds and boot image, release, and asset distribution endpoints (including
        on the arcboxcdn.com and arcbox.dev domains). These hosted resources are part of the
        Services under these Terms. We do not guarantee that any particular endpoint will remain
        available indefinitely or for all software versions.
      </p>

      <h2>5. Cloud Services</h2>
      <h3>Scope</h3>
      <p>
        This section applies where ArcBox makes account-based cloud services available, including
        compute, container, sandbox, storage, and related hosted offerings (the "Cloud Services").
        Pricing, plan, or product-specific terms presented at signup or purchase are part of these
        Terms for the relevant Cloud Service.
      </p>

      <h3>Customer Content</h3>
      <p>
        You retain all rights to the code, images, volumes, data, and other content you run or
        store on the Cloud Services ("Customer Content"). You grant ArcBox a limited,
        non-exclusive, worldwide license to host, run, reproduce, and transmit Customer Content
        solely to provide, secure, and support the Cloud Services and to comply with law. We
        access Customer Content only for those purposes or with your permission. You are
        responsible for your Customer Content, including ensuring that you have all rights needed
        to run it on the Cloud Services and that it complies with these Terms.
      </p>

      <h3>Fees and billing</h3>
      <p>
        Paid Cloud Services are billed according to the pricing and billing terms presented at
        purchase, which may include usage-based fees measured by our systems. Fees are exclusive
        of taxes, which you are responsible for except taxes on our income. If charges are past
        due, we may suspend the affected Cloud Services after notice. We may change prices with
        prior notice, effective for your next billing period.
      </p>

      <h3>Beta and preview services</h3>
      <p>
        Services identified as alpha, beta, preview, or early access are provided as-is, may
        change or be discontinued at any time without notice, may have reduced or no support, and
        are excluded from any commitments we make for generally available services.
      </p>

      <h3>Network resources</h3>
      <p>
        IP addresses and other network identifiers that ArcBox assigns to your resources remain
        the property of ArcBox or its providers, are not transferable, and may be reassigned,
        rotated, or reclaimed when the associated resource is terminated or when reasonably
        necessary to operate the network. You must not use the Cloud Services in a way that
        damages the reputation of ArcBox networks or IP space, including by originating spam,
        abusive traffic, or traffic that causes ArcBox network ranges to be blocklisted. Abuse
        originating from ArcBox networks or services may be reported to abuse@arcbox.dev.
      </p>

      <h3>Suspension</h3>
      <p>
        We may suspend the Cloud Services, in whole or in part, if we reasonably believe your use
        violates these Terms, creates a security or operational risk to the Services or others, is
        required by law, or if your charges are past due. Where practicable, we will limit
        suspension to the affected resources and restore service once the cause is resolved.
      </p>

      <h3>Effect of termination</h3>
      <p>
        When you delete a resource, close your account, or a Cloud Service is terminated, we
        delete the associated Customer Content within a reasonable period, except for residual
        copies in backups and records we retain for billing, security, or legal compliance, as
        described in our Privacy Policy. You are responsible for exporting Customer Content you
        wish to keep before termination.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to use the Services to:</p>
      <ul>
        <li>violate any law, regulation, contract, or third-party right;</li>
        <li>upload, transmit, or distribute malware, worms, or harmful code;</li>
        <li>interfere with or disrupt servers, networks, security, or authentication systems;</li>
        <li>attempt to gain unauthorized access to the Site or related systems;</li>
        <li>harvest, scrape, or collect information except as allowed by our robots.txt file;</li>
        <li>send spam, unsolicited messages, or duplicative requests;</li>
        <li>consume resources beyond your allocated limits, or circumvent metering, quotas, or billing;</li>
        <li>mine cryptocurrency without ArcBox's prior written consent;</li>
        <li>attack, scan, or test the security of third-party systems without authorization;</li>
        <li>harass, abuse, threaten, or harm another person; or</li>
        <li>submit content that is unlawful, infringing, misleading, defamatory, obscene, or otherwise objectionable.</li>
      </ul>

      <p>
        We may review, remove, or refuse User Content, suspend or terminate accounts, and report
        conduct to law enforcement when we believe it violates these Terms or creates risk for
        ArcBox, our users, or others.
      </p>

      <h2>7. Third-Party Links and Services</h2>
      <p>
        The Services may contain links to third-party websites, services, products, repositories,
        package registries, or content. Third-party services are not under our control. We are not
        responsible for third-party content, terms, privacy practices, or security. Your use of
        third-party services is at your own risk and may be governed by separate terms.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, ARCBOX AND ITS SUPPLIERS DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER
        EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, AND NON-INFRINGEMENT.
      </p>

      <p>
        We do not warrant that the Services will meet your requirements, be uninterrupted, timely,
        secure, error-free, accurate, reliable, complete, legal, safe, or free of harmful code, and
        unless expressly agreed in writing, we do not commit to any uptime or availability level.
        Some jurisdictions do not allow limitations on implied warranties, so some of the above
        limitations may not apply to you.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARCBOX AND ITS SUPPLIERS WILL NOT BE LIABLE FOR
        LOST PROFITS, LOST DATA, COSTS OF SUBSTITUTE PRODUCTS OR SERVICES, OR ANY INDIRECT,
        CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATING
        TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
      </p>

      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARCBOX'S TOTAL LIABILITY FOR DAMAGES ARISING FROM
        OR RELATING TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF THE AMOUNTS YOU
        PAID ARCBOX FOR THE SERVICES IN THE SIX (6) MONTHS BEFORE THE EVENT GIVING RISE TO THE
        CLAIM OR FIFTY U.S. DOLLARS (US $50). Some jurisdictions do not allow the limitation or
        exclusion of liability for incidental or consequential damages, so some of the above
        limitations may not apply to you.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold ArcBox, its officers, employees, agents, and affiliates
        harmless from claims, damages, losses, liabilities, costs, and expenses, including
        reasonable attorneys' fees, arising from your use of the Services, your User Content or
        Customer Content, your violation of these Terms, or your violation of applicable law or
        third-party rights.
      </p>

      <h2>11. Termination</h2>
      <p>
        These Terms remain in effect while you use the Services. We may suspend or terminate your
        rights to use the Services at any time, including if you violate these Terms. Sections
        that by their nature should survive termination will survive, including ownership,
        restrictions, disclaimers, limitation of liability, indemnification, dispute resolution,
        and general provisions.
      </p>

      <h2>12. Copyright Policy</h2>
      <p>
        ArcBox respects intellectual property rights and expects users to do the same. It is our
        policy to remove infringing material and, in appropriate circumstances, to terminate the
        accounts of users who are repeat infringers. If you believe material on the Site infringes
        your copyright, please send a written notice with:
      </p>
      <ul>
        <li>your physical or electronic signature;</li>
        <li>identification of the copyrighted work you claim has been infringed;</li>
        <li>identification of the material you claim is infringing and want removed;</li>
        <li>information reasonably sufficient for us to locate the material;</li>
        <li>your address, telephone number, and email address;</li>
        <li>a statement that you have a good faith belief the disputed use is not authorized; and</li>
        <li>
          a statement, under penalty of perjury, that the information in your notice is accurate and
          that you are the copyright owner or authorized to act for the owner.
        </li>
      </ul>

      <p>
        Our designated agent to receive notifications of claimed infringement, as registered with
        the U.S. Copyright Office, is:
      </p>
      <p>
        Legal Department
        <br />
        ArcBox, Inc. d/b/a ArcBox Labs
        <br />
        131 Continental Dr, Suite 305
        <br />
        Newark, Delaware 19713
        <br />
        +1 (415) 360-8880
        <br />
        dmca@arcbox.dev
      </p>
      <p>
        Under 17 U.S.C. Section 512(f), a person who knowingly materially misrepresents that
        material is infringing may be liable for damages, costs, and attorneys' fees.
      </p>

      <h2>13. Dispute Resolution</h2>
      <h3>Informal resolution</h3>
      <p>
        If a dispute arises between you and ArcBox relating to the Services or these Terms (a
        "Dispute"), both parties agree to first try to resolve the
        Dispute informally. A party initiating a Dispute must send written notice to the other
        party describing the Dispute and the relief requested. Notices to ArcBox should be sent to
        legal@arcbox.dev or ArcBox, Inc. d/b/a ArcBox Labs, 131 Continental Dr, Suite 305, Newark,
        Delaware 19713. Within 45 days after the notice is received, you and ArcBox agree to meet
        and confer, by telephone or videoconference, in a good-faith effort to resolve the Dispute.
        Completing this conference is a condition precedent to commencing arbitration or a small
        claims action. Applicable statutes of limitations and filing fee deadlines are tolled while
        the parties engage in this informal process.
      </p>

      <h3>Agreement to arbitrate</h3>
      <p>
        Except for disputes that qualify for small claims court or disputes seeking equitable relief
        for infringement or misuse of intellectual property rights, you and ArcBox agree that
        Disputes will be resolved by binding arbitration on an individual basis rather than in
        court. The Federal Arbitration Act governs the interpretation and enforcement of this
        agreement to arbitrate, which survives termination of these Terms. This agreement to
        arbitrate does not prevent you from bringing issues to the attention of federal, state, or
        local agencies.
      </p>

      <h3>Arbitration rules and forum</h3>
      <p>
        If a Dispute is not resolved within 60 days after notice is received, either party may
        commence binding arbitration administered by JAMS. Disputes involving claims and
        counterclaims under US $250,000 (exclusive of attorneys' fees and interest) are subject to
        the then-current JAMS Streamlined Arbitration Rules; all other Disputes are subject to the
        then-current JAMS Comprehensive Arbitration Rules. The JAMS rules are available at
        jamsadr.com. Unless you and ArcBox agree otherwise or the batch arbitration process below
        applies, the arbitration will be conducted in the county where you reside. Responsibility
        for JAMS fees and costs is determined by the applicable JAMS rules. If JAMS is not
        available to arbitrate, the parties will select an alternative arbitral forum. Materials
        and documents exchanged during arbitration must be kept confidential and may be shared only
        with the parties' attorneys, accountants, or business advisors bound by the same duty of
        confidentiality.
      </p>

      <h3>Authority of the arbitrator</h3>
      <p>
        The arbitrator has exclusive authority to resolve Disputes subject to arbitration,
        including disputes about the interpretation, applicability, enforceability, or formation of
        this agreement to arbitrate, except that only a court of competent jurisdiction may decide
        (a) disputes about the enforceability or scope of the class action waiver below, (b)
        disputes about the payment of arbitration fees, (c) disputes about whether a condition
        precedent to arbitration has been satisfied, and (d) disputes about which version of this
        agreement to arbitrate applies. The arbitrator may award the same individual damages and
        relief as a court, must follow applicable law and these Terms, and will issue a written
        award describing the essential findings and conclusions. Judgment on the award may be
        entered in any court of competent jurisdiction.
      </p>

      <h3>Class action and jury trial waiver</h3>
      <p>
        YOU AND ARCBOX AGREE TO BRING CLAIMS AGAINST EACH OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT
        AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, REPRESENTATIVE, COLLECTIVE, OR MASS ACTION.
        THE ARBITRATOR MAY AWARD RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND
        ONLY TO THE EXTENT NECESSARY TO RESOLVE THAT PARTY'S INDIVIDUAL CLAIM. YOU AND ARCBOX WAIVE
        ANY RIGHT TO A JURY TRIAL FOR DISPUTES COVERED BY THIS SECTION.
      </p>
      <p>
        If a court finally decides that this waiver is invalid or unenforceable as to a particular
        claim or request for relief, that claim (and only that claim) will be severed from the
        arbitration and may be litigated in the state or federal courts located in the State of
        Delaware; all other Disputes remain subject to arbitration. This subsection does not
        prevent either party from participating in a class-wide settlement of claims.
      </p>

      <h3>Batch arbitration</h3>
      <p>
        If 100 or more arbitration demands of a substantially similar nature are filed against
        ArcBox by or with the assistance of the same law firm, group of law firms, or organization
        within a 30-day period, JAMS will administer the demands in batches of up to 100, with one
        arbitrator, one set of filing and administrative fees per side, one procedural calendar,
        and one consolidated proceeding per batch. Demands are of a substantially similar nature if
        they arise out of the same event or factual scenario, raise the same or similar legal
        issues, and seek the same or similar relief. If the parties disagree about whether this
        process applies, JAMS will appoint a single administrative arbitrator, whose fees ArcBox
        will pay, to decide. This provision does not authorize class, collective, or mass
        arbitration of any kind.
      </p>

      <h3>Attorneys' fees</h3>
      <p>
        Each party bears its own attorneys' fees and costs in arbitration, unless the arbitrator
        finds that the substance of a Dispute or the relief sought was frivolous or brought for an
        improper purpose. A party that obtains a court order compelling arbitration, or that
        prevails in a court action about whether a condition precedent to arbitration has been
        satisfied, may recover from the other party its reasonable costs and attorneys' fees
        incurred in that action.
      </p>

      <h3>30-day opt out</h3>
      <p>
        You may opt out of this arbitration agreement by sending written notice to ArcBox, Inc.
        d/b/a ArcBox Labs, 131 Continental Dr, Suite 305, Newark, Delaware 19713, or
        legal@arcbox.dev within 30 days after first becoming subject to this arbitration agreement.
        Your notice must include your name, address, and a clear statement that you want to opt out.
        Opting out of arbitration does not affect any other part of these Terms.
      </p>

      <h3>Severability and changes to this section</h3>
      <p>
        Except as stated in the class action and jury trial waiver above, if any part of this
        Section 13 is found invalid or unenforceable, that part will be severed and the remainder
        will remain in full force and effect. A Dispute must be initiated within the statute of
        limitations that would apply to the claim in a court of competent jurisdiction, or it is
        permanently barred. If ArcBox makes a material change to this Section 13, you may reject
        the change by written notice to the addresses above within 30 days after the change becomes
        effective, in which case the version of this section that you previously accepted continues
        to apply. Changes to this section do not create a new opt-out right if you previously
        agreed to arbitrate and did not validly opt out.
      </p>

      <h2>14. Export Controls</h2>
      <p>
        The Services and related technical data may be subject to U.S. export control laws and
        export or import regulations in other countries. You agree not to export, reexport, or
        transfer U.S. technical data acquired from ArcBox in violation of applicable export laws
        or regulations.
      </p>

      <h2>15. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. If we make material changes, we may notify you
        by posting notice on the Site or by sending email to the last email address you provided.
        Continued use of the Services after changes become effective means you accept the revised
        Terms.
      </p>

      <h2>16. General</h2>
      <p>
        These Terms are the entire agreement between you and ArcBox regarding the Services. If any
        provision is held invalid or unenforceable, the remaining provisions will remain in effect
        and the invalid provision will be modified to the maximum extent permitted by law. Our
        failure to enforce a provision is not a waiver. You may not assign these Terms without our
        prior written consent. We may assign these Terms freely.
      </p>

      <h2>17. Contact</h2>
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
