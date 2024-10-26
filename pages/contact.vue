<template>
    <div class="contact-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Contact</p>
                </div>
                <div class="about-text">
                    <p>You can reach us at info@upschool.org</p>
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

const color = ref('#ff1797');
const navColor = useNavHeader();
navColor.value = color.value;

</script>