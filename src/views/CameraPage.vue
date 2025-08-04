<template>
  <div class="camera-page">
    <div class="content">
      <h2>
        <i class="fas fa-camera camera-icon"></i>
        ถ่ายรูปกิจกรรม
      </h2>
      <div v-if="photo" class="photo-container">
        <img :src="photo" alt="ถ่ายรูป" />
        <button class="delete-photo-btn" @click="deletePhoto">
          <i class="fas fa-trash"></i> ลบรูป
        </button>
      </div>
      <div v-else class="photo-placeholder">
        <i class="fas fa-image"></i>
        <p>ยังไม่มีรูปถ่าย</p>
      </div>
      <!-- แสดงพิกัด -->
      <div class="coords">
        <div><strong>Latitude:</strong> {{ latitude ?? '-' }}</div>
        <div><strong>Longitude:</strong> {{ longitude ?? '-' }}</div>
      </div>
      <div class="geo-btn-group">
        <button class="refresh-btn" @click="getLocation">
          <i class="fas fa-sync-alt"></i> รีเฟรชพิกัด
        </button>
        <button class="take-photo-btn" @click="takePhoto">
          <i class="fas fa-camera"></i> ถ่ายรูป
        </button>
      </div>
      <div v-if="geoError" class="error">{{ geoError }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';

const photo = ref(null);

// Geolocation
const latitude = ref(null)
const longitude = ref(null)
const geoError = ref('')

let geoWatchId = null

function getLocation() {
  geoError.value = ''
  if (!navigator.geolocation) {
    geoError.value = 'เบราว์เซอร์ไม่รองรับการระบุตำแหน่ง'
    return
  }
  // ยกเลิก watch เดิมถ้ามี
  if (geoWatchId !== null) {
    navigator.geolocation.clearWatch(geoWatchId)
  }
  geoWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      latitude.value = pos.coords.latitude
      longitude.value = pos.coords.longitude
    },
    (err) => {
      geoError.value = 'ไม่สามารถดึงพิกัดได้: ' + err.message
    }
  )
}

onMounted(() => {
  const savedPhoto = localStorage.getItem('savedPhoto');
  if (savedPhoto) {
    photo.value = savedPhoto;
  }
  getLocation()
});

const takePhoto = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: 'CAMERA' // บังคับใช้กล้องจริง
    });
    photo.value = image.dataUrl;
    localStorage.setItem('savedPhoto', image.dataUrl);
  } catch (error) {
    console.error('ถ่ายรูปไม่สำเร็จ:', error);
  }
};

function deletePhoto() {
  photo.value = null;
  localStorage.removeItem('savedPhoto');
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.camera-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  padding: 0;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  margin-bottom: 12px;
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
  margin-bottom: 12px;
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

/* พิกัด */
.coords {
  font-size: 1.1rem;
  margin-bottom: 16px;
  background: #fff;
  padding: 12px 28px;
  border-radius: 10px;
  box-shadow: 0 2px 12px #b3c6ff22;
  color: #2563eb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.geo-btn-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 12px;
}

.refresh-btn {
  background: linear-gradient(90deg, #00c6ff 60%, #0072ff 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.18s, transform 0.15s;
}
.refresh-btn:hover {
  background: linear-gradient(90deg, #0072ff 60%, #00c6ff 100%);
  transform: translateY(-2px) scale(1.04);
}

.take-photo-btn {
  background: linear-gradient(90deg, #00c6ff 60%, #0072ff 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 12px #b3c6ff33;
  transition: background 0.18s, color 0.18s, transform 0.15s;
}
.take-photo-btn:hover {
  background: linear-gradient(90deg, #0072ff 60%, #00c6ff 100%);
  color: #fff;
  filter: brightness(1.08);
  transform: translateY(-2px) scale(1.03);
}

.delete-photo-btn {
  margin-top: 14px;
  background: linear-gradient(90deg, #ff5858 60%, #ffae53 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 12px #ffb3b355;
  transition: background 0.18s, transform 0.15s;
}
.delete-photo-btn:hover {
  background: linear-gradient(90deg, #ffae53 60%, #ff5858 100%);
  transform: translateY(-2px) scale(1.04);
}

.error {
  color: #ff3b3b;
  margin-top: 8px;
}
</style>