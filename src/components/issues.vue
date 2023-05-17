<template>
  <div class="wrap">
  <h1>Shadows in the Dark</h1>
  <br>
  <h3>What is Shadows in the Dark?</h3>
  <p>Shadows in the Dark is a simple interface for GMs to run encounters. The monster cards that are created have a dice roller built into them so
    if a creature has a Str score of 1, clicking that part of the card will roll 1d20+1 and show the results at the bottom. The same applies to attacks. Damage rolls will
    use the dice for the damage that were chosen in the monster builder screen.
  </p>
<br>

<p>
    The monsters are stored in the browser's local storage, so they won't transfer from browser to browser. To clear the created monsters, you need to clear your
    local storage. There will be a button for this soon. Also, to update a current monster, the only way to currently do it is to makea  new monster with the same name, it will 
    overwrite the current one.
</p>
<br>
<p>
    If you spot a bug, you can contact me on discord at
    cha0sunity#5934
  </p>



  <h2>Planned features / fixes</h2>
  <p><strong>First Priority -</strong> functionality to edit and delete exising monsters</p>
  <p>add "and" / "or" to distinguish between multiple attack</p>
  <p><strong style="color: green">partly done - </strong>text can be entered in number fields on create monster page.</p>
  <p>0d for spell atacks</p>
  <p>ability to roll crit damage</p>
  <p>ability to roll with advantage and disadvantage</p>
  
  <p>tool tips</p>
  <p>settings for alternate crit rules and dark mode</p>
  <p>UI fixes and better icons</p>
</div>
  <!-- <h2>Maybe features</h2>
  <p>detect with a dice roll is added to a monster talent and create a clickable trigger for it to roll the dice</p>
  <p>add style to show which elements are clickable</p>
  <p>owlbear rodio SDK tie in</p> -->
</template>

<script>
export default {

}
</script>

<style>
.wrap {
  width: 100%;
  height: 100%;
}
</style>