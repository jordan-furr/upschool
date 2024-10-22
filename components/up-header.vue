<template>
    <div class="header-cont">
        <div class="header">
            <div class="flex flex-row align-center">
                <div class="w-50 borderbox ph3 pv25">
                    <a href="/" exact-active-class="active"><p class="logo">UP SCHOOL</p></a>
                </div>
                <div class="bg-blue w-50 borderbox ph35">
                    <div class="flex flex-row space-between menu">
                        <div class="flex flex-row info-menu">
                            <a href="/articles" class="menu-item"><p>ARTICLES</p></a>
                            <a href="/events" class="menu-item"  exact-active-class="active"><p>EVENTS</p></a>
                            <a href="/contact" class="menu-item"  exact-active-class="active"><p>CONTACT</p></a>
                        </div>
                        <div>
                            <div class="dropdown">
                                <p class="menu-item">PROJECTS </p>
                                <div class="dropdown-content">
                                    <a href="/upside-of-uncertainty" class="menu-item" :class="{ active: isActive('/upside-of-uncertainty') }"><p>Upside of Uncertainty</p></a>
                                    <a href="/earnest-project" exact-active-class="active"><p>Earnest Project</p></a>
                                    <a href="/affection-economy" exact-active-class="active"><p>Affection Economy</p></a>
                                    <a href="/hope-accelerator" exact-active-class="active"><p>Hope Accelerator</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return window.location.pathname === route;
    }
  }
}
</script>