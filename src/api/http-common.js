import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: "http://localhost:80",
    headers: {
        "Content-Type": "application/json",
    }
});

// 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청하는 함수
// const refreshAccessToken = async (jwt) => {
//     try {
//         const response = await axios.post('http://localhost:80/api/auth/refresh', jwt, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         console.log("반환은" + response);
//         return response.data;
//     } catch (error) {
//         console.error('Error refreshing access token:', error);
//         return null;
//     }
// };

// apiClient.interceptors.response.use(
//     (res) => res,
//     async (err) => {
//       const { config, response: { status } } = err;
  
//       console.log(config.url)
//       console.log(status)
//       console.log(config.sent)
//       /** 1 */
//     //   if (config.url === REFRESH_URL || status !== 401 || config.sent) {
//     //       return Promise.reject(err);
//     //   }
  
//       /** 2 */
//       config.sent = true;
//       const accessToken = await refreshAccessToken();
  
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
  
//       return axios(config);
//     }
//   );

// 요청 인터셉터 추가
apiClient.interceptors.request.use( async (config) => {
    // 세션 스토리지에서 JWT 전체를 가져옴
    const jwtString = localStorage.getItem('jwt');
    let jwt = null;
    
    try {
        // 세션 스토리지에 저장된 문자열을 객체로 파싱
        jwt = jwtString ? JSON.parse(jwtString) : null;
    } catch (e) {
        console.error("Error parsing JWT from sessionStorage:", e);
    }
    
    console.log(jwt);
    // 파싱된 JWT 객체에서 accessToken을 추출하고 헤더에 추가
    if (jwt && jwt.accessToken) {
        // const currentTime = new Date();
        // const expiredTime = new Date(jwt.expiredTime);

        // if (currentTime >= expiredTime) {
        //     console.log("여기까지옴")
        //     // 액세스 토큰이 만료된 경우 리프레시 토큰으로 새로운 액세스 토큰 요청
        //     const newAccessToken = await refreshAccessToken(jwt);
            
        //     console.log(newAccessToken)
        //     if (newAccessToken) {
        //         // 새로운 액세스 토큰을 JWT 객체에 업데이트
        //         jwt.accessToken = newAccessToken.accessToken;
        //         // 세션 스토리지에 업데이트된 JWT 객체 저장
        //         localStorage.setItem('jwt', JSON.stringify(jwt));
        //     } else {
        //         console.error('Unable to refresh access token');
        //     }
        // }

        // 헤더에 액세스 토큰 추가
        config.headers['Authorization'] = `Bearer ${jwt.accessToken}`;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
