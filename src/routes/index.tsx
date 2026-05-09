import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Home — Welcome" },
      {
        name: "description",
        content: "A simple, fast home page built with Vite and React.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Acme
          </a>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Build something delightful
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A clean, simple starting point. Fast by default, easy to extend, and
          ready to deploy.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get started
          </a>
          <a
            href="#about"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            Learn more
          </a>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Fast", body: "Optimized builds and instant page loads." },
            { title: "Simple", body: "Minimal setup. Just the essentials." },
            { title: "Flexible", body: "Customize freely as your app grows." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-border mt-16"
      >
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Acme. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
