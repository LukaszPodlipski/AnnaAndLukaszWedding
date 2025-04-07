<script setup lang="ts">
  type Icons = {
    left?: {
      name: string;
      size?: number;
    };
    right?: {
      name: string;
      size?: number;
    };
  };

  defineProps({
    label: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icons: {
      type: Object as PropType<Icons>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<'text'>,
      default: 'text',
    },
  });
</script>

<template>
  <Button :label="label" :disabled="disabled">
    <Icon
      v-if="icons.left"
      :name="`${icons.left.name}`"
      :size="icons.left.size ? `${icons.left.size}px` : undefined"
    />
    <span v-if="label">{{ label }}</span>
    <Icon
      v-if="icons.right"
      :name="`${icons.right.name}`"
      :size="icons.right.size ? `${icons.right.size}px` : undefined"
    />
  </Button>
</template>
