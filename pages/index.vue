<template>
    <div>
      <up-header />
        <div class="flex flex-row w-100">
            <div class="w-618 flex flex-col ph4 borderbox">
                <div class="landing">
                    <p>Initiatives based on helping people live rewarding lives.</p>
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
            <div class="w-382 img-half">
            </div>
        </div>
        <div class="info-button-cont pl4">
            <p class="nav-text blue-hover">INFO</p>
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
