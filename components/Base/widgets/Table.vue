<template>
  <table class="w-full base-table" dir="ltr">
    <thead>
      <tr class="border-b-[1px]">
        <th>#</th>
        <template v-if="props.rows.length">
          <th v-for="(cell, index) in props.rows[0].cells" :key="index">
            {{ cell.label }}
          </th></template
        >
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in props.rows" :key="index">
        <td data-label="*">
          <span
            class="h-5 w-5 md:block md:mx-auto text-Gray-b1 dark:text-LightGray-b3"
            >{{ index + 1 }}</span
          >
        </td>
        <td
          v-for="(cell, index) in row.cells"
          :key="index"
          :data-label="cell.label"
        >
          {{ cell.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//props

const props = defineProps({
  rows: {
    default: [
      {
        cells: [
          {
            label: "label",
            value: "value",
          },
        ],
      },
    ],
  },
});
</script>
