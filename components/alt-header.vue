<template>
    <div class="header-cont">
        <div class="alt-header">
            <div class="flex flex-row align-center borderbox ph4 space-between ph3-mobile">
                <div class="w-33 mobile-66">
                    <a href="/" exact-active-class="active">
                        <p class="logo">UP School</p>
                    </a>
                </div>
                <div class="mobile-menu">
                    <menu-icon :style="{ color: logoColor }" :isOpen="isMenuVisible" @click="toggleMenu" />
                    <mobile-menu-overlay :isVisible="isMenuVisible" @click="toggleMenu" />
                </div>
                <div class="w-33 text-center mobile-hide">
                    <nuxt-link to="/articles" class="alt-menu-item">
                        <p>{{ title }}</p>
                    </nuxt-link>
                </div>
                <div class="w-33 mobile-hide">
                    <div class="x-box">
                        <div>
                            <nuxt-link to="/">
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="40.91" y1="6.97" x2="6.97" y2="40.91" stroke="black" stroke-width="2" />
                                    <line x1="6.97" y1="6.97" x2="40.91" y2="40.91" stroke="black" stroke-width="2" />
                                </svg>
                            </nuxt-link>
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
    title = "Articles",
} = defineProps(["title"]);

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

