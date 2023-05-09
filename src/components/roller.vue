<template>


  <button @click="diceRoller(rollData.mod)">roll</button>
  <div class="showRolls" v-if="rollOne">
    you rolled a {{ rollOne }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            rollOne: null
        }
    },
    props: ['rollData'],
    watch: { // figure out why this won't undate
        'rollData.mod'(newVal) {
            this.diceRoller(newVal)
        }
    },
    methods: {
        diceRoller(mod) {
           this.rollOne = Math.floor(Math.random() * 21 + mod)
        }
    },
    updated() {
        console.log(this.rollData.mod)
        
    }
}
</script>

<style>

</style>