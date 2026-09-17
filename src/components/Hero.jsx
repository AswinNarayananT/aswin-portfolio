import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { 
  Terminal, 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink,
  Layers, 
  Server, 
  Zap, 
  Database,
  Cpu,
  Globe,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onNotify }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('fastapi');
  const [roleIndex, setRoleIndex] = useState(0);

  const targetRoles = personalDetails.targetRoles || [
    "Python Developer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % targetRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [targetRoles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    if (onNotify) {
      onNotify(`Copied ${personalDetails.email} to clipboard!`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const terminalSnippets = {
    fastapi: {
      command: 'uvicorn core.main:app --host 0.0.0.0 --port 8000 --workers 4',
      lines: [
        { type: 'info', text: 'INFO:     Started server process [PID: 34912]' },
        { type: 'info', text: 'INFO:     Waiting for application startup.' },
        { type: 'success', text: 'SUCCESS:  PostgreSQL connection pool initialized (min: 5, max: 20)' },
        { type: 'success', text: 'SUCCESS:  Redis cluster connected: redis://127.0.0.1:6379/0' },
        { type: 'info', text: 'INFO:     Application startup complete. Uvicorn running on http://0.0.0.0:8000' },
        { type: 'req', text: 'POST /api/v1/tickets/lock-seat -> 200 OK (latency: 12ms)' },
        { type: 'accent', text: '⚡ WebSocket channel open: ws://teamsync.io/ws/chat/board-8' },
      ],
    },
    celery: {
      command: 'celery -A core worker --loglevel=INFO -c 4 -Q high_priority,default',
      lines: [
        { type: 'info', text: '[2026-09-17 12:45:01,102: INFO/MainProcess] Connected to redis://redis:6379/0' },
        { type: 'info', text: '[2026-09-17 12:45:01,118: INFO/MainProcess] celery@aswin-node ready.' },
        { type: 'success', text: '[Task Dispatched] send_otp_verification[7e9b4] received' },
        { type: 'success', text: '[Task Succeeded] send_otp_verification[7e9b4] in 0.084s' },
        { type: 'req', text: '[Background Queue] 0 pending tasks, 4 active workers' },
        { type: 'accent', text: '🚀 Redis Lock: findmyseat:lock:seat_A14 TTL: 300s [ACQUIRED]' },
      ],
    },
    ec2: {
      command: 'systemctl status nginx gunicorn --no-pager',
      lines: [
        { type: 'info', text: '● gunicorn.service - Gunicorn daemon for Python backend' },
        { type: 'success', text: '✔ Active: active (running) [4 WSGI workers on 127.0.0.1:8000]' },
        { type: 'info', text: '● nginx.service - Reverse proxy & web server' },
        { type: 'success', text: '✔ Active: active (running) [SSL/TLS 443 -> proxy_pass :8000]' },
        { type: 'req', text: 'Proxy route: /api/* -> Python backend | / -> React SPA bundle' },
        { type: 'accent', text: '🌐 AWS EC2 Cloud Host: Ubuntu 24.04 LTS (Security Groups active)' },
      ],
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Details */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-[11px]">Actively Looking For Roles</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Open to Relocation / Remote</span>
            </div>

            {/* Target Job Roles Badge Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1">Target Roles:</span>
              {targetRoles.map((role, idx) => (
                <span
                  key={role}
                  className={`text-xs font-semibold px-3 py-1 rounded-lg border transition-all ${
                    idx === roleIndex
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/30 scale-105'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Name & Primary Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
                  {personalDetails.name}
                </span>
              </h1>

              {/* Dynamic Role Sub-headline */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-lg sm:text-xl font-bold">
                <span className="text-indigo-400 font-mono text-base font-bold bg-indigo-950/80 border border-indigo-800/70 px-3 py-1 rounded-lg shadow-sm">
                  {targetRoles[roleIndex]}
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-slate-300 font-medium text-base">
                  Full Stack & Backend Architecture
                </span>
              </div>
            </div>

            {/* Exact Resume Summary */}
            <div className="relative pl-4 border-l-2 border-indigo-500/70 py-1 bg-slate-900/30 rounded-r-xl pr-3">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalDetails.summary}
              </p>
            </div>

            {/* Tech Highlights Badge Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-indigo-300 border border-indigo-500/20">
                Python & OOPS
              </span>
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-sky-300 border border-sky-500/20">
                Django & DRF
              </span>
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-emerald-300 border border-emerald-500/20">
                FastAPI & Flask
              </span>
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-teal-300 border border-teal-500/20">
                React.js & Redux
              </span>
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-amber-300 border border-amber-500/20">
                PostgreSQL & Redis
              </span>
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800/80 text-purple-300 border border-purple-500/20">
                AWS EC2 & Nginx
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/90 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 hover:border-slate-700 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Direct Contact Meta */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <a
                href={personalDetails.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span className="font-mono">github.com/AswinNarayananT</span>
              </a>

              <a
                href={personalDetails.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span className="font-mono">linkedin.com/in/aswin-nt</span>
              </a>

              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{personalDetails.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Backend & Cloud Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    aswin@cloud-server: ~
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono text-emerald-400">ONLINE</span>
                </div>
              </div>

              {/* Terminal Tab Switchers */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('fastapi')}
                  className={`flex-1 py-2 px-3 text-center transition-all ${
                    activeTab === 'fastapi'
                      ? 'bg-slate-950 text-indigo-400 border-b-2 border-indigo-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
                  }`}
                >
                  FastAPI Engine
                </button>
                <button
                  onClick={() => setActiveTab('celery')}
                  className={`flex-1 py-2 px-3 text-center transition-all ${
                    activeTab === 'celery'
                      ? 'bg-slate-950 text-emerald-400 border-b-2 border-emerald-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
                  }`}
                >
                  Celery & Redis
                </button>
                <button
                  onClick={() => setActiveTab('ec2')}
                  className={`flex-1 py-2 px-3 text-center transition-all ${
                    activeTab === 'ec2'
                      ? 'bg-slate-950 text-sky-400 border-b-2 border-sky-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
                  }`}
                >
                  AWS EC2 & Nginx
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-2.5 bg-slate-950/95 min-h-[290px]">
                {/* Command Line Input */}
                <div className="flex items-center gap-2 text-slate-300 pb-2 border-b border-slate-900">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-indigo-300 font-medium">{terminalSnippets[activeTab].command}</span>
                </div>

                {/* Log Stream */}
                <div className="space-y-1.5 pt-1">
                  {terminalSnippets[activeTab].lines.map((line, idx) => {
                    let color = 'text-slate-400';
                    if (line.type === 'success') color = 'text-emerald-400 font-medium';
                    if (line.type === 'req') color = 'text-sky-300';
                    if (line.type === 'accent') color = 'text-amber-300 font-medium';
                    if (line.type === 'info') color = 'text-slate-400';

                    return (
                      <div key={idx} className={`leading-relaxed ${color}`}>
                        {line.text}
                      </div>
                    );
                  })}
                </div>

                {/* Blinking Cursor */}
                <div className="flex items-center gap-1.5 pt-2 text-slate-500">
                  <span className="text-indigo-400 font-bold">&gt;</span>
                  <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse"></span>
                  <span className="text-[11px] text-slate-600">listening for incoming traffic...</span>
                </div>
              </div>

              {/* Terminal Footer System Metric Badges */}
              <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <Server className="w-3 h-3 text-indigo-400" />
                  Cluster: Healthy
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Zap className="w-3 h-3" />
                  Latency: 12ms
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <Database className="w-3 h-3" />
                  PostgreSQL: Pool 20
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
