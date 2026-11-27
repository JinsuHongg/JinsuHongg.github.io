import { useState } from "react";
import { ArrowUpRight, Check, Code2, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { publications, type Publication } from "@/data/publications";
import { researchAreas, type ResearchAreaKey } from "@/data/research";

type ScopeFilter = "selected" | "all";
export type AreaFilter = "all" | ResearchAreaKey;

interface PublicationsSectionProps {
  scope: ScopeFilter;
  onScopeChange: (scope: ScopeFilter) => void;
  areaFilter: AreaFilter;
  onAreaFilterChange: (area: AreaFilter) => void;
  scholarHref: string;
}

function renderAuthor(author: string) {
  if (author === "Jinsu Hong") {
    return <strong className="font-semibold text-slate-900">{author}</strong>;
  }
  const idx = author.indexOf("Jinsu Hong");
  if (idx !== -1) {
    return (
      <>
        {author.slice(0, idx)}
        <strong className="font-semibold text-slate-900">Jinsu Hong</strong>
        {author.slice(idx + "Jinsu Hong".length)}
      </>
    );
  }
  return author;
}

export default function PublicationsSection({
  scope,
  onScopeChange,
  areaFilter,
  onAreaFilterChange,
  scholarHref,
}: PublicationsSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedCount = publications.filter((p) => p.selected).length;
  const visiblePublications = publications.filter((pub) => {
    const matchesScope = scope === "all" || pub.selected;
    const matchesArea = areaFilter === "all" || pub.area === areaFilter;
    return matchesScope && matchesArea;
  });

  const handleCopyBibtex = async (pub: Publication) => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopiedId(pub.id);
      toast.success("BibTeX copied to clipboard");
      window.setTimeout(() => {
        setCopiedId((current) => (current === pub.id ? null : current));
      }, 2000);
    } catch {
      toast.error("Could not copy BibTeX to clipboard");
    }
  };

  return (
    <section id="publications" className="bg-white px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-3 text-cyan-800">Publications</p>
            <h2 className="font-display text-4xl font-bold">
              {scope === "selected" ? "Selected work" : "All publications & preprints"}
            </h2>
          </div>
          <a
            href={scholarHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
          >
            View Google Scholar profile <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Publication scope"
            className="inline-flex rounded-md border border-slate-300 bg-[#f7f7f4] p-1 text-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={scope === "selected"}
              onClick={() => onScopeChange("selected")}
              className={`rounded px-3.5 py-1.5 font-medium transition ${
                scope === "selected"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Selected ({selectedCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={scope === "all"}
              onClick={() => onScopeChange("all")}
              className={`rounded px-3.5 py-1.5 font-medium transition ${
                scope === "all"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              All ({publications.length})
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2" aria-label="Filter by research area">
            <button
              type="button"
              onClick={() => onAreaFilterChange("all")}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                areaFilter === "all"
                  ? "border-cyan-800 bg-cyan-800 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-slate-500 hover:text-slate-900"
              }`}
            >
              All topics
            </button>
            {researchAreas.map((area) => (
              <button
                key={area.title}
                type="button"
                onClick={() => {
                  onAreaFilterChange(area.title);
                  if (scope === "selected") {
                    onScopeChange("all");
                  }
                }}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  areaFilter === area.title
                    ? "border-cyan-800 bg-cyan-800 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-500 hover:text-slate-900"
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {visiblePublications.map((publication) => (
            <article
              key={publication.id}
              className="grid gap-3 py-6 md:grid-cols-[88px_1fr_auto]"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-1.5">
                <p className="font-mono text-sm font-medium text-cyan-800">{publication.year}</p>
                <span className="rounded border border-slate-200 bg-[#f7f7f4] px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  {publication.type}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-7 text-slate-900">
                  {publication.title}
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  {publication.authors.map((author, index) => (
                    <span key={`${publication.id}-${author}`}>
                      {index > 0 && ", "}
                      {renderAuthor(author)}
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {publication.venue} · {publication.area}
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-2 md:justify-end">
                {publication.href ? (
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 transition hover:bg-cyan-100"
                    aria-label={`Read ${publication.title}`}
                  >
                    Paper <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : null}

                {publication.code ? (
                  <a
                    href={publication.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                    aria-label={`View code for ${publication.title}`}
                  >
                    <Code2 className="h-3 w-3" /> Code
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={() => handleCopyBibtex(publication)}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                  aria-label={`Copy BibTeX for ${publication.title}`}
                >
                  {copiedId === publication.id ? (
                    <>
                      <Check className="h-3 w-3 text-cyan-800" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" /> BibTeX
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>

        {scope === "selected" && areaFilter === "all" && (
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={() => onScopeChange("all")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-800 transition hover:text-cyan-950"
            >
              Show all {publications.length} publications & preprints →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
