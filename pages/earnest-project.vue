<template>
    <div class="earnest-page">
        <up-header :logoColor="'#fff'" :headerColor="'#c9a48f'" :textColor="'#fff'" :navColor="'#c9a48f'" />
        <div class="flex flex-row w-100 page-content home-row">
            <div class="w-618 flex flex-col ph4 borderbox big-half">
                <div class="landing">
                    <p>Earnest Project</p>
                </div>
                
                <div class="about-text">
                    <p>Can earnestness change the world? Our exploration begins here.</p>
                    <p>Earnest Project is a community and research initiative. Join us in the celebrating the joy of earnest living. </p>
                    <a href="https://earnestproject.com/" target="_blank"><p><span class="view-text earnest">View web page →</span></p></a>
                </div>
                <div class="img-half mobile">
                    <div class="w-50 flex margin-a align-center mobile-icon-cont">
                        <img class="w-100" src="/assets/Earnest Patch.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="w-382 img-half desktop small-half">
                <div class="w-618 flex margin-a align-center page-height">
                    <img class="w-100" src="/assets/Earnest Patch.webp" alt="">
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
