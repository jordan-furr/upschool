<template>
    <div class="earnest-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Earnest Project</p>
                </div>
                <div class="about-text">
                    <p>Can earnestness change the world? Our exploration begins here.</p>
                    <p>Earnest Project is a community and research initiative. Join us in the celebrating the joy of earnest living. </p>
                    <p class="view-text">View --></p>
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

const color = ref('#DD7D4E');
const navColor = useNavHeader();
navColor.value = color.value;

</script>