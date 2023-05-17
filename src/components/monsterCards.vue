<template>
  <v-card>
      <div class="mCard">
      <v-card-item>
        
        <v-card-title>
          <h2 class='mCardTitle'>{{ monster.monsterName }}</h2>
        </v-card-title>

      </v-card-item>

      <v-card-text >
        <h3 class="des"> {{ monster.description }}</h3>
        <div class="cardB">
            <div class="statsRow">
                <div class="stats">
                  <div class="stat">
                    AC
                  </div> 
                  <div class="stat">
                    {{ monster.ac }}
                  </div> 
                </div>
                <div class="stats">
                  <div class="stat">
                    HP
                  </div>
                  <div class="stat">
                    {{ monster.hp }}
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    MV
                  </div>
                  <div class="stat">
                    {{ monster.Mv.type }} {{ monster.Mv.distance }}
                    
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    LV
                  </div>
                  <div class="stat">
                    {{ monster.lvl }}
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    AL
                  </div>
                  <div class="stat">
                    {{ monster.alignment }}
                  </div>
                </div>
              </div>

            <div class="abilityRow">
                <div class="abilities" @click="twentyRoll(1, 20, monster.Str)">  
                  <div class="ability">
                    S
                  </div> 
                  <div class="ability">
                    {{ monster.Str }}
                  </div> 
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Dex)"> 
                  <div class="ability">
                    D
                  </div>
                  <div class="ability">
                    {{ monster.Dex }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Con)">
                  <div class="ability">
                    C
                  </div>
                  <div class="ability">
                    {{ monster.Con }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Int)">
                  <div class="ability">
                    I
                  </div>
                  <div class="ability">
                    {{ monster.Int }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Wis)">
                  <div class="ability">
                    W
                  </div>
                  <div class="ability">
                    {{ monster.Wis }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Cha)">
                  <div class="ability">
                    Ch
                  </div>
                  <div class="ability">
                    {{ monster.Cha }}
                  </div>
                </div>
              </div>

          <div class="attackRow" v-for="attack in monster.ATK" :key="attack">
              <div class="attack" v-if="attack.weapon">
                <span class="atk" @click="twentyRoll(1, 20, attack.atkBonus)">ATK {{ attack.numberOfAttacks }}  {{ attack.weapon }} {{ attack.atkBonus }}</span> <span class="atk" @click="damageRoll(attack.numOfDamageDice, attack.sizeOfDamageDice, 0)">({{ attack.numOfDamageDice }}d{{ attack.sizeOfDamageDice }})</span> 
              </div>
            </div>

          <div class="attackRow" v-for="special in monster.Special" :key="special">
              <div class="attack" v-if="special.specialName" >
               <strong>{{ special.specialName }}</strong> - {{ special.specialDescription }}   
              </div>
            </div>

          <div class="rollResults">
            <div class="showRolls">
              <div class="rollArea">
                Attack / Check
              </div>
              <div v-if="twentyRollResult != null || damageRollResult != null">
                <div v-show="!diceOne && !crit && !miss">
                  {{ twentyRollResult }}
                </div>
                <div v-if="crit === true">
                  <strong>Nat 20!</strong>
                </div>
                <div v-if="miss === true">
                  <strong>Nat 1!</strong>
                </div>
                <div v-show="diceOne">
                  -
                </div>
                
              </div>
              
            </div>
            <v-divider class="border-opacity-100" vertical ></v-divider>
            <div class="showRolls" >
              <div class="rollArea">
                Damage
              </div>
              <div v-if="twentyRollResult != null || damageRollResult != null">
                <div v-show="!diceTwo">
                  {{ damageRollResult }}
                </div>
                <div v-show="diceTwo">
                  -
                </div>
              </div>
            </div>
        </div>
        </div>
        </v-card-text>
      </div>
      
  </v-card>
  
</template>

<script>
import Roller from "./roller.vue"
export default {
  data() {
    return {
      twentyRollResult: null,
      damageRollResult: null,
      diceOne: false,
      diceTwo: false,
      crit: false,
      miss: false,
      }
    },
    components: {
      Roller
    },
    props: ['monster'],
    methods: {
      diceRoller(numberOfDice, sidesOfDice, mod) {

            if(Number(numberOfDice) > 1) {
              let total = 0;
              let roll = null;

              for(let i = 1; i <= Number(numberOfDice) ; i++) {
                roll = Math.floor(Math.random() * Number(sidesOfDice)) + 1
                total = Number(total) + Number(roll)
              }

              return total
            }

          let preMod = Math.floor(Math.random() * Number(sidesOfDice)) + 1

          if (sidesOfDice === 20 && preMod === 20){
            this.crit = true
          }

          if (sidesOfDice === 20 && preMod === 1){
            this.miss = true
          }

          let postMod = Number(preMod) + Number(mod)
           return postMod
        },
          twentyRoll(numberOfDice, sidesOfDice, mod) {
            this.diceOne = true
            this.crit = false
            this.miss = false
            setTimeout(() => {
              let twentyRollNum = this.diceRoller(numberOfDice, sidesOfDice, mod)
              this.twentyRollResult = twentyRollNum
              this.diceOne = false
            }, 250)
          },
          damageRoll(numberOfDice, sidesOfDice, mod) {
            this.diceTwo = true
            setTimeout(() => {
              let damageRollNum = this.diceRoller(numberOfDice, sidesOfDice, mod)
              this.damageRollResult = damageRollNum
              this.diceTwo = false
            }, 250)
            
          }
    }

  }
</script>

<style>
.abilities {
flex-direction: column;
padding: 0px 10px 0px 10px;
justify-items: center;
border: 3px solid transparent;
}

.abilities:hover {
background-color: black;
color: white;
border-radius: 10px;
cursor: default;
}

.ability {
display: flex;
align-items: center;
justify-content: center;
padding-left: 1.5px;
padding-right: 1.5px;
}

.abilityRow {
display: flex;
flex-direction: row;
justify-content: center;
padding-bottom: 5px;
border-bottom: 2px solid gray;
}

.atk:hover {
background-color: black;
color: white;
border-radius: 10px;
cursor: default;
}

.attackRow {
display: flex;
flex-direction: row;
padding-bottom: 5px;
}

.cardB {
font-size: large;
}

.des {
display: flex;
flex-wrap: wrap;
padding-bottom: 6px;
}

.mCard {
display: flex;
flex-direction: column;
width: 400px;
box-shadow: 0px 0px 10px 2px black inset;
}

.mCardTitle {
color: white;
text-align: center;
border-radius: 5px;
background-image: url('../assets/card-name-background.PNG');
}

.mDescription {
overflow-wrap: break-word;
}

.rollArea {
border-bottom: solid black 1px;
margin-bottom: 10px;
}

.rollResults {
display: flex;
border-top: 2px solid gray;
align-items: center;
justify-content: center;
height: 90px;
}

.showRolls {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px 35px 0px 35px;
}

.stat {
display: flex;
align-items: center;
justify-content: center;
}

.stats {
flex-direction: column;
padding: 0px 10px 0px 10px;
justify-items: center;
border: 3px solid transparent;
}

.statsArea {
display: flex;
flex-direction: column;
}

.statsRow {
display: flex;
flex-direction: row;
justify-content: center;
padding-bottom: 5px;
border-bottom: 2px solid gray;
}

h2 {
font-size: xx-large;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}


</style>