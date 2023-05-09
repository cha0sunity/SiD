<template>

  <div>

  <!-- <n-drawer v-model:show="active" :width="502" :placement="placement" content-style="box-shadow: 0px 0px 10px 0px black inset;"> -->

        <div >
            <h2>Here Be Monsters</h2>
            <div class="list" v-for="monster in placeholderMonsters" :key="monster" item-style="display: flex; align=center">
                    <input type="checkbox" :value="monster" v-model="isChecked" @change="emitChecked">
                      {{ monster.enemyName }}

      </div>

        </div>

  <!-- </n-drawer> -->
  </div>
</template>

<script>


export default {
    
    props: ['placeholderMonsters'],
    data() {
        return {
            monsterList: ['goblin', 'kobold'],
            isChecked: []
        }
    },
    methods: {
      emitChecked() {
        this.$emit('checkBoxesSelected', this.isChecked)
      }
    }
  }
</script>

<style>

/* .drawer {
    box-shadow: 0px 00px 20px 5px black inset; 
} */
</style>