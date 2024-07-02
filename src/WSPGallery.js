import React, { useState, useEffect } from "react";
import "./wsp-gallery.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faStethoscope,
  faHouseUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import doctor from "./image/logo-_2_.png";
import elefant from "./image/doctor1.jpg";
import lion from "./image/doctor4.jpg";
import anaconda from "./image/doctor5.jpg";
export default function WSPGallery() {
  //nav marker
  const marker = document.querySelector("#marker");
  const nav = document.querySelectorAll(".navbar ul li");
  function indecator(a) {
    marker.style.left = a.offsetLeft - 3 + "px";
    marker.style.width = a.offsetWidth + 6 + "px";
  }
  nav.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      indecator(e.target);
    });
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const btn = document.querySelector(".rotate-btn");
    const handleRotateClick = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    btn.addEventListener("click", handleRotateClick);
    const interval = setInterval(handleRotateClick, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slides = [
    {
      image: anaconda,
      place: "ابحث عن طبيب",
      country: "نحن هنا لمساعدتك",
      btn: "تسجيل الدخول",
      icon: faHouseUser,
      color: "#d4d9eb",
      color2: "rgb(203, 227, 230)",
    },
    {
      image: lion,
      place: "احجز استشاره طبيه",
      country: "تواجد دائم فى كل مكان",
      btn: `ابحث عن طبيب`,
      icon: faStethoscope,
      color: "rgb(104, 174, 240)",
      color2: " rgb(8, 8, 124)",
    },

    {
      image: elefant,
      place: "رعايه صحيه لحياه افضل ",
      country: "اكتشف الاطباء الموجودين حولك",
      btn: "احجز الان",
      icon: faStar,
      color: " #83c8dc",
      color2: " #0b323b",
    },
  ];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <div className='abovHeader'>
        <div className='geolocation'>
          <FontAwesomeIcon icon={faLocationDot} />
          {` Location`}
        </div>
        <div className='calling' style={{ position: "relative" }}>
          <div style={{ display: "inline-block", cursor: "pointer" }}>
            <CopyToClipboard text='01021589478' onCopy={handleCopy}>
              <FontAwesomeIcon icon={faPhone} style={{ marginLeft: "10px" }} />
            </CopyToClipboard>
            <p style={{ position: "absolute", color: "rgb(45, 126, 137)" }}>
              {copied && (
                <p>
                  <span style={{ color: "rgb(23, 82, 90)" }}>Copied</span> :
                  01021589478
                </p>
              )}
            </p>
          </div>
          <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: "30px" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: "20px" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: "20px" }} />
          <p
            title='frequent questions'
            style={{
              display: "inline-block",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            FAQ
          </p>
        </div>
      </div>
      <header className='header'>
        <h1 className='logo'>
          <img
            src={doctor}
            alt=''
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </h1>
        <nav className='navbar'>
          <ul>
            <li>الرئيسية</li>
            <li>البحث</li>
            <li>المرضي</li>
            <li>الاعدادات</li>
            <li>الصفحات</li>
            <li>طبيب</li>
          </ul>
          <div id='marker'></div>
          <button>تسجيل الدخول</button>
        </nav>
      </header>
      <div className='container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`bg-slide ${
              index === activeIndex ? "active" : "after-active"
            }`}
          >
            <div className='circle bg'>
              <img src={slide.image} alt='' />
            </div>
            <div className='circle larg'>
              <img src={slide.image} alt='' />
            </div>
            <div className='circle small'>
              <img src={slide.image} alt='' />
            </div>
            <div className='content-text'>
              <div className='place'>
                <h1 style={{ color: slide.color2 }}>{slide.place}</h1>
              </div>
              <div className='contry'>
                <h2 style={{ color: slide.color2 }}>{slide.country}</h2>
              </div>
              <div className='btn'>
                <div>
                  {slide.btn}
                  <FontAwesomeIcon
                    icon={slide.icon}
                    style={{ marginLeft: "20px", color: slide.color }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='circle-darktransp'></div>
        <div className='line'></div>

        <div className='rotate-btn'></div>
      </div>
    </div>
  );
}
