<template>

  <div>
      <div >
        <h2>Here Be Monsters</h2>
        <div class="list" v-for="monster in monsterList" :key="monster" item-style="display: flex; align=center">
            <input type="checkbox" :value="monster" v-model="isChecked" @change="emitChecked">
              {{ monster }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Runs when the component is mounted on the page
  mounted() {
    // Fetches the monsters from local storage
    this.fetchMonsters()
  },
  // Props that can be passed to this component from its parent
  props: ['placeholderMonsters'],
  // Data properties used by the component
  data() {
    return {
      // List of monsters fetched from local storage
      monsterList: [],
      // Array to track the checked state of checkboxes
      isChecked: []
    }
  },
  // Methods used by the component
  methods: {
    // Emits an event with the checked state of checkboxes
    emitChecked() {
      this.$emit('checkBoxesSelected', this.isChecked)
    },
    // Fetches monsters from local storage and updates the monsterList
    fetchMonsters() {
      // Clear the monsterList
      this.monsterList = []
      // Iterate over the keys in local storage
      Object.keys(localStorage).forEach((key) => {
        // If the key starts with "SiD-", it is a monster object
        if(key.startsWith("SiD-")){
          // Parse the monster object from local storage
          const monsterName = JSON.parse(localStorage.getItem(key))
          // Add the monster name to the monsterList
          this.monsterList.push(monsterName.monsterName)
        }
      })
    }
  }
}
</script>

<style>

/* .drawer {
    box-shadow: 0px 00px 20px 5px black inset; 
} */
</style>