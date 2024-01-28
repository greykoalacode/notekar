<script>
    import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<div class="body-layout">
    <slot></slot>
    <footer>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </footer>
</div>