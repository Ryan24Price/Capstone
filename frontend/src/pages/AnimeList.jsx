import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

// Example array of anime information
const AnimeList = () => {
  
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
      <h1>Anime</h1>

      <marquee>Welcome To <i>AnimeStreamer</i>.com<sup>&reg;</sup></marquee>
    <label class="online">Stream Latest Anime Now!</label>

      <body>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-0 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://placehold.co/320"
                    className="card-img-top"
                    alt="Tokyo Ghoul"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Tokyo Ghoul</h4>
                  <p>A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh.</p>
                  <a href="https://youtu.be/pwN4GmQHx-w?si=xGY_SxQS7LFFYslu" class="btn btn-primary">
                    Trailer
                  </a>
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
                    alt="Jujutsu Kaisen"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Jujutsu Kaisen</h4>
                  <p>Student with super human demonic abilities</p>
                  <a href="https://youtu.be/tfMy7uUDsAQ?si=MNf164cmPpZef5WS" class="btn btn-primary">
                    Trailer
                  </a>
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
                    alt="Attack on Titan"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                <h4>Attack on Titan</h4>
                  <p>Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction</p>
                  <a href="https://youtu.be/bT9csxkth8g?si=dByRjEsHYMQFagdq" class="btn btn-primary">
                    Trailer
                  </a>
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
                    alt="Demon Slayer"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h4>Demon Slayer</h4>
                  <p>Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</p>
                  <a href="https://youtu.be/nxE0Xp0ARcM?si=BerITHdWX6X3wWxL" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <p>The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.</p>
                  <a href="https://youtu.be/YUH1mfV3IEU?si=k7TUt9_iNPIWqoCM" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <p>Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.</p>
                  <a href="https://youtu.be/TbHtbzAnZJ4?si=POSgmGDUnohuC7Y2" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <p>Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential.</p>
                  <a href="https://youtu.be/3k2tl78bfjk?si=yjhEphod7HvXiYJA" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <p>Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage.</p>
                  <a href="https://youtu.be/yeUpnIKt6k4?si=D2FBKjSVd77Vs5SZ" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <a href="https://youtu.be/bGc1Na8mlw0?si=p1Q9OOcESfqRzX9W" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <a href="https://youtu.be/LqJQqcDQxBg?si=uacmgC65bdkRO9LS" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <a href="https://youtu.be/Wipd9hjjyp8?si=mD2nMSQKqnh4z3K5" class="btn btn-primary">
                    Trailer
                  </a>
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
                  <a href="https://youtu.be/sxufB6DxXk0?si=2s5yyxPAMSfHraJ5" class="btn btn-primary">
                    Trailer
                  </a>
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
