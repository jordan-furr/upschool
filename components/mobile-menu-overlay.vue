<template>
    <div class="menu-overlay" v-if="isVisible" @click="toggleMenu">
        <p>PROJECTS</p>
        <nav @click.stop>
            <ul>
                <li>
                    <nuxt-link to="/upside-of-uncertainty" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Upside of Uncertainty</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/earnest-project" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Earnest Project</p>
                    </nuxt-link>
                </li>
                <li>

                    <nuxt-link to="affection-economy" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Affection Economy</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/hope-accelerator" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Hope Accelerator</p>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
        <br>
        <nav @click.stop>
            <ul>
                <li>
                    <nuxt-link to="/" class="menu-item" @click="closeMenu" exact-active-class="active">
                        <p>Home</p>
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