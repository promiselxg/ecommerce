import 'react-awesome-slider/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const media = [
  {
    source:
      'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80',
  },
];
const Hero = () => {
  return (
    <>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={10000}
          centerMode={false}
          className=""
          containerClass=""
          dotListClass=""
          autoPlay
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {media?.map((img, i) => (
            <div key={i} className={`flex md:h-[600px] h-[330px]`}>
              <img src={img.source} alt="" className="w-full object-fill" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
