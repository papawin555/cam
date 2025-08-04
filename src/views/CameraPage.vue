<template>
  <div class="camera-page">
    <div class="content">
      <h2>
        <i class="fas fa-camera camera-icon"></i>
        ถ่ายรูปกิจกรรม
      </h2>
      <div v-if="photo" class="photo-container">
        <img :src="photo" alt="ถ่ายรูป" />
      </div>
      <div v-else class="photo-placeholder">
        <i class="fas fa-image"></i>
        <p>ยังไม่มีรูปถ่าย</p>
      </div>
    </div>
    <button class="take-photo-btn" @click="takePhoto">
      <i class="fas fa-camera"></i> ถ่ายรูป
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';

const photo = ref(null);

// โหลดภาพจาก localStorage ตอนเปิดหน้า
onMounted(() => {
  const savedPhoto = localStorage.getItem('savedPhoto');
  if (savedPhoto) {
    photo.value = savedPhoto;
  }
});

const takePhoto = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    photo.value = image.dataUrl;

    // บันทึกภาพลง localStorage
    localStorage.setItem('savedPhoto', image.dataUrl);
  } catch (error) {
    console.error('ถ่ายรูปไม่สำเร็จ:', error);
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.camera-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  padding: 0;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

h2 {
  font-size: 2rem;
  color: #2563eb;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.camera-icon {
  font-size: 2.2rem;
  color: #00c6ff;
}

.photo-container {
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo-container img {
  max-width: 320px;
  width: 90vw;
  height: auto;
  border-radius: 18px;
  box-shadow: 0 4px 24px #b3c6ff55;
  border: 3px solid #fff;
}

.photo-placeholder {
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #bdbdbd;
  font-size: 1.2rem;
}
.photo-placeholder i {
  font-size: 4rem;
  margin-bottom: 8px;
}

.take-photo-btn {
  width: 100vw;
  max-width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 18px 0;
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #00c6ff 60%, #0072ff 100%);
  color: #fff;
  border: none;
  border-radius: 0;
  box-shadow: 0 -2px 16px #b3c6ff33;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.15s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.take-photo-btn:hover {
  background: linear-gradient(90deg, #0072ff 60%, #00c6ff 100%);
  color: #fff;
  filter: brightness(1.08);
  transform: translateY(-2px)
}
</style>