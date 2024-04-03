<script>
    import useStoreCalc from "./store/calc.store";
    import Calendar from "./Calendar.svelte";
    let valuePerHours = 0;
    let calendarActive = false;

    const hours = (s) => Math.floor(s / 3600);
    const minutes = (s) => Math.floor((s - hours(s) * 3600) / 60);

    const timeString = (t) => (t < 10 ? "0" + t : t);

    const addValuePerHour = () => {
        const valuePerHour = Number(prompt("Cuanto cobras la hora?"));
        const h = hours($useStoreCalc.totalTime);
        const m = Math.round ((100 * minutes($useStoreCalc.totalTime)) / 60);
        valuePerHours = (h*valuePerHour)+(m*0.01);
    }

    const changeCalendar = () => {
        calendarActive = !calendarActive;
    }
</script>

{#if calendarActive}
<Calendar bind:isOpen={calendarActive}/>    
{/if}
<div class="center">
    <div class="totals">
        <h3>
            Total: {timeString(hours($useStoreCalc.totalTime))}:{timeString(
                minutes($useStoreCalc.totalTime),
            )}
        </h3>
        <p>{valuePerHours} €</p>
    </div>
    <div class="vertical-center">
        <button on:click={addValuePerHour}>
            <img src="/coin.png" alt="price">
        </button>
        <button on:click={changeCalendar}>
            <img src="/calendar.png" alt="price">
        </button>
    </div>
</div>

<style>
    .totals {
        background-color: #13171f;
        padding: 20px;
        margin-top: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    .vertical-center{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100px;
    }
</style>
