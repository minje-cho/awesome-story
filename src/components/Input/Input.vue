<template>
  <div class="input-wrapper">
    <span v-if="prefixIcon" class="icon prefix" @click="onPrefixClick">{{ prefixIcon }}</span>
    <input type="text" :class="inputClasses" :style="inputStyle" />
    <span v-if="suffixIcon" class="icon suffix" @click="onSuffixClick">{{ suffixIcon }}</span>
  </div>
</template>

<script lang="ts" setup>
import './input.css';  // 스타일 파일 가져오기
import { computed, defineEmits } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The border color of the input
   */
  borderColor?: string,
  /**
   * The background color of the input
   */
  backgroundColor?: string,
  /**
   * The size of the input
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * The prefix icon
   */
  prefixIcon?: string,
  /**
   * The suffix icon
   */
  suffixIcon?: string,
}>(), { borderColor: 'purple', backgroundColor: '#e9e9f0', size: 'medium' });

const emit = defineEmits<{
  (e: 'prefix-click'): void;
  (e: 'suffix-click'): void;
}>();

const inputClasses = computed(() => ({
  'custom-input': true,
}));

const inputStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
  borderRadius: '10px',
  padding: '10px', // 기본 패딩
  paddingLeft: props.prefixIcon ? '1.5rem' : '10px', // 아이콘 공간 확보
  paddingRight: props.suffixIcon ? '1.5rem' : '10px', // 아이콘 공간 확보
  width: '100%',
  boxSizing: 'border-box',
  fontSize: props.size === 'small' ? '1rem' : props.size === 'medium' ? '1.2rem' : '1.27rem',
  fontWeight: 'bold',
}));

const onPrefixClick = () => {
  emit('prefix-click');
};

const onSuffixClick = () => {
  emit('suffix-click');
};

</script>

<style scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* 아이콘을 중간에 정렬 */
  pointer-events: auto;
  cursor: pointer;
}

.prefix {
  left: 0.25rem; /* 아이콘과 입력 필드 간의 간격 설정 (4px) */
}

.suffix {
  right: 0.25rem; /* 아이콘과 입력 필드 간의 간격 설정 (4px) */
}

.custom-input {
  outline: none;
  border: none; /* 기본 테두리 제거 */
  transition: box-shadow 0.3s ease-in-out;
  flex: 1;
}

.custom-input:focus {
  box-shadow: inset 0 0 0 2px var(--border-color, purple); /* 포커스 시 내부 테두리 추가 */
}
</style>
