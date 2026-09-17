import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Layers, 
  Database, 
  Server, 
  CheckCircle2, 
  Radio, 
  ShieldCheck, 
  Zap, 
  Code2, 
  FolderGit2,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onNotify }) {
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState('all');

  const copyUrl = (id, url, label) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    if (onNotify) {
      onNotify(`Copied ${label} link to clipboard!`);
    }
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = ['all', 'Full Stack & Distributed', 'Real-Time & Async', 'E-Commerce', 'Asynchronous APIs'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || p.category === filter);

  // Custom visual schematic for each project
  const renderProjectVisual = (project) => {
    switch (project.id) {
      case 'findmyseat':
        return (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs mb-5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Radio className="w-3 h-3 animate-pulse" />
                2D Interactive Seat Canvas
              </span>
              <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-800/40 px-2 py-0.5 rounded">
                Redis Lock: Active
              </span>
            </div>
            {/* Visual seat grid representation */}
            <div className="grid grid-cols-8 gap-1.5 py-1 max-w-[260px] mx-auto text-center">
              {[...Array(16)].map((_, i) => {
                const isSelected = i === 5 || i === 6;
                const isLocked = i === 10 || i === 11;
                let seatStyle = 'bg-slate-800 text-slate-400 border border-slate-700/60';
                if (isSelected) seatStyle = 'bg-indigo-600 text-white font-bold border-indigo-400 shadow-sm shadow-indigo-500/50';
                if (isLocked) seatStyle = 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50 animate-pulse';
                return (
                  <div key={i} className={`h-6 rounded flex items-center justify-center text-[10px] ${seatStyle}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
              <span>Atomic TTL: 300s</span>
              <span className="text-indigo-300">PostgreSQL ACID commit</span>
            </div>
          </div>
        );

      case 'teamsync':
        return (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs mb-5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Zap className="w-3 h-3 text-emerald-400" />
                WebSocket & Celery Pipeline
              </span>
              <span className="text-sky-400 bg-sky-950/80 border border-sky-800/40 px-2 py-0.5 rounded">
                AWS EC2 Hosted
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">WebSocket /ws/tasks/</span>
                <span className="text-emerald-400 font-bold">● Broadcast</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Celery Worker Queue</span>
                <span className="text-indigo-400">4 Workers Online</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Stripe Webhook Handler</span>
                <span className="text-emerald-300 font-medium">Auto-Renew: 200 OK</span>
              </div>
            </div>
          </div>
        );

      case 'opticoasis':
        return (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs mb-5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-amber-400">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                Django MVT & Razorpay
              </span>
              <span className="text-amber-400 bg-amber-950/80 border border-amber-800/40 px-2 py-0.5 rounded">
                OTP Verified
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Auth Flow</span>
                <span className="text-amber-300">Email/SMS OTP Validated</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Payment Gateway</span>
                <span className="text-emerald-400">Razorpay API Signature Check</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Inventory Management</span>
                <span className="text-indigo-300">PostgreSQL Stock Triggers</span>
              </div>
            </div>
          </div>
        );

      case 'blogbox':
        return (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs mb-5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2.5 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-purple-400">
                <Server className="w-3 h-3 text-purple-400" />
                FastAPI Async Engine
              </span>
              <span className="text-purple-400 bg-purple-950/80 border border-purple-800/40 px-2 py-0.5 rounded">
                JWT Auth
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Security Model</span>
                <span className="text-purple-300">Bearer Token + RBAC</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Media CDN</span>
                <span className="text-sky-300">Cloudinary Async Upload</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-400">Docs Specification</span>
                <span className="text-emerald-400">OpenAPI /docs & Redoc</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Detailed architectures built with direct open-source repositories on GitHub. Demonstrating distributed concurrency, real-time WebSockets, async background task pipelines, and resilient APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Projects (4)' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const hasDualRepos = project.repos.frontend && project.repos.backend;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 group"
              >
                <div className="p-7">
                  {/* Top Bar with Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Architecture Diagram / Interactive Visual */}
                  {renderProjectVisual(project)}

                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                      Engineering Highlights
                    </h4>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 font-mono mb-2">
                      Technologies & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: GitHub Action Buttons */}
                <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {hasDualRepos ? (
                      <>
                        <a
                          href={project.repos.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all shadow-sm"
                          title="View Frontend Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                          <span>Frontend Repo</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>

                        <a
                          href={project.repos.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all"
                          title="View Backend Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Backend Repo</span>
                          <ExternalLink className="w-3 h-3 text-indigo-200" />
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.repos.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-semibold shadow-md shadow-amber-600/30 transition-all"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                        <ExternalLink className="w-3 h-3 text-amber-200" />
                      </a>
                    )}
                  </div>

                  {/* Copy Link button */}
                  <button
                    onClick={() => {
                      const url = hasDualRepos ? project.repos.backend : project.repos.github;
                      copyUrl(project.id, url, `${project.title} Repo`);
                    }}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs transition-colors flex items-center gap-1 font-mono"
                    title="Copy GitHub Link"
                  >
                    {copiedId === project.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
