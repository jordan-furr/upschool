<template>
  <div class="home-page">
    <up-header />
    <div class="flex flex-row w-100 home-row">
      <div class="w-618 flex flex-col ph4 borderbox big-half">
        <div class="landing">
          <p>Initiatives based on helping people live rewarding lives.</p>
        </div>
        <div class="img-half mobile">
        </div>
        <div>
          <p class="nav-text">PROJECTS</p>
        </div>
        <div class="projects-home">
          <div class="project-item" v-for="(item, index) in items" :key="index"
            :class="{ 'active': activeIndex === index }">
            <div class="project-title" @click="toggleAccordion(index)">
              <span>{{ item.title }}</span>
              <span :class="{ 'plus-icon': true, 'rotate-icon': activeIndex === index }">
                +
              </span>
            </div>
            <transition name="accordion">
              <div v-show="activeIndex === index" class="project-content">
                <p>{{ item.content }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="w-382 img-half desktop small-half">
        <div class="page-height"></div>
      </div>
    </div>
    <div class="info-button-cont page-content">
      <nuxt-link to="/info">
        <p class="info-button">Info</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null, // Tracks which item is opened
      items: [
        {
          title: "The Upside of Uncertainty",
          content: "Detailed content about The Upside of Uncertainty..."
        },
        {
          title: "Earnest Project",
          content: "Detailed content about the Earnest Project..."
        },
        {
          title: "Affection Economy",
          content: "Detailed content about the Affection Economy..."
        },
        {
          title: "Hope Accelerator",
          content: "Detailed content about the Hope Accelerator..."
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>
