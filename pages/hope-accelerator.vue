<template>
    <div class="hope-page">
        <up-header :logoColor="'#fff'" :headerColor="'#07252b'" :textColor="'#fff'" :navColor="'#07252b'" />
        <div class="flex flex-row w-100 page-content home-row">
            <div class="w-618 flex flex-col ph4 borderbox big-half">
                <div class="landing">
                    <p>Hope Accelerator</p>
                </div>
                <div class="w-382 img-half mobile">
                </div>
                <div class="about-text">
                    <p>Accelerating hope in the world.</p>
                    <p>Working from a place of affection (for what you do and who you are doing it with and for) where
                        dignity, good will and care are reciprocated.</p>
                </div>
            </div>
            <div class="w-382 img-half desktop small-half">
                <div class="page-height"></div>
            </div>
        </div>
        <div class="info-button-cont page-content">
            <nuxt-link to="/info">
                <p class="info-button" style="color: black;">Info</p>
            </nuxt-link>
        </div>
    </div>
</template>
