import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Resources } from './Resources';

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-eggshell flex flex-col pt-24">
      <Navbar />
      <main className="flex-1 w-full bg-mahogany-900 min-h-screen">
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
