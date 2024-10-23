<template>
    <div class="header-cont">
        <div class="header">
            <div class="flex flex-row align-center">
                <div class="w-50 borderbox logo-cont">
                    <a href="/" exact-active-class="active"><p class="logo">UP SCHOOL</p></a>
                </div>
                <div class="bg-blue w-50 borderbox ph3">
                    <div class="flex flex-row space-between menu">
                        <div class="flex flex-row info-menu">
                            <nuxt-link to="/articles" class="menu-item" exact-active-class="active"><p>ARTICLES</p></nuxt-link>
                            <nuxt-link to="/events" class="menu-item"  exact-active-class="active"><p>EVENTS</p></nuxt-link>
                            <nuxt-link to="/contact" class="menu-item"  exact-active-class="active"><p>CONTACT</p></nuxt-link>
                        </div>
                        <div>
                            <div class="dropdown">
                                <p class="menu-item">PROJECTS </p>
                                <div class="dropdown-content">
                                    <nuxt-link to="/upside-of-uncertainty" class="menu-item" exact-active-class="active"><p>Upside of Uncertainty</p></nuxt-link>
                                    <nuxt-link to="/earnest-project" exact-active-class="active"><p>Earnest Project</p></nuxt-link>
                                    <nuxt-link to="/affection-economy" exact-active-class="active"><p>Affection Economy</p></nuxt-link>
                                    <nuxt-link to="/hope-accelerator" exact-active-class="active"><p>Hope Accelerator</p></nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
