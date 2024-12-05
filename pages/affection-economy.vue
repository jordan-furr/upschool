<template>
    <div class="affection-page">
        <up-header :logoColor="'#4C2618'" :headerColor="'#F4AA6D'" :textColor="'#4C2618'" :navColor="'#F4AA6D'" />
        <div class="flex flex-row w-100 page-content home-row">
            <div class="w-618 flex flex-col ph4 borderbox big-half">
                <div class="landing">
                    <p>Affection Economy</p>
                </div>
                <div class="img-half mobile">
                </div>
                <div class="about-text">
                    <p>Work and love and love and work. (The Win Win Economy)</p>
                    <p>Working from a place of affection (for what you do and who you are doing it with and for) where dignity, good will and care are reciprocated.</p>
                </div>
            </div>
            <div class="w-382 img-half desktop small-half">
                <div class="page-height"></div>
            </div>
        </div>
        <div class="info-button-cont page-content">
            <nuxt-link to="/info">
                <p class="info-button">Info</p>
            </nuxt-link>
        </div>
    </div>
</template>
