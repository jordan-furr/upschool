<template>
  <div class="home-page">
    <up-header />
    <div class="flex flex-row w-100 home-row">
      <div class="w-618 flex flex-col ph4 borderbox big-half">
        <div class="landing">
          <p>Programs, Tools, and Ideas for Building a Fulfilling Life.</p>
        </div>
        <div class="img-half mobile">
        </div>
        <div>
          <p class="nav-text">PROJECTS</p>
        </div>
        <div class="projects-home">
          <div class="project-item" v-for="(item, index) in items" :key="index"
            :class="{ 'active': activeIndex === index }" @click="toggleAccordion(index)">
            <div class="project-title">
              <span>{{ item.title }}</span>
              <span :class="{ 'plus-icon': true, 'rotate-icon': activeIndex === index }">
                +
              </span>
            </div>
            <transition name="accordion">
              <div v-show="activeIndex === index" class="project-content">
                <p class="borderbox pr6 pb2">{{ item.content }}</p>
                <nuxt-link :to="item.link" class="borderbox pr6 pb1 learn-more"> <p>Learn more</p> </nuxt-link>
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
          content: "A science-backed guide for navigating and thriving through uncertainty—based on interviews and insights from world-renowned leaders, innovators, entrepreneurs, artists, and creatives.",
          link: "/upside-of-uncertainty"
        },
        {
          title: "Earnest Project",
          content: "Can Earnestness change the world? Our exploration begins here. Our undertaking is to discover, interview, and highlight indivduals engaged in all kinds of earnest endeavors.",
          link: "/earnest-project"
        },
        {
          title: "Affection Economy",
          content: "The Win Win Economy: Sustaining an ecosystem of care between leaders and team members.",
          link: "/affection-economy"
        },
        {
          title: "Hope Accelerator",
          content: "Insights based on Natures biodynamic regenerative systems. A framework for solutions for the stripped ecosystems.",
          link: "/hope-accelerator"
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
