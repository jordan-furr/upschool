<template>
    <div class="affection-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Affection Economy</p>
                </div>
                <div class="about-text">
                    <p>Work and love and love and work. (The Win Win Economy)</p>
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

const color = ref('#4480C7');
const navColor = useNavHeader();
navColor.value = color.value;

</script>