import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Carousel from 'react-material-ui-carousel';
import { Image } from "@mui/icons-material";



// Import images
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



// Example array of anime information
const AnimeList = () => {
  const openTrailer = (url) => {
    window.open(
      url,
      "_blank",
      "top=100,left=250,height=400,width=600,channelmode=yes,fullscreen=yes,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,noopener=no"
    );
  };

  const images = [
   
    image201, // Using imported image
    image202, // Using imported image
    image203, // Using imported image
    image204, // Using imported image
    image205, // Using imported image
    // image206, // Using imported image
    image207, // Using imported image
    image208, // Using imported image
    image209, // Using imported image
    image210, // Using imported image
    image211, // Using imported image
    image212, // Using imported image
    image213, // Using imported image
    image214, // Using imported image
    // image215, // Using imported image
    // image216, // Using imported image
    // image217, // Using imported image
    // image218, // Using imported image
    // image219, // Using imported image
    image220, // Using imported image
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
        {images.map((image, i) => (
          <img key={i} src={image} alt={`Anime ${i}`} style={{ width: "65%", height: "10%" }} />
        ))}
      </Carousel>
      </div>
      <h1>Anime</h1>
      <marquee>
        Welcome To <i>AnimeStreamer</i>.com<sup>&reg;</sup>
      </marquee>
      <label class="online">Stream Latest Anime Now!</label>

      <body>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ign.com%2Farticles%2Fbest-anime-characters&psig=AOvVaw0_3bbEX6reNENVKag5o1Ge&ust=1710363549837000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiy__DO74QDFQAAAAAdAAAAABAE"
                    className="card-img-top"
                    alt="Tokyo Ghoul"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Tokyo Ghoul</h4>
                  <p>
                    A Tokyo college student is attacked by a ghoul, a
                    superpowered human who feeds on human flesh.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/pwN4GmQHx-w?si=xGY_SxQS7LFFYslu"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthehoneycombers.com%2Fhong-kong%2Fbest-anime-series-to-watch%2F&psig=AOvVaw0_3bbEX6reNENVKag5o1Ge&ust=1710363549837000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiy__DO74QDFQAAAAAdAAAAABAI"
                    className="card-img-top"
                    alt="Jujutsu Kaisen"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Jujutsu Kaisen</h4>
                  <p>Student with super human demonic abilities</p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/tfMy7uUDsAQ?si=MNf164cmPpZef5WS"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="../assets/images/bleach.jpg"
                    className="card-img-top"
                    alt="Attack on Titan"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Attack on Titan</h4>
                  <p>
                    Eren Jaeger vows to cleanse the earth of the giant humanoid
                    Titans that have brought humanity to the brink of extinction
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/bT9csxkth8g?si=dByRjEsHYMQFagdq"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="../assets/images/death note.jpg"
                    className="card-img-top"
                    alt="Demon Slayer"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Demon Slayer</h4>
                  <p>
                    Tanjiro and his sister Nezuko, who is turning into a demon
                    slowly. Tanjiro sets out to become a demon slayer to avenge
                    his family and cure his sister.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/nxE0Xp0ARcM?si=BerITHdWX6X3wWxL"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="One Punch Man"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>One Punch Man</h4>
                  <p>
                    The story of Saitama, a hero that does it just for fun & can
                    defeat his enemies with a single punch.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/YUH1mfV3IEU?si=k7TUt9_iNPIWqoCM"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="One Piece"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>One Piece</h4>
                  <p>
                    Follows the adventures of Monkey D. Luffy and his pirate
                    crew in order to find the greatest treasure ever left by the
                    legendary Pirate, Gold Roger.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/TbHtbzAnZJ4?si=POSgmGDUnohuC7Y2"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Hunter x Hunter"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Hunter x Hunter</h4>
                  <p>
                    Gon Freecss aspires to become a Hunter, an exceptional being
                    capable of greatness. With his friends and his potential.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/3k2tl78bfjk?si=yjhEphod7HvXiYJA"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Naruto"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Naruto</h4>
                  <p>
                    Naruto Uzumaki, a mischievous adolescent ninja, struggles as
                    he searches for recognition and dreams of becoming the
                    Hokage.
                  </p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/yeUpnIKt6k4?si=D2FBKjSVd77Vs5SZ"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Yuyu Hakusho"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Yuyu Hakusho</h4>
                  <p></p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/bGc1Na8mlw0?si=p1Q9OOcESfqRzX9W"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={2} size="Large" />
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="My Hero Academia"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>My Hero Academia</h4>
                  <p></p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/LqJQqcDQxBg?si=uacmgC65bdkRO9LS"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Black Clover"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Black Clover</h4>
                  <p></p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/Wipd9hjjyp8?si=mD2nMSQKqnh4z3K5"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
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
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Dragon Ball Z"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Dragon Ball Z</h4>
                  <p></p>
                  <Button
                    variant="contained"
                    onClick={() =>
                      openTrailer(
                        "https://youtu.be/sxufB6DxXk0?si=2s5yyxPAMSfHraJ5"
                      )
                    }
                  >
                    Trailer
                  </Button>

                  <Button variant="contained">Play</Button>
                  <Stack spacing={1}>
                    <Rating name="size-Large" defaultValue={5} size="Large" />
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

export default AnimeList;


