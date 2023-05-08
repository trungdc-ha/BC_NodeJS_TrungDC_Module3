const DAY_OF_WEEK = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
let currenDay = new Date();
let index = currenDay.getDay();
console.log('Thôn tin ngày hôm nay: ', currenDay.toJSON())
console.log('Ngày trong tuần: ', DAY_OF_WEEK[index])
