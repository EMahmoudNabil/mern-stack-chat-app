import baseUrl from '../Api/baseURL'

const UseInsertDataWithImage = async (url, parmas) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    try {
        const response = await baseUrl.post(url, parmas, config);
        return response.data;
      } catch (error) {
        throw error;
      }
}

const UseInsertData = async (url, parmas) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    try {
        const response = await baseUrl.post(url, parmas, config);
        return response.data;
      } catch (error) {
        throw error;
      }
}

export { UseInsertData, UseInsertDataWithImage };