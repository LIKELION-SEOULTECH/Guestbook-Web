export default function formatDateBySplit(dateString: string): string {
    const [datePart, timePartWithZone] = dateString.split("T");
    const [year, month, day] = datePart.split("-");
    const timePart = timePartWithZone.replace("Z", "");
    const [hours, minutes] = timePart.split(":");

    const dateObj = new Date(dateString);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];

    return `${year}. ${month}. ${day} (${dayOfWeek}) ${hours}:${minutes}`;
}
