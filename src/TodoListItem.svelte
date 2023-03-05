<script>
    export let onRemove = null
    export let item = null
    export let index = 1
</script>

<li class="flex">
    <div class="flex-auto w-10 m-1 bg-slate-700 p-1 rounded text-slate-300 transition animate-appear">
        <p class="text-lg text-slate-100"><span class="bg-slate-500 text-sky-300 rounded px-1">{index}</span> {item?.title}</p>
        <pre class="text-xs w-full">{item?.description}</pre>
    </div>
    <button class="block transition ease-out hover:scale-110 hover:bg-red-500 rounded bg-red-400 text-white align-middle m-1 p-1 leading-none w-10" on:click={onRemove}>X</button> 
</li>
