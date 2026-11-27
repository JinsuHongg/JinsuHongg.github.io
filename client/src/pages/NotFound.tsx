import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { ArrowLeft, FileText } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f4] text-slate-900">
      <header className="border-b border-slate-900/10 bg-[#f7f7f4]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="font-display text-lg font-bold tracking-tight">
            {profile.name}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-950"
          >
            {profile.email}
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-16 sm:px-8">
        <div className="max-w-xl border-l-2 border-cyan-700 pl-6">
          <p className="eyebrow text-cyan-800">Error 404</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            The page you are looking for does not exist or may have been moved. Return to the main
            research profile or view the curriculum vitae directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={() => setLocation("/")}
              className="bg-slate-900 px-5 text-white hover:bg-slate-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-transparent px-5 hover:bg-white"
            >
              <a href={profile.cvPath}>
                <FileText className="mr-2 h-4 w-4" />
                View CV
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
