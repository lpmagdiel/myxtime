<script>
  let totalHours = 0;
  let totalMinutes = 0;
  export let active = 0;
  export let activeValue = 0;
  let time = [0,0,0,0];

  $: if(active){
    console.log({active});
    time[active-1] = activeValue;
    if(active == 4) active = 0;
  }
</script>

<div class="digits">
  <div class="d {active==0?'active':''}">{time[0]}</div>
  <div class="d {active==1?'active':''}">{time[1]}</div>
  <div class="d-null">
    <b>:</b>
  </div>
  <div class="d {active==2?'active':''}">{time[2]}</div>
  <div class="d {active==3?'active':''}">{time[3]}</div>
</div>

<style>
  .digits {
    width: 80%;
    margin: 50px 10%;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
  .d{
    padding: 10px;
    border: 2px solid #4e4e4e;
    border-radius: 10px;
  }
  .d-null{
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
  }
  .active{
    border-color: #33D49D;
  }
</style>
