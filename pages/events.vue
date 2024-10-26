<template>
    <div class="events-page">
        <div class="flex flex-row w-100">
            <div class="w-50 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Events</p>
                </div>
                <div class="about-text">
                    <div class="upcoming-ev">
                        <p class="sm-head-text">UPCOMING</p>
                        <p>Please check back later. Subscribe to stay updated (we won't spam).</p>
                    </div>
                    <div class="past-ev">
                        <p class="sm-head-text">PAST</p>
                        <p>Earnest Gathering, 2019</p>
                    </div>
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

const color = ref('#ffd817');
const navColor = useNavHeader();
navColor.value = color.value;

</script>