<template>
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="bg-warmGray-900 py-6 px-8 rounded-lg"
        :class="item.span === true && 'md:col-span-2'"
      >
        <h4 class="text-2xl font-black text-warmGray-100 tracking-wide">
          {{ item.name }}
          <small class="ml-2 text-base" v-if="item.info"
            >({{ item.info }})</small
          >
        </h4>

        <p class="text-warmGray-400 mt-2 text-lg">
          {{ item.description }}
        </p>

        <div class="mt-3 text-sm">
          <a
            v-if="item.site != null"
            :href="item.site"
            target="_blank"
            rel="noreferrer"
            class="
              inline-flex
              items-center
              bg-warmGray-800
              hover:bg-warmGray-700
              py-2
              px-6
              rounded-lg
              text-white
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              />
            </svg>

            Visit
          </a>

          <a
            :href="item.source"
            target="_blank"
            rel="noreferrer"
            class="
              inline-flex
              items-center
              bg-warmGray-800
              hover:bg-warmGray-700
              py-2
              px-6
              rounded-lg
              text-white
              m-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>

            Source
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import data from "@/data/projects.json";
</script>
