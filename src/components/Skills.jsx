import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Server, 
  Database, 
  Layout, 
  CloudCog, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Code
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryIcons = {
    backend: Server,
    databases: Database,
    frontend: Layout,
    devops: CloudCog,
  };

  const filteredCategories = skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Engineering Arsenal</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Structured skillsets organized by technical discipline, ranging from core backend logic and relational databases to distributed asynchronous queues and modern reactive frontends.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Redis)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Server;
            
            // Determine accent colors by category
            let badgeBg = "bg-indigo-500/10 border-indigo-500/30 text-indigo-400";
            let pillHighlightBg = "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25";
            let defaultPill = "bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600";
            let glowBorder = "hover:border-indigo-500/40";

            if (category.id === "databases") {
              badgeBg = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
              pillHighlightBg = "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25";
              glowBorder = "hover:border-emerald-500/40";
            } else if (category.id === "frontend") {
              badgeBg = "bg-sky-500/10 border-sky-500/30 text-sky-400";
              pillHighlightBg = "bg-sky-500/15 text-sky-300 border-sky-500/40 hover:bg-sky-500/25";
              glowBorder = "hover:border-sky-500/40";
            } else if (category.id === "devops") {
              badgeBg = "bg-amber-500/10 border-amber-500/30 text-amber-400";
              pillHighlightBg = "bg-amber-500/15 text-amber-300 border-amber-500/40 hover:bg-amber-500/25";
              glowBorder = "hover:border-amber-500/40";
            }

            return (
              <div
                key={category.id}
                className={`p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${glowBorder} flex flex-col justify-between shadow-xl shadow-black/20`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${badgeBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                        <span className="text-xs text-slate-400">
                          {category.skills.length} competencies listed
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group relative px-3.5 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                          skill.highlight ? pillHighlightBg : defaultPill
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        )}
                        <span>{skill.name}</span>
                        <span className="text-[10px] opacity-70 px-1 rounded bg-black/30 font-sans">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Sub-Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Category: {category.id.toUpperCase()}</span>
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified in Projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-indigo-600 text-xs text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
