<template>
  <v-card>
      <div class="mCard">
      <v-card-item>
        
        <v-card-title>
          <h2 class='mCardTitle'>{{ monster.enemyName }}</h2>
        </v-card-title>

      </v-card-item>

      <v-card-text>
        <h3 class="des"> {{ monster.description }}</h3>
            <div class="statsRow">
                <div class="stats">
                  <div class="stat">
                    AC
                  </div> 
                  <div class="stat">
                    {{ monster.AC }}
                  </div> 
                </div>
                <div class="stats">
                  <div class="stat">
                    HP
                  </div>
                  <div class="stat">
                    {{ monster.HP }}
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    MV
                  </div>
                  <div class="stat">
                    {{ monster.MV }}
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    LV
                  </div>
                  <div class="stat">
                    {{ monster.LV }}
                  </div>
                </div>
                <div class="stats">
                  <div class="stat">
                    AL
                  </div>
                  <div class="stat">
                    {{ monster.Alignment }}
                  </div>
                </div>
              </div>

            <div class="abilityRow">
                <div class="abilities" @click="twentyRoll(1, 20, monster.Strength)">  
                  <div class="ability">
                    S
                  </div> 
                  <div class="ability">
                    {{ monster.Strength }}
                  </div> 
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Dextrity)"> 
                  <div class="ability">
                    D
                  </div>
                  <div class="ability">
                    {{ monster.Dextrity }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Constitution)">
                  <div class="ability">
                    C
                  </div>
                  <div class="ability">
                    {{ monster.Constitution }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Intelligence)">
                  <div class="ability">
                    I
                  </div>
                  <div class="ability">
                    {{ monster.Intelligence }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Wisdom)">
                  <div class="ability">
                    W
                  </div>
                  <div class="ability">
                    {{ monster.Wisdom }}
                  </div>
                </div>
                <div class="abilities" @click="twentyRoll(1, 20, monster.Charism)">
                  <div class="ability">
                    Ch
                  </div>
                  <div class="ability">
                    {{ monster.Charism }}
                  </div>
                </div>
              </div>   
          <div class="attackRow">
              <div class="attack">
               ATK {{ monster.ATK.numberOfAttacks }}  <span class="atk" @click="twentyRoll(1, 20, monster.ATK.attackBonus)">{{ monster.ATK.weapon }}  + {{ monster.ATK.attackBonus }}</span> <span class="atk" @click="damageRoll(monster.ATK.numberOfDamageDice, monster.ATK.damageDiceSize, 0)">({{ monster.ATK.numberOfDamageDice }}d{{ monster.ATK.damageDiceSize }})</span> 
              </div>
            </div>
          <p>{{ monster.Special }}</p>
          <div class="rollResults">
            <div class="showRolls">
              <div>
                Attack / Check
              </div>
              <div v-if="twentyRollResult != null || damageRollResult != null">
                {{ twentyRollResult }}
              </div>
              
            </div>
            <v-divider class="border-opacity-100" vertical ></v-divider>
            <div class="showRolls" >
              <div>
                Damage
              </div>
              <div v-if="twentyRollResult != null || damageRollResult != null">
                {{ damageRollResult }}
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
      damageRollResult: null
      }
    },
    components: {
      Roller
    },
    props: ['monster'],
    methods: {
      diceRoller(numberOfDice, sidesOfDice, mod) {
      
            if(numberOfDice > 1) {
              let total = 0;
              let roll = null;

              for(let i = 1; i <= numberOfDice ; i++) {
                roll = Math.floor(Math.random() * sidesOfDice) + 1
                total = total + roll
              }

              return total
            }

           return Math.floor(Math.random() * sidesOfDice) + (1 + mod)
        },
          twentyRoll(numberOfDice, sidesOfDice, mod) {
            
            let twentyRollNum = this.diceRoller(numberOfDice, sidesOfDice, mod)
            console.log(twentyRollNum)
            this.twentyRollResult = twentyRollNum
          },
          damageRoll(numberOfDice, sidesOfDice, mod) {
            
            let damageRollNum = this.diceRoller(numberOfDice, sidesOfDice, mod)
            console.log(damageRollNum)
            this.damageRollResult = damageRollNum
          }
    }

  }
</script>

<style>
.atk:hover {
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: default;
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

.abilityRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
}

.attackRow {
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
}

.stats {
  flex-direction: column;
  padding: 0px 10px 0px 10px;
  justify-items: center;
  border: 3px solid transparent;
}



.stat {
  display: flex;
  align-items: center;
  justify-content: center;
}

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
  margin: 0px 40px 0px 40px;
  
}

</style>