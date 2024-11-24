import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-6/Header";
import Hero from "../../components/home-page/home-6/Hero";
import ScreenHolder from "../../components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "../../components/home-page/home-6/ProductTabs";
import TagList from "../../components/home-page/home-6/TagList";
import Features from "../../components/home-page/home-6/Features";
import Testimonial from "../../components/home-page/home-6/Testimonial";
import CircleBgShape from "../../components/home-page/home-6/CircleBgShape";
import Partners from "../../components/home-page/home-6/Partners";
import Pricing from "../../components/home-page/home-6/Pricing";
import Subscribe from "../../components/home-page/home-6/Subscribe";
import FooterMenu from "../../components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
if (typeof window !== "undefined") {
  // Initialize Firebase here
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

const SassProduct = () => {
  return (
    <>
      <Seo pageTitle="Flexclub" />

      {/* <!-- 
      =============================================
        Theme Default Menu
        ============================================== 	
      --> */}
      <Header />

      {/* /* 
        =============================================
        Theme Hero Banner
        ==============================================  */}
      <Hero />

      {/* 
        =============================================
        Feature Section Three
        ============================================== 
        */}

      {/* 
        =============================================
        Feature Section Four
        ============================================== 
        */}
      <div className="fancy-feature-four pt-10 lg-pt-10">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          {/* <ProductTabs /> */}

          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Five
        ============================================== 
        */}

      {/* 
        =============================================
        Feature Section Six
        ============================================== 
        */}

      {/* /.fancy-feature-six */}

      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}

      {/* 
        =============================================
        Partner Section One
        ============================================== 
        */}

      {/*
        =====================================================
        Pricing Section One
        =====================================================
        */}

      {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}

      {/*
        =====================================================
        Fancy Short Banner Three
        =====================================================
        */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-two theme-basic-footer">
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
    </>
  );
};

export default SassProduct;
