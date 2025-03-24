import { axiosInstance } from ".";

export const postLog = async (
    content: string,
    username: string,
    password: string
) => {
    const response = await axiosInstance.post("/posts", {
        content,
        userName: username,
        password,
    });

    return response.data;
};

export const getLogs = async () => {
    const response = await axiosInstance.get("/posts");

    return response.data;
};
