<script>
    import useStoreCalc from "./store/calc.store";

    const hours = (s) => Math.floor(s / 3600);
    const minutes = (s) => Math.floor((s - hours(s) * 3600) / 60);

    const timeString = (t) => (t < 10 ? "0" + t : t);
</script>

<div class="totals">
    <h2>
        Total: {timeString(hours($useStoreCalc.totalTime))}:{timeString(
            minutes($useStoreCalc.totalTime),
        )}
    </h2>
</div>

<style>
    .totals {
        background-color: #13171f;
        padding: 20px;
        width: 80%;
        margin: 20px 10%;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
    }
</style>
