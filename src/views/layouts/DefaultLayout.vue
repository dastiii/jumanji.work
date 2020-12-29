<template>
  <div>
<!--    <PageHeader></PageHeader>-->
    <hello-world></hello-world>
    <main>
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
