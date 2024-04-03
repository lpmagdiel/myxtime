<script>
    export let isOpen = false;
    const date = new Date();
    const mounthString = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const mounthCalendar = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstDayCalendar = new Date(date.getFullYear(), date.getMonth(), 1);
    const minDay = firstDayCalendar.getDay();
    const maxDays = mounthCalendar.getDate();
    const weekDays = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
    const mounth = [];

    const weekDay = (day) => day < minDay;

    for (let day = 0; day <= maxDays; day++) {
        mounth.push({
            void: weekDay(day),
            date: day,
        });
    }
</script>

<div class="calendar">
    <h2>{mounthString[date.getMonth()]}</h2>
    <div class="table">
        {#each weekDays as wd}
            <div class="center">{wd}</div>
        {/each}
        {#each mounth as m}
            {#if m.void}
                <div class="void"></div>
            {:else if m.date == date.getDate()}
                <div class="center active">{m.date}</div>
            {:else}
                <div class="center">{m.date}</div>
            {/if}
        {/each}
    </div>
    <div class="cetralized">
        <button on:click={() => (isOpen = false)}>
            <img src="/cancel.png" alt="close" />
        </button>
    </div>
</div>

<style>
    .calendar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #13171f;
        width: 100%;
        height: 100%;
    }
    .calendar h2 {
        background-color: gold;
        padding: 5px;
    }
    .table {
        margin: 40px 10px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    .center {
        text-align: center;
        padding: 4px;
        margin: 2px;
        user-select: none;
    }
    .cetralized {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
    .active {
        border: 1px solid gold;
        border-radius: 4px;
    }
</style>
