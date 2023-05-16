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
              <!-- <v-list-item prepend-icon="mdi-account-group-outline" title="Edit Monster List" value="Edit Monster List" ></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Settings" value="Settings" ></v-list-item> -->
              <v-list-item prepend-icon="mdi-account-group-outline" title="Issues" value="Issues" @click="showIssues"></v-list-item>
            </v-list>
          </v-navigation-drawer>
 <!-- main area -->
          <v-main style="height: 1000px" >
            <Drawer ref="drawer" v-show="monsterList" @buildCards="addToCardsToBuild" @checkBoxesSelected="addToCardsToBuild" />
            <div v-show="monsterArea" class="monsterArea">
              <div v-for="card in cardsToBuild" :key="card">
                <MonsterCards :monster="card" />
              </div>
            </div>
            <!-- <Create v-show="createArea" @monsterAdded="updateMonsterList()"/> -->
            <Create2 v-show="createArea" @monsterAdded="updateMonsterList()"/>
            <div v-show="issuesArea">
              <Issues />
            </div>
            
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
import Create2 from './components/create2.vue'
import Issues from './components/issues.vue'

export default {
  name: 'App',
  components: { 
    MonsterCards,
    Drawer,
    Create,
    Create2,
    Issues
     },
    data() {
      return {
        drawer: true,
        monsterList: true,
        monsterArea: false,
        createArea: false,
        issuesArea: false,
        rail: true,
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
    this.issuesArea = false
  },
    showMonsterArea() {
    this.monsterList = false
    this.monsterArea = true
    this.createArea = false
    this.issuesArea = false
  },
    showCreate() {
    this.monsterList = false
    this.monsterArea = false
    this.createArea = true
    this.issuesArea = false
  },
  showIssues() {
    this.monsterList = false
    this.monsterArea = false
    this.createArea = false
    this.issuesArea = true
  },
    updateMonsterList() {
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
  flex-wrap: wrap;
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