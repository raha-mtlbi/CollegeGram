import { format } from "date-fns";

export function formatDateToDay(timestamp: number) {
  return format(timestamp, "MMMM dd");
}
