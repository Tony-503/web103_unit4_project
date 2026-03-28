import React from "react";

const Header = () => {
  return (
    <header class="fixed top-0 w-full flex justify-between items-center px-8 h-16 bg-[#0a0e14] z-50">
<div class="text-2xl font-bold tracking-tighter text-[#aaffdc] font-space uppercase">VOLTAGE</div>
<nav class="hidden md:flex items-center gap-8 font-space tracking-wide uppercase text-sm">
<a class="text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1" href="#">Builds</a>
<a class="text-slate-400 hover:text-slate-200 transition-colors" href="#">Benchmarks</a>
<a class="text-slate-400 hover:text-slate-200 transition-colors" href="#">Support</a>
</nav>
<div class="flex items-center gap-6">
<div class="relative group hidden sm:block">
<input class="bg-surface-container-low border-none text-xs px-4 py-2 w-48 focus:ring-1 focus:ring-primary rounded-sm font-space" placeholder="SEARCH HARDWARE..." type="text"/>
</div>
<div class="flex gap-4 text-on-surface-variant">
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">account_circle</span>
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">shopping_cart</span>
</div>
</div>
</header>
  )
};

export default Header;