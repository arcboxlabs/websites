import {
  LifeBuoy,
  MessageCircle,
  FileText,
  HelpCircle,
  Bot
} from 'lucide-react';

const footerLinks = [
  {
    icon: LifeBuoy,
    text: 'Need help?',
    linkText: 'Contact Support',
    href: '#'
  },
  {
    icon: MessageCircle,
    text: 'Chat with ArcBox community on',
    linkText: 'Discord',
    href: '#'
  },
  {
    icon: FileText,
    text: 'Check out our',
    linkText: 'changelog',
    href: '#'
  },
  {
    icon: HelpCircle,
    text: 'Questions?',
    linkText: 'Contact Sales',
    href: '#'
  },
  {
    icon: Bot,
    text: 'LLM?',
    linkText: 'Read llms.txt',
    href: '/docs/llms.txt'
  }
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <ul className="flex flex-col gap-4">
          {footerLinks.map((item) => (
            <li key={item.linkText} className="flex items-center gap-3">
              <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {item.text}{' '}
                <a
                  href={item.href}
                  className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent/80 hover:decoration-accent/70"
                >
                  {item.linkText}
                </a>
                {item.linkText === 'changelog' ? '.' : '.'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
