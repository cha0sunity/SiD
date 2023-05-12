<template>
  <v-app class="siteFont">
    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              prepend-icon="mdi-fencing"
              title="Shadows in the Dark"
              nav
            >
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Monster List" value="Monster List" @click="showMonsterList"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="Monster Cards" value="Monster Cards" @click="showMonsterArea"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Create Monster" value="Create Monster" @click="showCreate"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Edit Monster List" value="Edit Monster List" ></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Settings" value="Settings" ></v-list-item>
            </v-list>
          </v-navigation-drawer>
 <!-- main area -->
          <v-main style="height: 1000px">
            <Drawer ref="drawer" v-show="monsterList" @buildCards="addToCardsToBuild" @checkBoxesSelected="addToCardsToBuild" />
            <div v-show="monsterArea" class="monsterArea">
              <div v-for="card in cardsToBuild" :key="card">
                <MonsterCards :monster="card" />
              </div>
            </div>
            <Create v-show="createArea" @monsterAdded="updateMonsterList()"/>
          </v-main>
<!-- End main area -->
        </v-layout>
      </v-card> 
    </v-main>
  </v-app>
</template>

<script>


import MonsterCards from './components/monsterCards.vue'
import Drawer from './components/drawer.vue'
import Create from './components/create.vue'

export default {
  name: 'App',
  components: { 
    MonsterCards,
    Drawer,
    Create
     },
    data() {
      return {
        drawer: true,
        monsterList: true,
        monsterArea: false,
        createArea: false,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
    //     placeholderMonsters: [
    //       {
    //         enemyName: "goblin",
    //         description: "A short, hairless humanoid with green skin and pointy ears.",
    //         AC: 11,
    //         HP: 15,
    //         ATK:{
    //             weapon: "club",
    //             attackBonus: 0,
    //             numberOfAttacks: 2,
    //             range: "close",
    //             numberOfDamageDice: 1,
    //             damageDiceSize: 4
    //           },
    //         MV: "near",
    //         Strength: 0,
    //         Dextrity: 1,
    //         Constitution: 1,
    //         Intelligence: -1,
    //         Wisdom: -1,
    //         Charism: -2,
    //         Alignment: "chaotic",
    //         LV: 1,
    //         Special: "Keen Senses. Can't be surprised."
    //   },
    //   {
    //     enemyName: "kobold",
    //         description: "A short, lizard thing.",
    //         AC: 10,
    //         HP: 12,
    //         ATK:{
    //             weapon: "teeth",
    //             attackBonus: 1,
    //             numberOfAttacks: 6,
    //             range: "close",
    //             numberOfDamageDice: 10,
    //             damageDiceSize: 10
    //           },
    //         MV: "near",
    //         Strength: 1,
    //         Dextrity: 2,
    //         Constitution: -1,
    //         Intelligence: -2,
    //         Wisdom: 8,
    //         Charism: -9,
    //         Alignment: "chaotic",
    //         LV: 1,
    //         Special: "Bites alot"
    //   }
    // ],
    cardsToBuild: []
    }
  },
  methods: {
    addToCardsToBuild(data) {
      this.cardsToBuild = data
    },
    showMonsterList() {
    this.monsterList = true
    this.monsterArea = false
    this.createArea = false
  },
    showMonsterArea() {
    this.monsterList = false
    this.monsterArea = true
    this.createArea = false
  },
    showCreate() {
    this.monsterList = false
    this.monsterArea = false
    this.createArea = true
  },
    updateMonsterList() {
    console.log('hi')
    this.$refs.drawer.fetchMonsters()
  }
  },

}
</script>

<style>
body {
  background-color: white;
}
.monsterArea {
  display: flex;
}
.siteFont {
  font-family: 'Montserrat', sans-serif;
}
.specialFont {
  font-family: 'IM Fell English SC', serif;
}
h2 {
  font-family: 'IM Fell English SC', serif;
}


</style>


<!-- https://www.1001fonts.com/jsl-blackletter-font.html -->