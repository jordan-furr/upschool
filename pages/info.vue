<template>
    <div class="h-100">
        <info-header />
        <div class="info-page ph4 flex-col">
            <div class="flex-row pb6 borderbox info-row">
                <div class="w-25 mobile-100 pb5 flex-row ">
                    <div class="w-75 mobile-50">
                        <p>Research and education initiative based online and in Paris, France.</p>
                    </div>

                    <div class="w-25 desktop-hide mobile-50 text-right">
                        <div>
                            <a href="mailto:info@upschool.org">
                                <p><span class="info-link">info@upschool.org</span></p>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="w-25 mobile-50 pb5">
                    <div class="w-100">
                        <p>Led by Susannah HARMON FURR, art historian and entrepreneur, and Nathan FURR, professor of
                            strategy at INSEAD.</p>

                    </div>
                </div>
                <div class="w-50 mobile-100 pb3 mobile-hide">
                    <div class="w-60 float-right">
                        <p>So, friends, every day do something that won’t compute. Wendell Berry.</p>
                    </div>
                </div>
            </div>
            <div class="flex-row">
                <div class="w-25 mobile-50">
                    <div class="pr3 borderbox">
                        <p class="info-sub">PROJECTS</p>
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
                        <nuxt-link to="https://www.uncertaintyscience.com/" target="_">
                            <p class="info-link">Uncertainty Science</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="w-25 mobile-hide">
                    <div>
                        <a href="mailto:info@upschool.org">
                            <p><span class="info-link">info@upschool.org</span></p>
                        </a>

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