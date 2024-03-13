import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Carousel from 'react-material-ui-carousel';
import { Image } from "@mui/icons-material";



// Import images
// carsouel images 
import image201 from "../assets/carousel/201.png";
import image202 from "../assets/carousel/202.png";
import image203 from "../assets/carousel/203.png";
import image204 from "../assets/carousel/204.png";
import image205 from "../assets/carousel/205.png";
// import image206 from "../assets/carousel/206.png";
import image207 from "../assets/carousel/207.png";
import image208 from "../assets/carousel/208.png";
import image209 from "../assets/carousel/209.png";
import image210 from "../assets/carousel/210.png";
import image211 from "../assets/carousel/211.png";
import image212 from "../assets/carousel/212.png";
import image213 from "../assets/carousel/213.png";
import image214 from "../assets/carousel/214.png";
// import image215 from "../assets/carousel/215.png";
// import image216 from "../assets/carousel/216.png";
// import image217 from "../assets/carousel/217.png";
// import image218 from "../assets/carousel/218.png";
// import image219 from "../assets/carousel/219.png";
import image220 from "../assets/carousel/220.png";
// main body video images 
import image401 from "../assets/images/401.jpg";
import image402 from "../assets/images/402.jpg";
import image403 from "../assets/images/403.jpg";
import image404 from "../assets/images/404.jpg";


const carouselImages = [
  image201, image202, image203, image204, image205,
  image207, image208, image209, image210, image211,
  image212, image213, image214, image220,
];
  
  const flipCardImages = [
  image401, image402, image403, image404, 
];


// Example array of anime information
const MostPopular = () => {
  const openTrailer = (url) => {
    const trailerUrl = url + (url.includes('?') ? '&' : '?') + 'autoplay=1&fs=1';
    window.open(
      trailerUrl,
      "_blank",
      "top=100,left=250,height=435,width=600,channelmode=yes,fullscreen=yes,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,noopener=no"
    );
  };
  const images = [
    ...carouselImages,
    ...flipCardImages
  ];


  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bootstrap</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <style>
          {`
          body {
            font-family: Arial, Helvetica, sans-serif;
          }

          .flip-card {
            background-color: transparent;
            width: 300px;
            height: 300px;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            /* Add red box shadow */
            box-shadow: 0 0 10px red;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .flip-card-front {
            background-color: #bbb;
            color: black;
          }

          .flip-card-back {
            background-color: black;
            color: white;
            transform: rotateY(180deg);
          }
          `}
        </style>
      </head>
      <div>
      <Carousel>
        {carouselImages.map((image, i) => (
          <img key={i} src={image} alt={`Anime ${i}`} style={{ width: "65%", height: "10%" }} />
        ))}
      </Carousel>
      </div>
      <h1>Most Popular</h1>
      <marquee>
        Welcome To <i>AnimeStreamer</i>.com<sup>&reg;</sup>
      </marquee>
      <label class="online"></label>

      <body>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={image401}
                    className="card-img-top"
                    alt="Mob Psycho 100"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Mob Psycho 100</h4>
                  <p>
                   .
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/uP2hY4ouejE?si=QBLdhJXHVOnwSXfN"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained"
                  onClick={() =>
                      openTrailer(
                        "https://youtu.be/kG-BIWRAC6k?si=_WuMtDCFq3nUP7pK"
                      )
                    }
                  >
                  Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={4} size="Large" />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={image402}
                    alt="Neon Genesis Evangelion"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Neon Genesis Evangelion</h4>
                  <p>.</p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/13nSISwxrY4?si=E_HniiVVJLIgQfFB"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button  variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/13nSISwxrY4?si=E_HniiVVJLIgQfFB"
                      )
                    }
                  >
                    Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={5} size="Large" />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={image403}
                    className="card-img-top"
                    alt="Shinchan"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Shinchan</h4>
                  <p>
                   .
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/C4zPQDdpYMg?si=C2jJCmQ6pPPU_OX0"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/C4zPQDdpYMg?si=C2jJCmQ6pPPU_OX0"
                      )
                    }
                  >
                    Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={3} size="Large" />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={image404}
                    className="card-img-top"
                    alt="Zom 100"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Zom 100</h4>
                  <p>
                   .
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/ToTFR0NVmN0?si=AwmDjOhkG8MNt015"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button  variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/ToTFR0NVmN0?si=AwmDjOhkG8MNt015"
                      )
                    }
                  >
                    Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={4} size="Large" />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MostPopular;





