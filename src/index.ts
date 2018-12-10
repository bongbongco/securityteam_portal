import Cheerio from "cheerio";
import Request from "request";

const url = "https://www.krcert.or.kr/data/secNoticeList.do";
Request(url, (error, response, html) => {
    if(error) {
        throw error;
    }

    const load_html = Cheerio.load(html);
    console.log(load_html("#contentDiv > table > tbody > tr:nth-child > td.colTit > a").text());
});