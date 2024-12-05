<template>
    <div class="upside-page">
        <up-header :logoColor="'#C9FFAF'" :headerColor="'#11935e'" :textColor="'#C9FFAF'" :navColor="'#11935e'" />
        <div class="flex flex-row w-100 page-content home-row">
            <div class="w-618 flex flex-col ph4 borderbox big-half">
                <div class="landing">
                    <p>The Upside of Uncertainty</p>
                </div>
                <div class="img-half mobile">
                    <div class="w-35 flex margin-a align-center mobile-icon-cont">
                        <img class="w-100" src="/assets/upsideofuncertaintycover.webp" alt="">
                    </div>
                </div>
                <div class="about-text">
                    <p>Uncertainty ability is an essential skillset for our evolving world. Training for individuals and
                        teams.</p>
                    <p>The Upside of Uncertainty teaches uncertainty + possibility are two sides of the same coin.</p>
                    <a href="https://www.theupsideofuncertainty.com/" target="_blank">
                        <p><span class="view-text upside">View →</span></p>
                    </a>

                </div>
            </div>
            <div class="w-382 img-half desktop small-half">
                <div class="w-50 flex margin-a align-center page-height">
                    <img class="w-100" src="/assets/upsideofuncertaintycover.webp" alt="">
                </div>
            </div>
        </div>
        <div class="info-button-cont page-content">
            <nuxt-link to="/info">
                <p class="info-button">Info</p>
            </nuxt-link>
        </div>
    </div>
</template>
