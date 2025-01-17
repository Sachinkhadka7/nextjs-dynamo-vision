"use client";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/gallery/bike1.jpg", width: 250, height: 250 },
  { src: "/gallery/bike2.jpg", width: 250, height: 500 },
  { src: "/gallery/bike3.jpg", width: 250, height: 250 },
  { src: "/gallery/bike4.jpg", width: 500, height: 250 },
  { src: "/gallery/bike5.jpg", width: 250, height: 250 },
  { src: "/gallery/drone1.jpg", width: 250, height: 250 },
  { src: "/gallery/drone10.jpg", width: 250, height: 250 },
  { src: "/gallery/drone11.jpg", width: 500, height: 250 },
  { src: "/gallery/drone12.jpg", width: 500, height: 250 },
  { src: "/gallery/drone13.jpg", width: 250, height: 250 },
  { src: "/gallery/drone14.jpg", width: 250, height: 500 },
  { src: "/gallery/drone15.jpg", width: 250, height: 250 },
  { src: "/gallery/drone2_2rc.jpg", width: 500, height: 500 },
  { src: "/gallery/drone3.jpg", width: 250, height: 250 },
  { src: "/gallery/drone4.jpg", width: 250, height: 250 },
  { src: "/gallery/drone5.jpg", width: 250, height: 500 },
  { src: "/gallery/drone6.jpg", width: 250, height: 250 },
  { src: "/gallery/drone7.jpg", width: 250, height: 500 },
  { src: "/gallery/drone8.jpg", width: 250, height: 250 },
  { src: "/gallery/drone9.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation1.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation10.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation11_2r.jpg", width: 250, height: 500 },
  { src: "/gallery/graduation2_2c.jpg", width: 500, height: 250 },
  { src: "/gallery/graduation3.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation4_2r.jpg", width: 250, height: 500 },
  { src: "/gallery/graduation5.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation8.jpg", width: 250, height: 250 },
  { src: "/gallery/graduation9_2r.jpg", width: 250, height: 500 },
  { src: "/gallery/landscape1.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape10.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape11.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape12.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape13.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape2.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape3.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape4_2rc.jpg", width: 500, height: 500 },
  { src: "/gallery/landscape5.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape6.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape7.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape8.jpg", width: 250, height: 250 },
  { src: "/gallery/landscape9_2c.jpg", width: 500, height: 250 },
  { src: "/gallery/nature1_2rc.jpg", width: 500, height: 500 },
  { src: "/gallery/nature2.jpg", width: 250, height: 250 },
  { src: "/gallery/nature3.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait10.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait11.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait12_rc.jpg", width: 500, height: 500 },
  // { src: "/gallery/potrait13.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait14.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait1_2c.jpg", width: 500, height: 250 },
  { src: "/gallery/potrait2_2r.jpg", width: 250, height: 500 },
  { src: "/gallery/potrait3.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait4.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait5_2c.jpg", width: 500, height: 250 },
  { src: "/gallery/potrait6_2c.jpg", width: 500, height: 250 },
  { src: "/gallery/potrait7.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait8.jpg", width: 250, height: 250 },
  { src: "/gallery/potrait9.jpg", width: 250, height: 250 },
  { src: "/gallery/sachin1_2r.jpg", width: 250, height: 500 },
  { src: "/gallery/sachin2.jpg", width: 250, height: 250 },
  { src: "/gallery/sachin3_2r.jpg", width: 500, height: 250 },
  { src: "/gallery/sports1_2rc.jpg", width: 500, height: 500 },
  { src: "/gallery/sports2.jpg", width: 250, height: 250 },
  { src: "/gallery/sports3.jpg", width: 250, height: 250 },
  { src: "/gallery/sports4.jpg", width: 250, height: 250 },
  { src: "/gallery/sports5.jpg", width: 250, height: 250 },
  { src: "/gallery/sports6.jpg", width: 250, height: 250 },
  { src: "/gallery/wedding1.jpg", width: 250, height: 250 },
  { src: "/gallery/wedding2.jpg", width: 250, height: 250 },
  { src: "/gallery/wedding3_2c.jpg", width: 250, height: 500 },
  // { src: "/gallery/wedding4.jpg", width: 250, height: 250 },
  // { src: "/gallery/wedding5.jpg", width: 250, height: 250 },
];

const page = () => {
  return (
    <div className="p-10">
      {/* <PhotoAlbum layout="rows" photos={photos} /> */}
      <ImageList variant="masonry" cols={3} gap={8}>
        {photos.map((item) => (
          <ImageListItem key={item.src}>
            <img srcSet={`${item.src}`} src={`${item.src}`} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default page;
