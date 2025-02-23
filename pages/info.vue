<template>
    <div class="h-100">
        <info-header />
        <div class="info-page ph4 flex-col ph3-mobile">
            <div class="flex-row borderbox info-row space-between w-100">
                <div class="w-33 mobile-100">
                    <div class="flex-row space-between">
                        <div class="w-100 mobile-50 mb6">
                            <p>An online and Paris based education initiative that builds community and resources
                                through
                                exploration of uncertainty, living by values, and wellbeing in work and life.</p>
                        </div>
                        <div class="w-50 desktop-hide text-right">
                            <div>
                                <a href="mailto:info@upschool.org">
                                    <p><span class="info-link">info@upschool.org</span></p>
                                </a>
                                <a href="https://www.instagram.com/upside.school" target="_">
                                    <p><span class="info-link">Instagram</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 mobile-50 mb6">
                        <p>UP School was founded in 2020 by Susannah and Nathan FURR, out of a desire to seek
                            answers to
                            problems of navigating uncertainty, passion, work, and relationships.</p>
                    </div>
                </div>
                <div class="w-20 mobile-hide">
                    <div>
                        <a href="mailto:info@upschool.org">
                            <p><span class="info-link">info@upschool.org</span></p>
                        </a>
                        <a href="https://www.instagram.com/upside.school" target="_">
                            <p><span class="info-link">Instagram</span></p>
                        </a>
                    </div>
                </div>
                <div class="w-25 mobile-100 mb6 mobile-hide">
                    <div class="mobile-100 pb3 text-right">
                        <p>"Friends, every day do something that won’t compute." Wendell Berry.</p>
                    </div>
                </div>

            </div>
            <div class="w-100 flex-row mb6">
                <div class="mobile-50">
                    <div class="pr3 borderbox nopad-mobile">
                        <p>Projects</p>
                        <nuxt-link to="/upside-of-uncertainty" exact-active-class="active">
                            <p class="info-link">Upside of Uncertainty</p>
                        </nuxt-link>
                        <nuxt-link to="/earnest-project" exact-active-class="active">
                            <p class="info-link">Earnest Project</p>
                        </nuxt-link>
                        <nuxt-link to="/affection-economy" exact-active-class="active">
                            <p class="info-link">Affection Economy</p>
                        </nuxt-link>
                        <nuxt-link to="/hope-accelerator" exact-active-class="active">
                            <p class="info-link">Hope Accelerator</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="w-100 flex-row mb6">
                <div class="mobile-50">
                    <div class="pr3 borderbox nopad-mobile">
                        <p>Design</p>
                        <a href="https://badtaste.dev/">
                            <p><span class="info-link">Bad Taste</span></p>
                        </a>
                        <p>Ezra Geo</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="backpack-cont">
            <img class="backpack" src="/assets/UPschool-backpack.webp" alt="">
        </div>
        <div class="info-button-cont pl4 page-content">
        </div>
        <div class="x-box info">
            <div>
                <p @click="goBack" class="close-button">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <line x1="40.91" y1="6.97" x2="6.97" y2="40.91" stroke="white" stroke-width="2" />
                        <line x1="6.97" y1="6.97" x2="40.91" y2="40.91" stroke="white" stroke-width="2" />
                    </svg>
                </p>
            </div>
        </div>
        <div class="subscribe-cont">
            <newsletter />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                this.$router.push('/');
            }
        },
    },
};
</script>