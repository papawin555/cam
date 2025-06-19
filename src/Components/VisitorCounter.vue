<template>
  <div class="visitor-counter">
    <h2>จำนวนผู้เข้าชม: {{ count }}</h2>
    <button @click="increase">เพิ่ม</button>
    <button @click="decrease">ลด</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increase() {
  count.value++
}

function decrease() {
  if (count.value > 0) count.value--
}
</script>

<style scoped>
.visitor-counter {
  margin: 24px 0 16px 0;
  text-align: center;
}
.visitor-counter h2 {
  font-size: 1.5rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px #e3eefd;
}
.visitor-counter button {
  margin: 0 6px;
  padding: 6px 18px;
  border-radius: 20px;
  border: none;
  background: #e3eefd;
  color: #2563eb;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.visitor-counter button:hover {
  background: #b6d0f7;
}
</style>