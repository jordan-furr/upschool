<template>
    <div class="articles-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Articles</p>
                </div>
                <div class="about-text">
                    <p>Read the Journal hosted on The Upside.</p>
                    <a href="https://www.theupsideofuncertainty.com/journal" target="_blank"><p class="view-text">View --></p></a>
                </div>
            </div>
            <div class="w-50 img-half">

            </div>
        </div>
        <div class="info-button-cont pl4">
            <p class="nav-text blue-hover">INFO</p>
        </div>
    </div>
</template>

<script setup>
import { useNavHeader } from '~/composables/useNavHeader';

const color = ref('#300a82');
const navColor = useNavHeader();
navColor.value = color.value;

</script>