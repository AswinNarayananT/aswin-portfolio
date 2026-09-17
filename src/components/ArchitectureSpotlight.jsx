import React from 'react';
import { backendHighlights } from '../data/portfolioData';
import { 
  Lock, 
  Clock, 
  Radio, 
  Globe, 
  CheckCircle, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export default function ArchitectureSpotlight() {
  const iconMap = {
    "Concurrency & Race Condition Mitigation": Lock,
    "Asynchronous Workflows & Task Queues": Clock,
    "Real-Time WebSocket Communication": Radio,
    "Cloud Infrastructure & Production Hosting": Globe,
  };

  return (
    <section id="architecture" className="py-20 relative bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Backend Engineering Deep-Dive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">Design Decisions</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            How I solve high-concurrency challenges, eliminate race conditions, offload compute-heavy processes, and ship production backends.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {backendHighlights.map((item, idx) => {
            const Icon = iconMap[item.title] || Layers;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 p-7 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl group"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-emerald-400 group-hover:text-white group-hover:bg-emerald-600 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 font-semibold">
                        Implemented in {item.project}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Tech Badge */}
                <div className="mb-4 inline-block">
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-1 rounded-lg">
                    Tech: {item.tech}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Bullet checklist */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production-tested pattern</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
