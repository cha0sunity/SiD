<template>
        <form @submit.prevent="saveMonster" class="formArea">
          <div class="inputCol">
            <v-text-field
              v-model="monsterName"
              label="Monster Name"
              required
              density="compact"
            ></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
              density="compact"
            ></v-text-field>
             <v-select
                label="Alignment"
                class="medInputStyle"
                :items="['Law','Neutral','Chaos']"
                v-model="alignment"
                density="compact"
            ></v-select> 
            <v-select
                label="Move Type"
                class="medInputStyle"
                :items="['Walk','Climb','Fly','Swim','Burrow','Float']"
                v-model="mvType"
                density="compact"
              ></v-select>
               <v-select
                label="Move Range"
                class="medInputStyle"
                :items="['Close','Near','Near x2','Far']"
                v-model="mvDistance"
                density="compact"
              ></v-select>
               <div class="inputColRow">
                <v-select
                label="AC"
                class="smallInputStyle"
                :items="[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
                v-model="ac"

            ></v-select> 
             
              <v-text-field
                label="HP"
                type="number"   
                step="any"
                min="0"
                ref="input"
                class="smallInputStyle"
                v-model="hp"

              ></v-text-field>

              <v-select
                label="Lvl"
                class="smallInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
                v-model="lvl"

            ></v-select>

            </div>
            <div class="inputColRow" style="margin-top: 15px;"> 

              <v-select
                label="S"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Str"
                density="compact"
            ></v-select>

            <v-select
                label="D"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Dex"
                density="compact"
            ></v-select>

            <v-select
                label="C"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Con"
                density="compact"
            ></v-select>

            <v-select
                label="I"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Int"
                density="compact"
            ></v-select>

            <v-select
                label="W"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Wis"
                density="compact"
            ></v-select>

            <v-select
                label="Ch"
                class="smallInputStyle"
                :items="[-3,-2,-1,0,1,2,3,4,5,6]"
                v-model="Cha"
                density="compact"
            ></v-select>

            </div>
          <v-btn type="submit" block class="mt-2">Save</v-btn>
        </div>
        <!-- column 2 -->
        <div class="inputCol">
          <div>
          <div class="inputColRow">

          <div class="multiForm">
              <v-text-field label="Attack 1" class="medInputStyle" v-model="weaponOne" density="compact"></v-text-field>
              <!-- <v-select
                label="Range"
                class="medInputStyle"
                :items="['Close','Near','Far']"
                v-model="this.rangeOne"
                :rules="[rules.required]"
            ></v-select> -->
              <v-select
                label="Attack Bonus"
                class="medInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
                v-model="atkBonusOne"
                density="compact"
            ></v-select>
              <v-select
                label="# of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksOne"
                density="compact"
            ></v-select>
              <v-select
                label="# of Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceOne" 
                density="compact"
            ></v-select>
              <v-select
                label="Dice Size"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceOne"  
                density="compact"
            ></v-select>

              </div>

             <div class="multiForm" >
              <v-text-field label="Attack 2" class="medInputStyle" v-model="weaponTwo" density="compact"></v-text-field>
              <!-- <v-select
                label="Range"
                class="medInputStyle"
                :items="['Close','Near','Far']"
                v-model="this.rangeTwo"
                :rules="[rules.required]"
            ></v-select> -->
              <v-select
                label="Attack Bonus"
                class="medInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
                v-model="atkBonusTwo"
                density="compact"
            ></v-select>
              <v-select
                label="# of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksTwo"
                density="compact"
            ></v-select>
              <v-select
                label="# of Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceTwo"
                density="compact"
            ></v-select>
              <v-select
                label="Dice Size"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceTwo"
                density="compact"
            ></v-select>
                  </div>

             <div class="multiForm" >
              <v-text-field label="Attack 3" class="medInputStyle" v-model="weaponThree" density="compact"></v-text-field>

              <v-select
                label="Attack Bonus"
                class="medInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
                v-model="atkBonusThree"
                density="compact"
            ></v-select>
              <v-select
                label="# of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksThree"
                density="compact"
            ></v-select>
              <v-select
                label="# of Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceThree"
                density="compact"
            ></v-select>
              <v-select
                label="Dice Size"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceThree"
                density="compact"
            ></v-select>
                  </div>
                </div>
              </div>
              <div>
                    <v-text-field label="Talent 1" class="largeInputStyle" v-model="talentNameOne" density="compact"></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionOne" density="compact"></v-text-field>
                  </div>
              <div>
                    <v-text-field label="Talent 2" class="largeInputStyle" v-model="talentNameTwo" density="compact"></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionTwo" density="compact"></v-text-field>
                  </div>
              <div>
                    <v-text-field label="Talent 3" class="largeInputStyle" v-model="talentNameThree" density="compact"></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionThree" density="compact"></v-text-field>
                  </div>
            </div>
          </form>

        
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
      weaponThree: null,
      atkBonusThree: null,
      numOfAttacksThree: null,
      numOfDamageDiceThree: null,
      sizeOfDamageDiceThree: null,
      talentNameOne: null,
      talentDescriptionOne: null,
      talentNameTwo: null,
      talentDescriptionTwo: null,
      talentNameThree: null,
      talentDescriptionThree: null,
      mvType: null,
      mvDistance: null,
      // rules: {
      //   required: [v => !!v || 'Selection is required.']
      // },
      // textBlank: [
      //   value => {
      //     if (value) return true

      //     return 'Nat 1'
      //   }
      // ],
      // testNum: [
      //   value => {
      //     if (value) return true

      //     if (typeof(value) !== Number){
      //       return "Please enter a number"
      //     }

          
      //   }
      // ]
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
        // range: this.rangeOne,
        numberOfAttacks: this.numOfAttacksOne,
        atkBonus: this.atkBonusOne,
        numOfDamageDice: this.numOfDamageDiceOne,
        sizeOfDamageDice: this.sizeOfDamageDiceOne,
      },
        {
          weapon: this.weaponTwo,
          // range: this.rangeTwo,
          numberOfAttacks: this.numOfAttacksTwo,
          atkBonus: this.atkBonusTwo,
          numOfDamageDice: this.numOfDamageDiceTwo,
          sizeOfDamageDice: this.sizeOfDamageDiceTwo,
        },
        {
          weapon: this.weaponThree,
          // range: this.rangeTwo,
          numberOfAttacks: this.numOfAttacksThree,
          atkBonus: this.atkBonusThree,
          numOfDamageDice: this.numOfDamageDiceThree,
          sizeOfDamageDice: this.sizeOfDamageDiceThree,
        }
      ],
      Special:[{
        specialName: this.talentNameOne,
        specialDescription: this.talentDescriptionOne
      },
      {
        specialName: this.talentNameTwo,
        specialDescription: this.talentDescriptionTwo
      },
      {
        specialName: this.talentNameThree,
        specialDescription: this.talentDescriptionThree
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
    this.weaponThree = null
    this.atkBonusThree = null
    this.numOfDamageDiceThree = null
    this.sizeOfDamageDiceThree = null
    this.talentNameOne = null
    this.talentNameTwo = null 
    this.talentNameThree = null 
    this.mvType = null
    this.mvDistance = null
    this.numOfAttacksOne = null
    this.numOfAttacksTwo = null
    this.numOfAttacksThree = null
    this.talentDescriptionOne = null
    this.talentDescriptionTwo = null
    this.talentDescriptionThree = null
    // this.rangeOne = null
    // this.rangeTwo = null
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
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
  width: 500px;
  margin-right: 10px;
}
.inputColRow {
  display: flex;
  flex-direction: row;
}

.smallInputStyle {
  width: 50px;
  height: 50px;
}
.medInputStyle {
  width: 175px;
}
.largeInputStyle {
  width: 500px;
}

</style>