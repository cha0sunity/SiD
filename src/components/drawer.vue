<template>

  <div>
      <div >
        <h2>Here Be Monsters</h2>
        <div class="list" v-for="monster in monsterList" :key="monster" item-style="display: flex; align=center">
            <input type="checkbox" :value="monster" v-model="isChecked" @change="emitChecked">
              {{ monster.monsterName }}
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

    fetchMonsters() {
      this.monsterList = []

      Object.keys(localStorage).forEach((key) => {
        if(key.startsWith("SiD-")){
          const monster = JSON.parse(localStorage.getItem(key))
          // const monster = JSON.parse(localStorage.getItem(key))
          this.monsterList.push(monster)
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