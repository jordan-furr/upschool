<template>
  <div class="header-cont" :style="{ backgroundColor: headerColor }">
    <div class="header">
      <div class="flex flex-row align-center">
        <div class="w-618 borderbox ph4">
          <a href="/" exact-active-class="active"
            ><p class="logo" :style="{ color: logoColor }">UP School</p></a
          >
        </div>
        <div :style="{ backgroundColor: navColor }" class="w-382 borderbox pl2 pr4">
          <div class="flex flex-row space-between">
            <div class="flex flex-row">
              <nuxt-link
                to="/articles"
                class="menu-item"
                exact-active-class="active"
                :style="{ color: textColor }"
                ><p>Articles</p></nuxt-link
              >
              <nuxt-link
                to="/events"
                class="menu-item"
                exact-active-class="active"
                :style="{ color: textColor }"
                ><p>Events</p></nuxt-link
              >
              <nuxt-link
                to="/contact"
                class="menu-item"
                exact-active-class="active"
                :style="{ color: textColor }"
                ><p>Contact</p></nuxt-link
              >
            </div>
            <div>
              <div class="dropdown">
                <p class="menu-item" :style="{ color: textColor }">Projects</p>
                <div class="dropdown-content">
                  <nuxt-link
                    to="/upside-of-uncertainty"
                    exact-active-class="active"
                    ><p>Upside of Uncertainty</p></nuxt-link
                  >
                  <nuxt-link to="/earnest-project" exact-active-class="active"
                    ><p>Earnest Project</p></nuxt-link
                  >
                  <nuxt-link to="/affection-economy" exact-active-class="active"
                    ><p>Affection Economy</p></nuxt-link
                  >
                  <nuxt-link to="/hope-accelerator" exact-active-class="active"
                    ><p>Hope Accelerator</p></nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  headerColor = "#ffffff",
  textColor = "#ffffff",
  navColor = "#005BE3",
  logoColor = "#000000",
} = defineProps(["headerColor", "textColor", "navColor", "logoColor"]);
</script>