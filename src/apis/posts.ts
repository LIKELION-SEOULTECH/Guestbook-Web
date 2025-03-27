import { axiosInstance } from ".";

export const postLog = async (
    content: string,
    username: string,
    password: string
) => {
    const res = await axiosInstance.post("/posts", {
        content,
        userName: username,
        password,
    });
    return res.data.data;
};

export const getLogs = async () => {
    const res = await axiosInstance.get("/posts");
    return res.data.data;
};

export const patchLog = async (
    id: number,
    password: string,
    content: string
) => {
    const res = await axiosInstance.patch(`/posts/${id}`, {
        password,
        content,
    });
    return res.data;
};

export const deleteLog = async (id: number, password: string) => {
    const res = await axiosInstance.delete(`/posts/${id}`, {
        data: {
            password,
        },
    });
    return res.data;
};

// POST 요청의 더미 데이터 반환 함수
export const testPost = async (
    content: string,
    username: string,
    password: string
) => {
    return {
        id: 1,
        userName: username,
        content: content,
        emotion: "POSITIVE",
        createdAt: "2025-03-02T12:00:00Z",
        updatedAt: "2025-03-02T12:00:00Z",
    };
};

// GET 요청의 더미 데이터 반환 함수
export const testGet = async () => {
    return {
        meta: {
            total: 25,
            page: 1,
            limit: 10,
            totalPages: 3,
        },
        posts: [
            {
                id: 100,
                userName: "작성자 이름",
                content: "글 내용",
                emotion: "HORROR",
                createdAt: "2025-03-02T12:00:00Z",
                updatedAt: "2025-03-02T12:00:00Z",
            },
            {
                id: 102,
                userName: "작성자 이름",
                content: "글 내용",
                emotion: "SURPRISE",
                createdAt: "2025-03-02T12:00:00Z",
                updatedAt: "2025-03-02T12:00:00Z",
            },
            {
                id: 103,
                userName: "작성자 이름",
                content: "글 내용",
                emotion: "ANGER",
                createdAt: "2025-03-02T12:00:00Z",
                updatedAt: "2025-03-02T12:00:00Z",
            },
        ],
    };
};

// PATCH 요청의 더미 데이터 반환 함수
export const testPatch = async (
    id: number,
    password: string,
    content: string
) => {
    return {
        id: id,
        name: "작성자 이름",
        content: content,
        emotion: "POSITIVE",
        createdAt: "2025-03-02T12:00:00Z",
        updatedAt: "2025-03-02T13:30:00Z",
    };
};

// DELETE 요청의 더미 데이터 반환 함수
// password가 "1234"일 때 성공, 그 외에는 실패로 처리
export const testDelete = async (id: number, password: string) => {
    if (password === "1234") {
        // 성공 시: 204 No Content
        return {
            success: true,
            status: 204,
            data: null,
        };
    } else {
        // 실패 시: 401 Unauthorized와 함께 에러 반환
        return {
            success: false,
            status: 401,
            error: {
                code: "INVALID_PASSWORD",
                message: "비밀번호가 일치하지 않습니다.",
            },
        };
    }
};
