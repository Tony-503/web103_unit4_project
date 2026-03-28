import React from "react";
import { Link } from "react-router-dom";


const Cards = () => {
    return (
    
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div class="group bg-surface-container rounded-sm overflow-hidden flex flex-col hover:bg-surface-container-high transition-all duration-300 relative">
<div class="aspect-square bg-surface-container-lowest p-8 flex items-center justify-center relative overflow-hidden">
<img alt="Intel i5 Processor" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" data-alt="Close-up professional product shot of an Intel Core i5 processor on a dark tech background with teal ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT-d8F0lI1MztKMCEGqeNsHB3cp00bYVzqXegKCIE43XzPsWZofdQFVyWkiDy-punmtWEvivR5F3PX_Mxg10NT6_7LWMyIo8C0iE5C_wjhDKeJkDpImedgLljHO1xNZCLxAk5zA_ZsDEjsdJVzl8QgEG8Rl5dOujvGGlMbdX4XIG1W6ehcqeXJ5gKtTmL1F91tIv3zVIXy88wRhzjA04_ifddfNdoJDVsBDuKggbUezRm67kaK4r8SsTAzpu-mPcVnM-zbxOahJQQ-"/>
<div class="absolute bottom-4 left-4">
<span class="text-[10px] font-space bg-primary text-on-primary px-2 py-0.5 font-bold uppercase">In Stock</span>
</div>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="flex justify-between items-start mb-2">
<h3 class="font-space font-bold text-lg text-on-surface uppercase tracking-tight">Intel Core i5-13600K</h3>
<span class="text-primary font-space font-bold text-lg">$200.00</span>
</div>
<div class="flex gap-4 mb-6">
<div class="flex flex-col">
<span class="text-[9px] uppercase text-on-surface-variant font-space">Cores</span>
<span class="text-xs font-bold">14 Cores</span>
</div>
<div class="flex flex-col">
<span class="text-[9px] uppercase text-on-surface-variant font-space">Max Clock</span>
<span class="text-xs font-bold">5.1 GHz</span>
</div>
</div>
<button class="mt-auto w-full py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-space font-bold text-xs uppercase tracking-widest rounded-sm active:scale-95 transition-transform">
                            Select
                        </button>
</div>
</div>
</div>

    );
}   

export default Cards;