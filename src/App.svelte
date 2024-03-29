<script>
  import Keyboard from "./lib/Keyboard.svelte";
  import TimeCalculator from "./lib/TimeCalculator.svelte";
  import TimeDisplay from "./lib/TimeDisplay.svelte";
  let indexNumber = 0;
  let valueNumber = 0;
</script>

<section>
  <TimeDisplay />
  <TimeCalculator bind:activeValue={valueNumber} bind:active={indexNumber}/>
  <Keyboard bind:index={indexNumber} bind:number={valueNumber}/>
</section>
