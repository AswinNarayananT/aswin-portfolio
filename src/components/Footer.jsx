import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  ArrowUp, 
  Heart, 
  Code2, 
  Server, 
  ShieldCheck 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-[#020617] rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-xs">
                    AN
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalDetails.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Software Developer with expertise across Python, Django, FastAPI, React.js, and scalable cloud architectures.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Python | Software | Full Stack | Backend Roles</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  Overview / Hero
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  Skills Arsenal
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-indigo-400 transition-colors">
                  Architecture Decisions
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">
                  Education & Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Repos (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect With Me
            </h4>
            <p className="text-xs text-slate-400">
              Check out open source repositories and professional updates.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalDetails.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all shadow-sm"
                title="Phone"
              >
                <Phone className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 block">
                Direct Contact: {personalDetails.phone}
              </span>
            </div>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Aswin Narayanan T.</span>
            <span>•</span>
            <span className="text-slate-400">React + Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
