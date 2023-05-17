<template>
  <h1>Shadows in the Dark</h1>
  <br>
  <h3>What is Shadows in the Dark?</h3>
  <p>Shadows in the Dark is my attempt and building a simple interface for GMs to run encounters. The monster cards that are created have a dice roller built into them so
    if a creature has a Str score of 1, clicking that part of the card will roll 1d20+1 and show the results at the bottom. The same applies to attacks. Damage rolls will
    use the dice for the damage that were chosen in the monster builder screen.
  </p>
<br>
  <h3>There are some issues...</h3>
  <p>This is the first development project that I intended for others to use. I have no formal training in development and have never laid out a project like this before.
    All of that asside, this was a learning process for me and hopefully someone can get some use out of it. I plan to fix certain things in the future and hopefully implement
    some of Owlbear Rodeo's SDK features. Below are some of the knwon issues and planned updates. If you spot a bug, and I'm sure you will, you can contact me on discord at
    cha0sunity#5934
</p>
<br>
<p>
    One last thing, the monsters are stored in the browser's local storage, so they won't transfer from browser to browser. To clear the created monsters, you need to clear your
    local storage. There will be a button for this soon. Also, to update a current monster, the only way to currently do it is to makea  new monster with the same name, it will 
    overwrite the current one.
  </p>



  <h2>Known issue</h2>
  <p>add "and" / "or" to distinguish between multiple attack</p>
  <p><strong style="color: green">done - </strong>Need 3rd talent</p>
  <p><strong style="color: green">partly done - </strong>text can be entered in number fields on create monster page.</p>
  <p>0d for spell atacks</p>

  <h2>Planned features</h2>
  <p><strong style="color: green">partly done - </strong>either limit number of cards to display, or make it so they drop to the next row at the edge of the screen. probably both</p>
  <p><strong style="color: green">done - </strong>display when a natural 1 or natural 20 is rolled</p>
  <p>ability to roll crit damage</p>
  <p>ability to roll with advantage and disadvantage</p>
  <p>First Priority - functionality to edit and delete exising monsters</p>
  <p>tool tips</p>
  <p>settings for alternate crit rules and dark mode</p>
  <p>UI fixes and better icons</p>

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

</style>