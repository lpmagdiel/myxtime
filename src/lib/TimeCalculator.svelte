<script>
  import useStoreCalc from "./store/calc.store";
</script>

<div class="digits">
  <div class="d {$useStoreCalc.indexActive==0?'active':''}">{$useStoreCalc.allIndex[0]}</div>
  <div class="d {$useStoreCalc.indexActive==1?'active':''}">{$useStoreCalc.allIndex[1]}</div>
  <div class="d-null">
    <b>:</b>
  </div>
  <div class="d {$useStoreCalc.indexActive==2?'active':''}">{$useStoreCalc.allIndex[2]}</div>
  <div class="d {$useStoreCalc.indexActive==3?'active':''}">{$useStoreCalc.allIndex[3]}</div>
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
