<script>
    let totalHours = 0;
    let totalMinutes = 0;
  </script>

<div class="totals">
    <h2>Total: {totalHours<10?"0"+totalHours:totalHours}:{totalMinutes<10?"0"+totalMinutes:totalMinutes}</h2>
</div>


<style>
    .totals {
        background-color: #13171f;
        padding: 20px;
        width: 80%;
        margin: 20px 10%;
        border-radius:10px;
        box-sizing: border-box;
        text-align: center;
    }
</style>