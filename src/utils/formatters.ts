import { format } from "date-fns";

export function formatDate(date: string) {
  const __date = new Date(date);
  return format(__date, "dd LLLL yyyy HH:mm aaa");
}
