<script>
    export const getNum = () => {};
    export let index = 0;
    export let number = 0;

    function add(num) {
        number = num;
        index = index == 4 ? 0 : index + 1;
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
    <button class="btn-add" on:click={getNum}>SUMAR</button>
<button class="btn-clear" on:click={getNum}>BORRAR</button>
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
    .d-flex{
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
