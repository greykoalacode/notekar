<script>
    let strike = 1;
    let nonStrike = 2;

    export function changeStrike(){
        let temp = strike;
        strike = nonStrike;
        nonStrike = temp;
    }
</script>

<div>
    <p>Player {strike}*</p>
    <p>Player {nonStrike}</p>
</div>