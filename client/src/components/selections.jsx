import React from "react";
import { Link } from "react-router-dom";
import Cards from "./cards";

const Selections = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
<div class="mb-10 flex items-end justify-between border-b border-outline-variant/10 pb-6">
<div>
<h1 class="text-4xl font-bold font-space tracking-tight text-on-surface uppercase mb-2">Processors</h1>
<p class="text-on-surface-variant text-sm font-light">Select the core heart of your high-performance machine.</p>
</div>


     <Cards/>
        </div>  
        </div>
    );
}

export default Selections;