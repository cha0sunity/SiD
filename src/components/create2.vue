<template>
        <form @submit.prevent="saveMonster" class="formArea">
          <div class="inputCol">
            <v-text-field
              v-model="monsterName"
              label="Monster Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
            ></v-text-field>
             <v-select
                label="Alignment"
                class="medInputStyle"
                :items="['Law','Neutral','Chaos']"
                v-model="alignment"
            ></v-select> 
            <v-select
                label="Movement Type"
                class="medInputStyle"
                :items="['Walk','Climb','Fly','Swim','Burrow','Float']"
                v-model="mvType"
              ></v-select>
               <v-select
                label="Movement Range"
                class="medInputStyle"
                :items="['Close','Near','Near x2','Far']"
                v-model="mvDistance"
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
            <div class="inputColRow"> 

              <v-select
                label="Str"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Str"
            ></v-select>

            <v-select
                label="Dex"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Dex"
            ></v-select>

            <v-select
                label="Con"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Con"
            ></v-select>

            <v-select
                label="Int"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Int"
            ></v-select>

            <v-select
                label="Wis"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Wis"
            ></v-select>

            <v-select
                label="Cha"
                class="smallInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6]"
                v-model="Cha"
            ></v-select>

            </div>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </div>
        <!-- column 2 -->
        <div class="inputCol">
          <div>
          <div class="inputColRow">

          <div class="multiForm">
              <v-text-field label="Attack 1" class="medInputStyle" v-model="weaponOne" ></v-text-field>
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
            ></v-select>
              <v-select
                label="Number of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksOne"
            ></v-select>
              <v-select
                label="Number of Damage Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceOne" 
            ></v-select>
              <v-select
                label="Size of Damage Dice"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceOne"  
            ></v-select>

              </div>

             <div class="multiForm" >
              <v-text-field label="Attack 2" class="medInputStyle" v-model="weaponTwo" ></v-text-field>
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
                
            ></v-select>
              <v-select
                label="Number of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksTwo"
                
            ></v-select>
              <v-select
                label="Number of Damage Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceTwo"
                
            ></v-select>
              <v-select
                label="Size of Damage Dice"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceTwo"
                
            ></v-select>
                  </div>

             <div class="multiForm" >
              <v-text-field label="Attack 3" class="medInputStyle" v-model="weaponThree" ></v-text-field>

              <v-select
                label="Attack Bonus"
                class="medInputStyle"
                :items="[-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
                v-model="atkBonusThree"
                
            ></v-select>
              <v-select
                label="Number of Attacks"
                class="medInputStyle"
                :items="[0,1,2,3,4,5]"
                v-model="numOfAttacksThree"
                
            ></v-select>
              <v-select
                label="Number of Damage Dice"
                class="medInputStyle"
                :items="[0,1,2,3,4,5,6,7,8,9,10]"
                v-model="numOfDamageDiceThree"
                
            ></v-select>
              <v-select
                label="Size of Damage Dice"
                class="medInputStyle"
                :items="[4,6,8,10,12]"
                v-model="sizeOfDamageDiceThree"
                
            ></v-select>
                  </div>
                </div>
              </div>
              <div>
                    <v-text-field label="Talent 1" class="largeInputStyle" v-model="talentNameOne" ></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionOne" ></v-text-field>
                  </div>
              <div>
                    <v-text-field label="Talent 2" class="largeInputStyle" v-model="talentNameTwo" ></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionTwo" ></v-text-field>
                  </div>
              <div>
                    <v-text-field label="Talent 3" class="largeInputStyle" v-model="talentNameThree" ></v-text-field>
                    <v-text-field label="Description" class="largeInputStyle" v-model="talentDescriptionThree" ></v-text-field>
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
  width: 570px;
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
  width: 275px;
}
.largeInputStyle {
  width: 450px;
}

</style>