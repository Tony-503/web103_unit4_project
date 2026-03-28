import React from "react";
import { Link } from "react-router-dom";
const Cards = () => {
    return (
        <
        aside class="fixed right-0 top-16 h-[calc(100vh-64px)] w-80 bg-surface-container-low p-6 flex flex-col border-l border-outline-variant/5 z-40">
<div class="mb-8">
<h2 class="text-xl font-bold font-space uppercase tracking-tighter text-on-surface mb-1">Build Summary</h2>
<div class="h-1 w-12 bg-primary"></div>
</div>
<div class="flex-1 overflow-y-auto space-y-4 pr-2">

<div class="group bg-surface-container-lowest p-4 rounded-sm border-l-2 border-primary/40 flex justify-between items-center">
<div>
<div class="text-[10px] uppercase font-space text-primary mb-1">Processor</div>
<div class="text-sm font-bold text-on-surface">Intel Core i5-13600K</div>
</div>
<div class="text-right">
<div class="text-sm font-space font-bold">$200.00</div>
<button class="text-[9px] text-error uppercase hover:underline">Remove</button>
</div>
</div>

<div class="p-4 rounded-sm border border-dashed border-outline-variant/30 flex items-center justify-between opacity-50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant">developer_board</span>
<span class="text-xs font-space uppercase">Graphics Card</span>
</div>
<span class="text-[10px] text-on-surface-variant">Pending</span>
</div>
<div class="p-4 rounded-sm border border-dashed border-outline-variant/30 flex items-center justify-between opacity-50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant">memory_alt</span>
<span class="text-xs font-space uppercase">Memory (RAM)</span>
</div>
<span class="text-[10px] text-on-surface-variant">Pending</span>
</div>
<div class="p-4 rounded-sm border border-dashed border-outline-variant/30 flex items-center justify-between opacity-50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant">database</span>
<span class="text-xs font-space uppercase">Storage</span>
</div>
<span class="text-[10px] text-on-surface-variant">Pending</span>
</div>
<div class="p-4 rounded-sm border border-dashed border-outline-variant/30 flex items-center justify-between opacity-50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant">computer</span>
<span class="text-xs font-space uppercase">Case</span>
</div>
<span class="text-[10px] text-on-surface-variant">Pending</span>
</div>
</div>

<div class="mt-auto pt-6 border-t border-outline-variant/20">
<div class="flex justify-between items-end mb-6">
<div class="text-xs font-space uppercase text-on-surface-variant">Estimated Total</div>
<div class="text-3xl font-space font-bold text-primary">$200.00</div>
</div>
<button class="w-full py-4 bg-primary text-on-primary font-space font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-primary-container transition-colors shadow-[0_0_20px_rgba(170,255,220,0.15)] active:scale-95 duration-150">
                    Checkout Configuration
                </button>
</div>
</aside>
    )
}

export default Cards;      