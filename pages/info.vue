<template>
    <div class="h-100">
        <info-header />
        <div class="info-page pl4 pr6 flex-col">
            <div class="flex-row pb6 borderbox">
                <div class="w-25">
                    <div class="w-75">
                        <p class="info-sub">ABOUT</p>
                        <p>Research and education initiative based online and in Paris, France.</p>
                    </div>
                </div>
                <div class="w-25">
                    <div>
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
                <div class="w-50">
                    <div class="w-60 float-right">
                        <p>So, friends, every day do something that won’t compute. Wendell Berry.</p>
                    </div>
                </div>
            </div>
            <div class="flex-row">
                <div class="w-25">
                    <div class="w-75">
                        <p>UP School is led by Nathan FURR, professor of strategy at INSEAD, and Susannah HARMON
                            FURR,
                            art
                            historian and designer.</p>

                    </div>
                </div>
                <div class="w-25">
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
            <p @click="goBack" class="close-button">CLOSE</p>
        </div>
        <div class="x-box">
            <div>
                <nuxt-link to="/">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <line x1="40.91" y1="6.97" x2="6.97" y2="40.91" stroke="white" stroke-width="2" />
                        <line x1="6.97" y1="6.97" x2="40.91" y2="40.91" stroke="white" stroke-width="2" />
                    </svg>
                </nuxt-link>
            </div>
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