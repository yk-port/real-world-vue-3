<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    :id="uuid"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p v-if="error" class="errorMessage" :id="`${uuid}-error`">
    {{ error }}
  </p>
</template>

<script>
import UniqueID from "@/features/UniqueID";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      uuid: null,
    };
  },

  created() {
    this.uuid = UniqueID(this.label);
  },
};
</script>
