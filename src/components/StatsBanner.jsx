import React from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  GitBranch, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Layers 
} from 'lucide-react';

export default function StatsBanner() {
  const highlights = [
    {
      icon: Server,
      title: "Backend-First Architecture",
      value: "Django & FastAPI",
      desc: "Robust RESTful APIs, MVT patterns, and asynchronous endpoints with Pydantic validation.",
      color: "from-indigo-500 to-indigo-600",
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/50",
    },
    {
      icon: Zap,
      title: "Distributed Concurrency",
      value: "Redis Distributed Locks",
      desc: "Zero race condition seat booking systems and high-throughput memory caching.",
      color: "from-emerald-500 to-emerald-600",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
    },
    {
      icon: Activity,
      title: "Async & Real-Time",
      value: "Celery & WebSockets",
      desc: "Asynchronous task queues offloaded to background workers and instant live socket events.",
      color: "from-sky-500 to-sky-600",
      accent: "text-sky-400",
      border: "hover:border-sky-500/50",
    },
    {
      icon: ShieldCheck,
      title: "Cloud Deployment & Hosting",
      value: "AWS EC2 & Nginx",
      desc: "Production deployments on Ubuntu EC2 with Nginx reverse proxy, SSL/TLS, and Gunicorn WSGI.",
      color: "from-purple-500 to-purple-600",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50",
    },
  ];

  return (
    <section className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/90 ${item.border} group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md shadow-black/40`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      {item.title}
                    </span>
                    <h3 className={`text-base font-bold ${item.accent} tracking-tight`}>
                      {item.value}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
