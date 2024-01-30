<script>
    import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<div class="body-layout bebas-neue-regular">
    <slot></slot>
    <footer>
        <a href="https://coolors.co/eef0f2-c6c7c4-a2999e-846a6a-353b3c">Palette</a>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </footer>
</div>