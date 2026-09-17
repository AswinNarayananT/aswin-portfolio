import React from 'react';
import { educationAndCertifications } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Sigma, 
  Code2 
} from 'lucide-react';

export default function EducationCertifications() {
  const { education, certifications } = educationAndCertifications;

  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Industrial Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal training combining mathematical problem-solving with intensive full-stack and advanced Python software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Education Track</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900/70 border ${
                    item.current ? 'border-indigo-500/40 shadow-indigo-500/5' : 'border-slate-800/80'
                  } backdrop-blur-sm transition-all hover:border-slate-700 shadow-xl`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {item.program}
                    </h4>
                    {item.current && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
                        In Progress
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-1.5">
                    <span>{item.institution}</span>
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/60">
                    {item.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Mathematical Foundation Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">Verified Credentials</h3>
            </div>

            {/* Certification Card */}
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-emerald-500/30 backdrop-blur-sm transition-all hover:border-emerald-500/60 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Industrial Training
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.period}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h4>

                <p className="text-xs font-semibold text-slate-400 mb-3">
                  {cert.organization}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Direct Google Drive Certificate link button */}
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>View Official Certificate</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}

            {/* Mathematics & Algorithmic Thinking Callout */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-800/40 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 text-indigo-400 mb-2">
                <Sigma className="w-5 h-5 text-indigo-400" />
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Mathematical Rigor in Software
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                My background in B.Sc. Mathematics provides deep analytical rigor for designing normalized schemas, analyzing algorithmic time & space complexities (Big-O), optimizing PostgreSQL query plans, and building deterministic state-machines.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
