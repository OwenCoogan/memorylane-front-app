import moment from "moment";

export const formatDate = (date: Date): any => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
