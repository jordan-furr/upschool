<template>
    <div class="header-cont">
        <div class="info-header">
            <div class="flex flex-row align-center borderbox ph4">
                <div class="w-50">
                    <a href="/" exact-active-class="active">
                        <p class="logo info-menu-item">UP School</p>
                    </a>
                </div>
                <div class="w-50 text-right">
                    <nuxt-link to="/">
                        <p class="info-menu-item">&#10005;</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {
    title = "Articles",
} = defineProps(["title"]);
</script>