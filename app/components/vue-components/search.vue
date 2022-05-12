<template>
  <div>
    <input type="search" v-model="keyword" @input="search()" />

    <button class="search-btn" @click="clearSearch">Clear</button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      keyword: new URLSearchParams(window.location.search).get("filter")
        ? new URLSearchParams(window.location.search).get("filter")
        : "",
    };
  },
  methods: {
    search() {
      this.$emit("search-filter", this.keyword);
    },
    clearSearch() {
      this.keyword = "";
      this.$emit("search-filter", this.keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>