<template>
  <div id="app" class="font-sans font-normal">
    <DefaultLayout>
      <keep-alive>
        <router-view />
      </keep-alive>
    </DefaultLayout>
  </div>
</template>

<style lang="scss"></style>
<script>
import DefaultLayout from "@/views/layouts/DefaultLayout";
export default {
  components: { DefaultLayout }
};
</script>