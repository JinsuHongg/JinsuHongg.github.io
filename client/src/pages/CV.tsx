import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const cvUrl = "https://docs.google.com/document/d/10wwfyt6xXfqchFDT2vKoVh60gNVXzsmA/edit?usp=sharing&ouid=117414335558668737707&rtpof=true&sd=true";
const cvPreviewUrl = "https://docs.google.com/document/d/10wwfyt6xXfqchFDT2vKoVh60gNVXzsmA/preview";

export default function CV() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-slate-900">
      <header className="border-b border-slate-900/10 bg-[#f7f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">Jinsu Hong</Link>
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-cyan-800 transition hover:text-cyan-950">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3 text-cyan-800">Curriculum vitae</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Jinsu Hong</h1>
            <p className="mt-3 text-slate-600">View the current CV below or open it in Google Docs.</p>
          </div>
          <a href={cvUrl} target="_blank" rel="noreferrer">
            <Button className="bg-slate-900 px-5 text-white hover:bg-slate-700">
              <ExternalLink className="mr-2 h-4 w-4" /> Open in Google Docs
            </Button>
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-900/10 bg-white shadow-sm">
          <iframe
            title="Jinsu Hong curriculum vitae"
            src={cvPreviewUrl}
            className="h-[75vh] min-h-[640px] w-full"
          />
        </div>

        <p className="mt-5 text-sm text-slate-600">
          Having trouble viewing the document?{" "}
          <a href={cvUrl} target="_blank" rel="noreferrer" className="font-semibold text-cyan-800 hover:text-cyan-950">
            Open the CV in Google Docs <Download className="inline h-3.5 w-3.5" />
          </a>
        </p>
      </main>
    </div>
  );
}
