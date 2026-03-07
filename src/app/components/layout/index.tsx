import { Footer } from './footer';
import { Header } from './navbar';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
