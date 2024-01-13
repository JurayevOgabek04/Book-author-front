import { Routes, Route } from "react-router-dom";
import { Header_Nav, AuthorBookNav } from "../components";
import { Popular, Home, Toprated, Upcoming, SinglePage, Tvshow, Books, BookPage } from "../pages";
import { Temuriylar, Mustaqillik, Jadid, Sovet } from "../nestedPage"

import { Author, Book, MyAccount, Security, Settings, SettingPage } from "../addAuthorBook";
import "./style.css"


export const Provite = () => {

    function muallif() {
        return (
            <div className="d-flex">
                <p className="w-50 func__sytle">
                    Inson bolasi ne kunlarni ko'rmaydi?!
                    Har bir odam o'z g'ami bilan bo'lsa, hayotdan ko'z yumib ketganlarga umr bo'yi motam tutib o'tsa, bu moddiy olam shu kunlarga yetolarmidi?
                    Hayot to'lqini ojizlarni qirg'oqqa irg'itib tashlaydi. Oqimga qarshi suza olganlar, to'lqinni egarlaganlargina ertangi kunga yetib keladi.
                </p>
                <p className="w-50 ms-5 func__sytle">
                    Yer kurrasida chumolidek mehnat qilayotganlardan ko'ra, tuproq tagida yotganlar ko'p. Yer qatlami odam suyaklariga to'lib ketgan.
                </p>
            </div>
        )
    }

    function kitobdan() {
        return (
            <div className="d-flex">
                <p className="w-50 func__sytle">
                    Ba'zida erisha olmaganimiz eng xayrlisidir...  Balki Alloh shunday bo'lishi kerakligini bilib bizdan xayrsiz insonlarni yoki xayrsiz moddiyliklarni  uzoqlashtirar... Zero, Alloh bilguvchi zot! Siz sabr qilguvchilardan bo'ling!
                </p>
                <p className="w-50 ms-5 func__sytle">
                    Agar mendan birov "dunyoda eng katta orzuing nima", deb so'rasa, "qashshoqlarning qashshog'i bo'lish", deb javob berar edim.
                </p>
            </div>
        )
    }

    function kitobxon() {
        return (
            <div className="d-flex">
                <p className="w-50 func__sytle">
                    Ular hech qachon uchrashmaydi. Har holda shunga amindirlar. Kim bilsin ehtimol ko'rishib qolishar bir kun. Eng achinarlisi yana navbatdagi uchrashuvdan umidvor bo'lib yuraverishadi. Hattoki bu nargi dunyoda sodir bo'lishi mukinligini bilishsa ham...
                </p>
                <p className="w-50 ms-5 func__sytle">
                    Juda ko'p narsalarga ko'z yumdim...
                    Menga qilingan barchasini unutdim...
                    xiyonat,
                    aldov,
                    yolg'on...
                    Men kechirdim ko'p bora...
                    Qilgan ayblarim uchun kechirim  so'radim...
                    Gunohlarimga tavba qildim..
                    Shunda ham yomon bo'ldim. Hech yaxshi bo'lolmayapman...
                </p>
            </div>
        )
    }

    return (
        <div className="provite">
            <div className="sayt__bar">
                <h1 className="sayt__bar__title">Badiiyat</h1>
                <div className="d-flex">
                    <ul className="nav__items">
                        <li className="nav__item"><Header_Nav /></li>
                        <li className="nav__item"><AuthorBookNav /></li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Temuriylar />} />
                    <Route path="jadid" element={<Jadid />} />
                    <Route path="sovet" element={<Sovet />} />
                    <Route path="mustaqil" element={<Mustaqillik />} />
                </Route>
                <Route path="/nasr" element={<Popular />} />
                <Route path="/nazm" element={<Toprated />} />
                <Route path="/maqola" element={<Upcoming />} />
                <Route path="/forum" element={<Tvshow />} />
                <Route path="/singepage/:id" element={<SinglePage />} />
                <Route path="/bookpage/:id" element={<BookPage />}>
                    <Route index element={muallif()} />
                    <Route path="kitobdan" element={kitobdan()} />
                    <Route path="kitobxon" element={kitobxon()} />
                </Route>

                <Route path="/author" element={<Author />} />
                <Route path="/book" element={<Book />} />

                <Route path="/settings" element={<Settings />}>
                    <Route path="account" element={<MyAccount />} />
                    <Route path="security" element={<Security />} />
                    <Route path="setpage" element={<SettingPage />} />
                </Route>

                <Route path="/:books" element={<Books />} >
                    <Route index element={<Temuriylar />} />
                    <Route path="jadid" element={<Jadid />} />
                    <Route path="sovet" element={<Sovet />} />
                    <Route path="mustaqil" element={<Mustaqillik />} />
                </Route>
            </Routes>
        </div>
    )
}