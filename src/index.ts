import Request from "request";

const url = "https://www.krcert.or.kr/data/secNoticeList.do";
Request(url, (error, response, html) => {
    if(error) {
        throw error;
    }
    console.log(html);
});