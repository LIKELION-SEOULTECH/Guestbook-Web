const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

export default function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}. ${month}. ${day} (${dayOfWeek}) ${hours}:${minutes}`;
}
