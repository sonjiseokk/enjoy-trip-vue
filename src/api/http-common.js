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
    // 로컬 스토리지에서 JWT 전체를 가져옴
    const jwtString = localStorage.getItem('jwt');
    let jwt = null;
    
    try {
        // 로컬 스토리지에 저장된 문자열을 객체로 파싱
        jwt = jwtString ? JSON.parse(jwtString) : null;
    } catch (e) {
        console.error("Error parsing JWT from localStorage:", e);
    }
    
    // 파싱된 JWT 객체에서 accessToken을 추출하고 헤더에 추가
    if (jwt && jwt.accessToken) {
        config.headers['Authorization'] = `Bearer ${jwt.accessToken}`;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
