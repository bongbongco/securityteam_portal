import Cheerio from "cheerio";
import Request from "request";


const kisa_url = "https://www.krcert.or.kr/data/secNoticeList.do";
Request(kisa_url, (error, response, html) => {
    if(error) {
        throw error;
    }

    const load_html = Cheerio.load(html);
    let nth:any = null;

    load_html("#contentDiv > table > tbody > tr > td.colTit > a").each((n) => {
        nth = n + 1;
        console.log(
            load_html("#contentDiv > table > tbody > tr:nth-child("+ (<String>nth) +") > td.colTit > a"
            ).text(),
            load_html("#contentDiv > table > tbody > tr:nth-child("+ (<String>nth) +") > td.colTit > a"
            ).attr("href"),
            load_html("#contentDiv > table > tbody > tr:nth-child("+ (<String>nth) +") > td:nth-child(5)"
            ).text()
        );
    });
});