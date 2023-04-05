<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'SampleCard',
    },
  })
</script>

<template>
  <div class="p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="flex items-center mb-2">
          <div class="font-bold text-primary-500 text-xl">
            The Coldest Sunset
          </div>
          <Icon
            name="charm:snowflake"
            class="ml-2 text-primary-500"
            size="20px"
          />
        </div>

        <p class="text-base text-success-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
          >#winter</span
        >
      </div>
    </div>
    <div class="flex justify-center max-w-sm">
      <BaseButton>
        <span>Read more...</span>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped></style>
