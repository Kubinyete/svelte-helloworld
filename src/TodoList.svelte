<script>
    import TodoListItem from "./TodoListItem.svelte";
    
    let title
    let description
    let canInsert = false
    let items = []

    function insertItem(e) {
        if (!title || !description) return
        
        items.push({
            title: title,
            description: description 
        })

        items = items
        title = ""
        description = ""
    }

    function removeItem(index) {
        return () => {
            items = items.filter((_, i) => i != index)
        }
    }

    $: canInsert = title && description
</script>

<ul>
    {#each items as item, i}
        <TodoListItem item={item} index={i + 1} onRemove={removeItem(i)}/>
    {/each}

    <div class="bg-slate-700 p-1 rounded text-slate-300 m-1">
        <p class="text-xs">Total: {items.length}</p>

        <input class="block bg-transparent outline-none" bind:value={title} type="text" placeholder="Item title">
        <input class="block bg-transparent outline-none" bind:value={description} type="text" placeholder="Description...">
        <button disabled={!canInsert} class="disabled:hidden transition ease-out hover:bg-green-500 rounded bg-green-400 p-2 text-white align-middle"on:click={insertItem}>Add</button>  
    </div>
</ul>
