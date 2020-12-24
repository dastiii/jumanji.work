<template>
  <div>
<!--    <PageHeader></PageHeader>-->
    <hello-world></hello-world>
    <main class="max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto">
      <slot></slot>
    </main>
  </div>
</template>

<script>
// import PageHeader from "@/views/layouts/defaultLayout/PageHeader";
import HelloWorld from "@/components/HelloWorld";
export default {
  components: { HelloWorld }
};
</script>
<style></style>
