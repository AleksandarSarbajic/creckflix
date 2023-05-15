import { useState } from "react";
import classes from "../Menager/Icons.module.css";
import { FiArrowLeft } from "react-icons/fi";

const icons = [
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeDSuPsL8-xp8jDinagmHtWKfKg2DIKNjGIHj1iCAuJOpcnNJ7Q3AyJJoL1-TF8opz4zGyr7DzXGcjiMNGKsjgm54_uulOh2rw.png?r=93c",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbySXLlzv_71VzB3XcyRCXt3-U9Mp-hl3eQiu6qd7z3z_SBCAoGCCZg04QSVxnKYzAORqrgcLcA-ZzsqwdzQXwzySk1gVRtxeg.png?r=bf4",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd4pDoAj3-CtEyATIT3bBMVPJ9H37bomJCOh_YoushEJ-FD55oYs8Kvwt4HfnHL_ZdYokWFaAcrgF4evF2Jk-DYT-6wtXgScsw.png?r=c5e",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnnytfA7YTgG136xqjbPbGKUZokiZR58TnXliSzuyq1tY6CDqtvPMAUn5MBdEQB-pf98OWXjI9pZk0BaXy4Xwse7nJn1betaQ.png?r=2c8",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ6i9b30tRhZVeL3nbGu-ZNfZTFtr3XxCEYRQn6Bda6PZ51B9HjoOiRVulR95rdAcH4mlGtj3z7iLzoMYX_c0jJd03Qu3NebZA.png?r=c99",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXqhp11o45YG22NLBYsIg8l_TIIPoiPF5Vpuao8QYU3jS_8Gek_uqfqKGeTOhIZUSzcaUId0s1NJyTTrQat5bT5__pvqHsKiCQ.png?r=d9d",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA.png?r=e6e",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWdAPWT0Vb3Eth37phC9Wplk4PJYY04xKlrvLf6eD_pjXTNUMjeq7Q8DgqgYbj8qbJr-766Vmg-Z3YSsEOxObXKphMTFZd-A8g.png?r=bd7",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZf5kiIAuiZG_DvLse1xSkgukFUqHQQR5d6qSDQBlw720nd7cYHcXavvtFNfg5814g1njOdPHGbrKYs9KdWq9hnEqL2-xxh5MA.png?r=1d4",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV0j-bGEVAaWomcgXqIMEfw-h-in8B5DB_edifknx-3aNWWIQKU1KMFN9OZtzQMTCYp2ovDEaPHJlCkDBmdtDUTJwUb0-c_BBg.png?r=a4b",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUoj4FT-0Rr558WbETiintMnmH2JKw4l_p4MdMoxqVx7YXwsvLvvnGUtx3HKZN_BJFH4EHpXn5KqSCBVxLrRz0n4gk64yyeAFw.png?r=229",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSVY0nClWjEeYZcqCRHYlGkM3xLJGCigAOsoESa7WaW8hH_99_LBnn4U8OrZJp78wh2FvQH3YGDKCmnKx0L_iT5bc8tc2A8AYQ.png?r=98e",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRALaKaonY6GfYhbjPRi6y9-yRNzLhI4bjZmc95qXOZODKsLQm6mxPAoEPA9ukfvHSo_OYWkmO1akAmMPTKzig9XzSYimmYUUA.png?r=54c",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABf6xOavwe_0403Yy8hf-XTpZ95quIzDLPuM2srdu0CjNHuaehksf7GeVB6rj1zL-VgOn8arfngrZ_NwJRPA7hmEbKRpIeYqPdg.png?r=9b2",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQmVty8mliA2A8c4MBGZ_opSqryn8Rl0XWyAuGa_eX40wgu9tt-XYRC6WjdzPbGioDn4fegVuW4zPWqGlDm8UWphii2HBW8EFA.png?r=1b3",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZvyFJsnlhoR0OLiQKj1quep6tOfJWQBejop_TUKuWyz4SmZ4yEUf_wLFR98_R4VQomw0GkikWvtOT0m_JnLy7uNDBEmCOYokA.png?r=2da",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR-76XnDIpgI9Y5AxW-0mbA8XM6pBawp8AEibixll-x2uzc_tTvqVvqd5gGF2lU_yNwUWSvCvw89O0nfyLklL0_2f8nZ6y0MHg.png?r=87b",
  "https://occ-0-7593-1490.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR5B1N6qdVLwa9eIOAaRsX7U6BLMvU2MQokenKJzKGmpRmVIUnwUEmUcIhsDZ9cKxrtOlLUv-4jhQXEukuScGykev4v3yZyr6A.png?r=e31",
];

export default function Icons(props) {
  const [image, setImage] = useState(props.image);
  function setImageValueHandler(e) {
    setImage(e.target.currentSrc);
    console.log(e.target.currentSrc);
  }
  function sendImageHandler() {
    props.get(image);
  }

  return (
    <>
      <div className={classes.bar}>
        <nav className={classes.nav}>
          <div className={classes.flex}>
            <FiArrowLeft className={classes.arrow} onClick={sendImageHandler} />
            <div className={classes.text}>
              <p className={classes.heading}>EditProfile</p>
              <p className={classes.subheading}>Choose a profile icon.</p>
            </div>
          </div>
          <div className={classes.user}>
            <span className={classes.name}>{props.name}</span>
            <img src={image} className={classes.profile} />
          </div>
        </nav>
      </div>
      <div className={classes.container}>
        <h1 className={classes.header}>Icons</h1>
        <div className={classes.grid}>
          {icons.map((item) => (
            <button
              className={classes.button}
              value={item}
              onClick={setImageValueHandler}
            >
              <img
                src={item}
                className={`${classes.image} ${
                  image === item ? classes.out : ""
                }`}
                alt="Profile icon"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
