<template>
  <input
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    type="checkbox"
    class="field"
  />
  <label>{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
