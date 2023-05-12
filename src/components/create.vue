<template>
      <div class="formArea">
        <div class="inputCol">
        <v-text-field label="Monster Name" class="largeInputStyle" v-model="this.monsterName"></v-text-field>
        <v-text-field label="Description" class="largeInputStyle" v-model="this.description"></v-text-field>
        <v-select
              label="Alignment"
              class="medInputStyle"
              :items="['Law','Neutral','Chaos']"
              v-model="this.alignment"
            ></v-select>
        <v-select
              label="Movement Type"
              class="medInputStyle"
              :items="['Walk','Fly','Swim','Burrow','Float','Teleport']"
              v-model="this.mvType"
            ></v-select>
        <v-select
              label="Movement Range"
              class="medInputStyle"
              :items="['Close','Near','Near x2','Far','I go Where I want']"
              v-model="this.mvDistance"
            ></v-select>
          
        <div class="inputColRow">

            <v-text-field
          label="AC"
          type="number"   
          step="any"
          min="0"
          ref="input"
          class="smallInputStyle"
          v-model="this.ac"
            ></v-text-field>
        <v-text-field
          label="HP"
          type="number"   
          step="any"
          min="0"
          ref="input"
          class="smallInputStyle"
          v-model="this.hp"
            ></v-text-field>
            <v-text-field
          label="Lvl"
          type="number"   
          step="any"
          min="0"
          ref="input"
          class="smallInputStyle"
          v-model="this.lvl"
            ></v-text-field>
          </div>
          <div class="inputColRow"> 
        <v-text-field
          label="Str"
          type="number"   
          step="any"
          min="-5"
          ref="input"
          class="smallInputStyle"
          v-model="this.Str"
            ></v-text-field>
        <v-text-field
          label="Dex"
          type="number"   
          step="any"
          min="-5"
          ref="input"
          class="smallInputStyle"
          v-model="this.Dex"
            ></v-text-field>
        <v-text-field
          label="Con"
          type="number"   
          step="any"
          min="-5"
          ref="input"
          class="smallInputStyle"
          v-model="this.Con"
            ></v-text-field>
            <v-text-field
          label="Int"
          type="number"   
          step="any"
          min="-5"
          ref="input"
          class="smallInputStyle"
          v-model="this.Int"
            ></v-text-field>
        <v-text-field
          label="Wis"
          type="number"   
          step="any"
          min="-5"
          ref="input"
          class="smallInputStyle"
          v-model="this.Wis"
            ></v-text-field>
          <v-text-field
        label="Cha"
        type="number"   
        step="any"
        min="-5"
        ref="input"
        class="smallInputStyle"
        v-model="this.Cha"
          ></v-text-field>
        
          </div>
        </div>

        <div class="inputCol">
          <div>
            <v-btn prepend-icon="mdi-plus" @click="toggleAttack">Attack</v-btn>
          <div class="inputColRow">

          <div class="multiForm">
              <v-text-field label="Weapon" class="medInputStyle" v-model="this.weaponOne"></v-text-field>
              <v-text-field
                  label="Attack Bonus"
                  type="number"   
                  step="any"
                  min="-5"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.atkBonusOne"
              ></v-text-field>
              <v-text-field
                  label="Number of Attacks"
                  type="number"   
                  step="any"
                  min="1"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.numOfAttacksOne"
              ></v-text-field>
              <v-text-field
                  label="Number of Damage Dice"
                  type="number"   
                  step="any"
                  min="1"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.numOfDamageDiceOne"
              ></v-text-field>
              <v-text-field
                  label="Size of Damage Dice"
                  type="number"   
                  step="2"
                  min="4"
                  max="12"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.sizeOfDamageDiceOne"
              ></v-text-field>
              </div>

             <div class="multiForm" v-if="secondAttack">
              <v-text-field label="Weapon" class="medInputStyle" v-model="this.weaponTwo"></v-text-field>
              <v-text-field
                  label="Attack Bonus"
                  type="number"   
                  step="any"
                  min="-5"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.atkBonusTwo"
              ></v-text-field>
              <v-text-field
                  label="Number of Attacks"
                  type="number"   
                  step="any"
                  min="1"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.numOfAttacksTwo"
              ></v-text-field>
              <v-text-field
            label="Number of Damage Dice"
            type="number"   
            step="any"
            min="1"
            ref="input"
            class="medInputStyle"
            v-model="this.numOfDamageDiceTwo"
        ></v-text-field>
              
              <v-text-field
                  label="Size of Damage Dice"
                  type="number"   
                  step="2"
                  min="4"
                  max="12"
                  ref="input"
                  class="medInputStyle"
                  v-model="this.sizeOfDamageDiceTwo"
              ></v-text-field>
                  </div>
                </div>
              </div>
              <div>
                    <v-btn prepend-icon="mdi-plus" @click="toggleSpecial">Special</v-btn>
                    <v-text-field label="Special Name" class="largeInputStyle" v-model="specialNameOne"></v-text-field>
                    <v-text-field label="Special Description" class="largeInputStyle" v-model="specialDescriptionOne"></v-text-field>
                  </div>
              <div v-if="secondSpecial">
                    <v-text-field label="Special Name" class="largeInputStyle" v-model="specialNameTwo"></v-text-field>
                    <v-text-field label="Special Description" class="largeInputStyle" v-model="specialDescriptionTwo"></v-text-field>
                  </div>
            </div>
            <button @click="saveMonster">Save</button>
          </div>

        
