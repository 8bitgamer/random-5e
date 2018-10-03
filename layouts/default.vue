<template>
  <div>
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-large md-dense md-primary">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
              </md-button>

              <span class="md-title">My Title</span>
            </div>

            <div class="md-toolbar-section-end">
              <nuxt-link to="/profile">
                <md-avatar >
                  <img src="https://thumbs.dreamstime.com/t/cartoon-monster-face-vector-halloween-black-monster-avatar-wide-smile-78780526.jpg" alt="Avatar">
                </md-avatar>
              </nuxt-link>

            </div>
          </div>

          <div class="md-toolbar-row">
            <md-tabs class="md-primary">
              <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
              <md-tab id="tab-npc" md-label="NPC Generator" to="/generate"></md-tab>
              <md-tab id="tab-pages" md-label="Plot Generator" to="/plots"></md-tab>
            </md-tabs>
          </div>
        </md-app-toolbar>
        <md-app-content>          
          <nuxt/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
      menuVisible: false
    })
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.md-app {
  border: 1px solid rgba(#000, .12);
}

</style>

