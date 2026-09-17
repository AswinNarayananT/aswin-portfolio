import React from 'react';
import { CheckCircle, Info, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 border border-indigo-500/40 text-white shadow-2xl shadow-black/80 backdrop-blur-md">
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-xs font-mono text-slate-200">{message}</span>
        <button
          onClick={onClose}
          className="p-1 text-slate-500 hover:text-slate-300 transition-colors ml-2"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
