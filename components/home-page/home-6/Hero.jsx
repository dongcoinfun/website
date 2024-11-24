import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="20QUNgFIrK0"
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-two position-relative pt-190 lg-pt-180 md-pt-100">
        {/* <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
        /> */}
        {/* <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
        /> */}

        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                {/* <img
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                /> */}
                Dongcoin
                {/* <span className="position-relative d-inline-block"></span>
                &amp; make life easier. */}
              </h1>
              <p className="text-lg mb-40 pt-20 lg-mb-50 lg-pt-10">
                Dongcoin was created by Clanker for the memetic economy. We
                believe in a future where wallets replace banks and memes
                replace markets.
              </p>
              <img
                src="images/logo/DONG.png"
                alt="Dongcoin illustration"
                className="mt-2 mx-auto d-block pb-2"
                style={{ maxWidth: "600px" }}
              />
              <div className="mt-4 d-sm-flex justify-content-center align-items-center">
                <Link
                  href="https://dexscreener.com/base/0x6b3b72da05738806a98a710b6cab2005b5f4c2f1"
                  className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
                  target="_blank"
                >
                  Buy $DONG
                </Link>
                {/* <div
                  role="button"
                  className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play" />
                  <div className="ps-3 text-start">
                    <span className="d-block">Watch</span>
                    <strong className="fs-18 fw-500 tx-dark d-block">
                      Intro video
                    </strong>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="">
            <div className="bg-wrapper">
              {/* <img
                src="/images/media/img_05.jpg"
                alt="media"
                className="lazy-img main-screen w-100"
              /> */}
            </div>
            {/* /.bg-wrapper */}
            {/* <img
              src="/images/shape/shape_28.svg"
              alt="media"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_29.svg"
              alt="media"
              className="lazy-img shapes shape-two"
            />
            <img
              src="/images/shape/shape_30.svg"
              alt="media"
              className="lazy-img shapes shape-three"
            />
            <img
              src="/images/shape/shape_31.svg"
              alt="media"
              className="lazy-img shapes shape-four"
            /> */}
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
