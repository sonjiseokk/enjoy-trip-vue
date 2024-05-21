import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: "http://localhost:80",
    headers: {
        "Content-Type": "application/json",
    }
});

// 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청하는 함수
const refreshAccessToken = async (jwt) => {
    try {
        const response = await axios.post('http://localhost:80/api/auth/refresh', jwt, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        return null;
    }
};

apiClient.interceptors.response.use(
    (res) => res,
    async (err) => {
        console.log('에러는')
        console.log(err);
        const { config, response: { status } } = err;

        let jwt = JSON.parse(localStorage.getItem('jwt'));
        if (status === 401 && jwt) {
            config._retry = true;

            const currentTime = new Date();
            const expiredTime = new Date(jwt.expiredTime);
            let newAccessToken = '';

            if (currentTime >= expiredTime) {
                console.log("액세스 토큰이 만료되었습니다. 리프레시 토큰으로 새로운 액세스 토큰을 요청합니다.");
                newAccessToken = await refreshAccessToken(jwt);

                if (newAccessToken) {
                    jwt.accessToken = newAccessToken.token;
                    jwt.expiredTime = newAccessToken.expiredTime;  // 새로운 만료 시간 저장
                    localStorage.setItem('jwt', JSON.stringify(jwt));
                    config.headers['Authorization'] = `Bearer ${newAccessToken.accessToken}`;

                    // 새로운 액세스 토큰으로 원래 요청 다시 시도
                    return axios(config);
                } else {
                    console.error('Unable to refresh access token');
                }
            }
        }

        return Promise.reject(err);
    }
);

// 요청 인터셉터 추가
apiClient.interceptors.request.use((config) => {
    const jwtString = localStorage.getItem('jwt');
    let jwt = null;

    try {
        jwt = jwtString ? JSON.parse(jwtString) : null;
    } catch (e) {
        console.error("Error parsing JWT from sessionStorage:", e);
    }

    if (jwt && jwt.accessToken) {
        config.headers['Authorization'] = `Bearer ${jwt.accessToken}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
