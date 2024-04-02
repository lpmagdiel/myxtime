<script>
    import useStoreCalc from "./store/calc.store";
    let valuePerHours = 0;

    const hours = (s) => Math.floor(s / 3600);
    const minutes = (s) => Math.floor((s - hours(s) * 3600) / 60);

    const timeString = (t) => (t < 10 ? "0" + t : t);

    const addValuePerHour = () => {
        const valuePerHour = Number(prompt("Cuanto cobras la hora?"));
        const h = hours($useStoreCalc.totalTime);
        const m = (100 * minutes($useStoreCalc.totalTime)) / 60;
        valuePerHours = (h*valuePerHour)+ Number("0."+m);
    }
</script>

<div class="center">
    <div class="totals">
        <h3>
            Total: {timeString(hours($useStoreCalc.totalTime))}:{timeString(
                minutes($useStoreCalc.totalTime),
            )}
        </h3>
        <p>{valuePerHours} €</p>
    </div>
    <button on:click={addValuePerHour}>$</button>
</div>

<style>
    .totals {
        background-color: #13171f;
        padding: 20px;
        margin: 20px 0px;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        height: 100px;
    }
    .totals p {
        color: #8ba1cc;
    }
    .center{
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 30px;
        gap: 10px;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    button{
        padding: 10px;
        color: #f0f0f0;
        background-color: #10151d;
        border: 2px solid gold;
        border-bottom-width: 5px;
        color: gold;
        font-weight: bold;
        border-radius: 10px;
        height: 50px;
        width: 40px;
    }
</style>
