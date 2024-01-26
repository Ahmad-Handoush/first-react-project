import Title from "./Title";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <Title>Gallery</Title>
        <div className="images">
          <div className="image">
            <img
              src="../../../public/pexels-dana-tentis-1213710.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-pablo-macedo-845811.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-ronmar-lacamiento-806361.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-foodie-factor-566566.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-harry-dona-2338407.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-timur-saglambilek-915058.jpg"
              alt="..."
            />
          </div>
          <div className="image">
            <img src="../../../public/dark-leafy-greens.jpg" alt="..." />
          </div>
          <div className="image">
            <img
              src="../../../public/pexels-dana-tentis-1213710.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
