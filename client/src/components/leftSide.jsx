import React from "react";

const Header = () => {
  return (
      
    
<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-[#0f141a] flex flex-col py-6 gap-2 shadow-[40px_0_40px_rgba(0,255,194,0.05)] z-40">
<div className="px-6 mb-8">
<div className="text-[#aaffdc] font-space text-xs tracking-widest uppercase mb-1">COMPONENTS</div>
<div className="text-on-surface-variant text-[10px] uppercase">Build Configuration</div>
</div>
<nav className="flex flex-col">
<a className="flex items-center gap-3 bg-[#151a21] text-[#aaffdc] border-l-4 border-[#aaffdc] px-4 py-3 font-space text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined text-lg">memory</span>
<span>CPU</span>
</a>
<a className="flex items-center gap-3 text-slate-400 px-4 py-3 hover:bg-[#1b2028] font-space text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined text-lg">developer_board</span>
<span>GPU</span>
</a>
<a className="flex items-center gap-3 text-slate-400 px-4 py-3 hover:bg-[#1b2028] font-space text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined text-lg">memory_alt</span>
<span>RAM</span>
</a>
<a className="flex items-center gap-3 text-slate-400 px-4 py-3 hover:bg-[#1b2028] font-space text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined text-lg">database</span>
<span>Storage</span>
</a>
<a className="flex items-center gap-3 text-slate-400 px-4 py-3 hover:bg-[#1b2028] font-space text-sm font-medium hover:translate-x-1 transition-transform" href="#">
<span className="material-symbols-outlined text-lg">computer</span>
<span>Case</span>
</a>
</nav>
<div className="mt-auto px-4">
<button className="w-full py-3 bg-surface-container-high border border-outline-variant/20 text-xs font-space uppercase tracking-widest text-on-surface hover:bg-surface-container-highest active:scale-95 transition-all">
          View Summary
        </button>
</div>
</aside>

  )
};

export default Header;