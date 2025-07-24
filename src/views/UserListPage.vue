<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- หัวข้อ -->
      <div class="header">
        <h1>📋 รายชื่อผู้ใช้</h1>
      </div>

      <!-- รายชื่อแบบการ์ด -->
      <div class="card-container">
        <ion-card v-for="user in users" :key="user.id" class="user-card">
          <img :src="user.avatar" class="user-avatar" alt="user" />
          <ion-card-header>
            <ion-card-title>{{ user.name }}</ion-card-title>
            <ion-card-subtitle>สมาชิกผู้ใช้งาน</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'สมชาย', avatar: 'https://i.pravatar.cc/300?img=1' },
  { id: 2, name: 'สมหญิง', avatar: 'https://i.pravatar.cc/300?img=5' },
  { id: 3, name: 'John Doe', avatar: 'https://i.pravatar.cc/300?img=10' }
])
</script>

<style scoped>
.header {
  background: linear-gradient(to right, #4facfe, #00f2fe);
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  gap: 16px;
}

.user-card {
  width: 220px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.user-card:hover {
  transform: scale(1.05);
}

.user-avatar {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
</style>
