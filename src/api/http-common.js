import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: "http://localhost:80",
    headers: {
        "Content-Type": "application/json",
    }
});

// 요청 인터셉터 추가
apiClient.interceptors.request.use((config) => {
    // 로컬 스토리지에서 accessToken 가져오기
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