</template>

<script>
export default {
  data() {
    return {
      secondAttack: false,
      secondSpecial: false,
      monsterName: null,
      description: null,
      alignment: null,
      ac: null,
      hp: null,
      lvl: null,
      Str: null,
      Dex: null,
      Con: null,
      Int: null,
      Wis: null,
      Cha: null,
      weaponOne: null,
      atkBonusOne: null,
      numOfAttacksOne: null,
      numOfDamageDiceOne: null,
      sizeOfDamageDiceOne: null,
      weaponTwo: null,
      atkBonusTwo: null,
      numOfAttacksTwo: null,
      numOfDamageDiceTwo: null,
      sizeOfDamageDiceTwo: null,
      specialNameOne: null,
      specialDescriptionOne: null,
      specialNameTwo: null,
      specialDescriptionTwo: null,
      mvType: null,
      mvDistance: null
    }
  },
  methods: {
    toggleAttack() {
      this.secondAttack = !this.secondAttack
    },
    toggleSpecial() {
      this.secondSpecial = !this.secondSpecial
    },
    saveMonster() {
      let keyName;
      const monster = {
      monsterName: this.monsterName,
      description: this.description,
      alignment: this.alignment,
      ac: this.ac,
      hp: this.hp,
      Mv:{
        type: this.mvType,
        distance: this.mvDistance
      },
      lvl: this.lvl,
      Str: this.Str,
      Dex: this.Dex,
      Con: this.Con,
      Int: this.Int,
      Wis: this.Wis,
      Cha: this.Cha,
      ATK: [{
        weapon: this.weaponOne,
        numberOfAttacks: this.numOfAttacksOne,
        atkBonus: this.atkBonusOne,
        numOfDamageDice: this.numOfDamageDiceOne,
        sizeOfDamageDice: this.sizeOfDamageDiceOne,
      },
        {
          weapon: this.weaponTwo,
          numberOfAttacks: this.numOfAttacksTwo,
          atkBonus: this.atkBonusTwo,
          numOfDamageDice: this.numOfDamageDiceTwo,
          sizeofDamageDice: this.sizeOfDamageDiceTwo,
        }
      ],
      Special:[{
        specialName: this.specialNameOne,
        specialDescription: this.specialDescriptionOne
      },
      {
        specialName: this.specialNameTwo,
        specialDescription: this.specialDescriptionTwo
      }]      
    }
    keyName = "SiD-" + this.monsterName;
    localStorage.setItem(keyName, JSON.stringify(monster));

    this.monsterName = null
    this.description = null
    this.alignment = null
    this.numberOfAttack = null
    this.ac = null
    this.hp = null
    this.lvl = null
    this.Str = null
    this.Dex = null
    this.Con = null
    this.Int = null
    this.Wis = null
    this.Cha = null
    this.weaponOne = null
    this.atkBonusOne = null
    this.numOfDamageDiceOne = null
    this.sizeOfDamageDiceOne = null
    this.weaponTwo = null
    this.atkBonusTwo = null
    this.numOfDamageDiceTwo = null
    this.sizeOfDamageDiceTwo = null
    this.specialNameOne = null
    this.specialNameTwo = null

    this.emitUpdate()
  },
  emitUpdate() {
    this.$emit('monsterAdded')
  }
}
}
</script>

<style>
.formArea {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
/* .multiForm {
  display: flex;
  flex-direction: column;
  padding: 2px 2px 2px
} */
.multiForm .medInputStyle {
  margin-right: 5px;
}
.inputCol {
  display: flex;
  flex-direction: column;
  width: 540px;
  margin-right: 20px;
}
.inputColRow {
  display: flex;
  flex-direction: row;
}

.smallInputStyle {
  width: 75px;
  height: 75px;
}
.medInputStyle {
  width: 250px;
}
.largeInputStyle {
  width: 450px;
}
</style>