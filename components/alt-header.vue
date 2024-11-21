<template>
    <div class="header-cont">
        <div class="alt-header">
            <div class="flex flex-row align-center borderbox ph4">
                <div class="w-33">
                    <a href="/" exact-active-class="active">
                        <p class="logo">UP School</p>
                    </a>
                </div>
                <div class="w-33 text-center">
                    <nuxt-link to="/articles" class="alt-menu-item">
                        <p>{{ title }}</p>
                    </nuxt-link>
                </div>
                <div class="w-33 text-right">
                    <nuxt-link to="/" class="alt-menu-item">
                        <p>&#10005;</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {
    title = "ARTICLES",
} = defineProps(["title"]);
</script>