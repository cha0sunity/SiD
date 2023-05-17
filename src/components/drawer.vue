<template>
  <div class="wrap">
    <!-- <img src="../assets/background.PNG" alt="background" class="background" /> -->
    <h2>Monster List</h2>
    <div class="list">
      <div v-for="monster in sortedMonsterList" :key="monster" item-style="display: flex; align=center">
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
    this.fetchMonsters();
  },
  // Data properties used by the component
  data() {
    return {
      // List of monsters fetched from local storage
      monsterList: [],
      // Array to track the checked state of checkboxes
      isChecked: [],
    };
  },
  // Computed property for sorted monsterList
  computed: {
    sortedMonsterList() {
      return this.monsterList.sort((a, b) =>
        a.monsterName.localeCompare(b.monsterName)
      );
    },
  },
  // Methods used by the component
  methods: {
    // Emits an event with the checked state of checkboxes
    emitChecked() {
      this.$emit("checkBoxesSelected", this.isChecked);
    },

    fetchMonsters() {
      this.monsterList = [];

      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("SiD-")) {
          const monster = JSON.parse(localStorage.getItem(key));
          this.monsterList.push(monster);
        }
      });
    },
  },
};
</script>


<style>

.list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
/* .background {
  background-image: url('../assets/background.PNG');
  position: absolute;
} */
</style>