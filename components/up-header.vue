<template>
  <div class="header-cont" :style="{ backgroundColor: headerColor }">
    <div class="header">
      <div class="flex flex-row align-center space-between">
        <div class="w-618 borderbox ph4 big-half">
          <nuxt-link to="/" exact-active-class="active">
            <p class="logo" :style="{ color: logoColor }">UP School</p>
          </nuxt-link>
        </div>
        <div class="mobile-menu">
          <menu-icon :style="{color: logoColor}" :isOpen="isMenuVisible" @click="toggleMenu" />
          <mobile-menu-overlay :isVisible="isMenuVisible" @click="toggleMenu" />
        </div>
        <div :style="{ backgroundColor: navColor }" class="w-382 borderbox pl2 pr4 desktop-menu small-half">
          <div class="flex flex-row space-between">
            <!-- Projects lead the bar, matching the mobile overlay's order.
                 Labels are shortened: the full titles need 708px and the nav
                 has ~449px at 1280px. Full titles remain the page headings. -->
            <div class="flex flex-row">
              <nuxt-link to="/upside-of-uncertainty" class="menu-item" exact-active-class="active" :style="{ color: textColor }">
                <p>Uncertainty</p>
              </nuxt-link>
              <nuxt-link to="/earnest-project" class="menu-item" exact-active-class="active" :style="{ color: textColor }">
                <p>Earnest</p>
              </nuxt-link>
              <nuxt-link to="/affection-economy" class="menu-item" exact-active-class="active" :style="{ color: textColor }">
                <p>Affection</p>
              </nuxt-link>
              <nuxt-link to="/hope-accelerator" class="menu-item" exact-active-class="active" :style="{ color: textColor }">
                <p>Hope</p>
              </nuxt-link>
            </div>
            <div>
              <div class="dropdown" tabindex="0">
                <p class="menu-item" :style="{ color: textColor }">Information</p>
                <div class="dropdown-content">
                  <nuxt-link to="/info" exact-active-class="active">
                    <p>About</p>
                  </nuxt-link>
                  <nuxt-link to="/articles" exact-active-class="active">
                    <p>Articles</p>
                  </nuxt-link>
                  <nuxt-link to="/contact" exact-active-class="active">
                    <p>Contact</p>
                  </nuxt-link>
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
import { ref } from 'vue'

const {
  headerColor = "#ffffff",
  textColor = "#ffffff",
  navColor = "#005BE3",
  logoColor = "#000000",
} = defineProps({
  headerColor: { type: String, default: "#ffffff" },
  textColor: { type: String, default: "#ffffff" },
  navColor: { type: String, default: "#005BE3" },
  logoColor: { type: String, default: "#000000" }
})

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>
