<template>
    <div class="menu-overlay" v-if="isVisible" @click="toggleMenu">
        <up-header :logoColor="'#fff'" :headerColor="'#005BE3'" :textColor="'#fff'" :navColor="'#005BE3'" />
        <div class="menu-overlay-content">
            <p class="info-sub white">PROJECTS</p>
            <nav @click.stop>
                <ul>
                    <li class="mt3">
                        <nuxt-link to="/upside-of-uncertainty" class="menu-item" @click="toggleMenu"
                            exact-active-class="active">
                            <p>Upside of Uncertainty</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/earnest-project" class="menu-item" @click="closeMenu"
                            exact-active-class="active">
                            <p>Earnest Project</p>
                        </nuxt-link>
                    </li>
                    <li>

                        <nuxt-link to="affection-economy" class="menu-item" @click="closeMenu"
                            exact-active-class="active">
                            <p>Affection Economy</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/hope-accelerator" class="menu-item" @click="closeMenu"
                            exact-active-class="active">
                            <p>Hope Accelerator</p>
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <br>
            <nav @click.stop class="mt3">
                <ul>
                    <li>
                        <nuxt-link to="/info" class="menu-item" @click="closeMenu" exact-active-class="active">
                            <p>Info</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/events" class="menu-item" @click="closeMenu" exact-active-class="active">
                            <p>Events</p>
                        </nuxt-link>
                    </li>
                    <li>

                        <nuxt-link to="/articles" class="menu-item" @click="closeMenu" exact-active-class="active">
                            <p>Articles</p>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contact" class="menu-item" @click="closeMenu" exact-active-class="active">
                            <p>Contact</p>
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu');
        },
        closeMenu() {
            this.$emit('toggle-menu');
        }
    }
}
</script>