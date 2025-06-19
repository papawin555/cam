<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          <ion-icon name="sparkles-outline" class="app-icon"></ion-icon>
          My Ionic App
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding content-bg">
      <h2 class="welcome-text">
        <ion-icon name="happy-outline" class="welcome-emoji"></ion-icon>
        ยินดีต้อนรับ!
      </h2>
      <VisitorCounter />
      <ion-grid class="menu-grid">
        <ion-row>
          <ion-col class="menu-item">
            <ion-icon name="home-outline"></ion-icon>
            <div>เมนู 1</div>
          </ion-col>
          <ion-col class="menu-item">
            <ion-icon name="person-outline"></ion-icon>
            <div>เมนู 2</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="menu-item">
            <ion-icon name="mail-outline"></ion-icon>
            <div>เมนู 3</div>
          </ion-col>
          <ion-col class="menu-item">
            <ion-icon name="information-circle-outline"></ion-icon>
            <div>เมนู 4</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="menu-item">
            <ion-icon name="settings-outline"></ion-icon>
            <div>เมนู 5</div>
          </ion-col>
          <ion-col class="menu-item">
            <ion-icon name="star-outline"></ion-icon>
            <div>เมนู 6</div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div class="button-bottom">
        <ion-button expand="block" color="primary" shape="round" size="large" class="pulse-btn">
          <ion-icon slot="start" name="arrow-forward-circle-outline"></ion-icon>
          ดำเนินการต่อ
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
 import VisitorCounter from './VisitorCounter.vue';
</script>

<style scoped>
.content-bg {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.app-icon {
  vertical-align: middle;
  margin-right: 8px;
  color: #4f8cff;
  font-size: 1.3em;
}

.welcome-text {
  text-align: center;
  margin-bottom: 28px;
  font-weight: 600;
  color: #2d3a4a;
  letter-spacing: 1.2px;
  font-size: 1.4em;
  position: relative;
  z-index: 1;
}

.welcome-emoji {
  vertical-align: middle;
  margin-right: 8px;
  color: #4f8cff;
  font-size: 1.2em;
}

.menu-grid {
  margin-bottom: 90px;
  position: relative;
  z-index: 1;
}

.menu-item {
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(60, 60, 60, 0.06);
  margin: 10px 6px;
  padding: 18px 0 10px 0;
  text-align: center;
  font-size: 1.08em;
  color: #2d3a4a;
  background: #f8fafc;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  border: 1.5px solid #e3e8ee;
}
.menu-item ion-icon {
  font-size: 2em;
  margin-bottom: 6px;
  color: #4f8cff;
  transition: color 0.2s;
}
.menu-item:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 16px rgba(79,140,255,0.10);
  background: #eaf1fb;
  border-color: #b6d0f7;
}
.menu-item:hover ion-icon {
  color: #2563eb;
}

.button-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 16px;
  padding: 0 16px;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.pulse-btn {
  animation: pulse 1.8s infinite;
  font-size: 1.08em;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 18px #4f8cff22;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 #4f8cff33; }
  70% { box-shadow: 0 0 0 12px #4f8cff11; }
  100% { box-shadow: 0 0 0 0 #4f8cff00; }
}
</style>