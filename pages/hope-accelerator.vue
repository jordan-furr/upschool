<template>
    <div class="hope-page">
        <up-header :logoColor="'#b4cdc2'" :headerColor="'#8fa071'" :textColor="'#b4cdc2'" :navColor="'#71502f'" />
        <div class="flex flex-row w-100 page-content home-row">
            <div class="w-618 flex flex-col ph4 borderbox big-half">
                <div class="landing">
                    <p>Hope Accelerator</p>
                </div>
                <div class="img-half mobile">
                </div>
                <div class="flex flex-row">
                    <div class="about-text">
                        <p>Accelerating hope in the world.</p>
                        <p>Insights based on Natures biodynamic regenerative systems
                        </p>
                        <p>A framework for solutions for the stripped ecosystems.</p>
                    </div>
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
