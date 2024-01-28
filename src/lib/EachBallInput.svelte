<script>
    let options = [
        {
            runs: 1,
            label: "1",
            isWicket: false,
            isWide: false,
            isNoBall: false
        },
        {
            runs: 2,
            label: "2",
            isWicket: false,
            isWide: false,
            isNoBall: false
        },
        {
            runs: 3,
            label: "3",
            isWicket: false,
            isWide: false,
            isNoBall: false
        },
        {
            runs: 4,
            label: "4",
            isWicket: false,
            isWide: false,
            isNoBall: false
        },
        {
            runs: 6,
            label: "6",
            isWicket: false,
            isWide: false,
            isNoBall: false
        },
        {
            runs: 1,
            label: "Wide",
            isWicket: false,
            isWide: true,
            isNoBall: false
        },
        {
            runs: 1,
            label: "No Ball",
            isWicket: false,
            isWide: false,
            isNoBall: true
        },
        {
            runs: 0,
            label: "Wicket",
            isWicket: true,
            isWide: false,
            isNoBall: true
        }
    ];

</script>

<div class="each-ball">
    <p>Ball 1</p>
    <div class="pure-g">
        {#each options as option}
        <button class="pure-u-1-4 each-ball-button">{option.label}</button>
        {/each}
    </div>
    <div class="pure-g">
        <button class="pure-u-1-2">Previous</button>
        <button class="pure-u-1-2">Next</button>
    </div>
</div>