<template>
  <div class="menu-icon">
    <span v-if="!isOpen">
      <p class="menu-item">Menu</p>
    </span>
    <span v-else class="menu-item">
      <p class="menu-item">X</p>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    }
  }
}
</script>