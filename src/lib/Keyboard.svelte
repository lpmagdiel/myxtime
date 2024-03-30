<script>
    import useStoreCalc from "./store/calc.store";
    const hoursToMinutes = (hours) => hours * 60;
    const minutesToSeconds = (minutes) => minutes * 60;

    function add(num) {
        const newElements = $useStoreCalc.allIndex;
        newElements[$useStoreCalc.indexActive] = num;
        const index = $useStoreCalc.indexActive == 3 ? 0 : $useStoreCalc.indexActive + 1;
        $useStoreCalc.uploadIndexActive(index);
        $useStoreCalc.uploadsElements(newElements);
    }
    function addTotalTime() {
        const allIndex = $useStoreCalc.allIndex;
        const h = hoursToMinutes( Number(`${allIndex[0]}${allIndex[1]}`) );
        const m = minutesToSeconds( Number(`${allIndex[2]}${allIndex[3]}`) );
        const totals = $useStoreCalc.totalTime;
        $useStoreCalc.addTime( totals + m + minutesToSeconds(h) );
        $useStoreCalc.uploadIndexActive(0);
        $useStoreCalc.uploadsElements([0, 0, 0, 0]);
    }
    function clear() {
        $useStoreCalc.uploadIndexActive(0);
        $useStoreCalc.uploadsElements([0, 0, 0, 0]);
    }
</script>

<div class="keyboard">
    <div class="row">
        <button class="key btn" on:click={() => add(7)}>7</button>
        <button class="key btn" on:click={() => add(8)}>8</button>
        <button class="key btn" on:click={() => add(9)}>9</button>
    </div>
    <div class="row">
        <button class="key btn" on:click={() => add(4)}>4</button>
        <button class="key btn" on:click={() => add(5)}>5</button>
        <button class="key btn" on:click={() => add(6)}>6</button>
    </div>
    <div class="row">
        <button class="key btn" on:click={() => add(1)}>1</button>
        <button class="key btn" on:click={() => add(2)}>2</button>
        <button class="key btn" on:click={() => add(3)}>3</button>
    </div>
    <div class="row">
        <button class="key red btn"></button>
        <button class="key btn" on:click={() => add(0)}>0</button>
        <button class="key btn"></button>
    </div>
</div>
<div class="d-flex">
    <button class="btn-add" on:click={addTotalTime}>SUMAR</button>
    <button class="btn-clear" on:click={clear}>BORRAR</button>
</div>

<style>
    .keyboard {
        width: 80%;
        padding: 10px;
        margin-left: 10%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;
    }
    .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .key {
        padding: 20px;
        font-weight: 800;
    }
    .d-flex {
        display: flex;
        width: 80%;
        gap: 5px;
        margin-left: 10%;
    }
    .btn {
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
        font-size: 1.1rem;
    }
    .btn-add,
    .btn-clear {
        background-color: #33d49d;
        width: 70%;
        padding: 10px;
        border: 1px solid #33d49d;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
    }
    .btn-clear {
        background-color: tomato;
        border: 1px solid tomato;
        width: 30%;
    }
</style>
