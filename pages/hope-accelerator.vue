<template>
    <div class="hope-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Hope Accelerator</p>
                </div>
                <div class="about-text">
                    <p>Accelerating hope in the world.</p>
                    <p>Working from a place of affection (for what you do and who you are doing it with and for) where dignity, good will and care are reciprocated.</p>
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

const color = ref('#4a2203');
const navColor = useNavHeader();
navColor.value = color.value;

</script>