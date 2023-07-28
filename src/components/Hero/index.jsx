import 'react-awesome-slider/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const media = [
  {
    source:
      'https://www.beginningboutique.com/cdn/shop/files/US-HERO-DESKTOP-PLACEHOLDER_1b682585-aa08-494b-be30-3e9e5e77c2ec_2000x.png?v=1690234431',
  },
  {
    source:
      'https://www.vrggrl.com/cdn/shop/files/WEB_BANNER_426a4472-c2d2-47f2-a5b7-9ee793866075.jpg?v=1690180699',
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
            <div key={i} className={`flex md:h-[600px] h-[330px] bg-right-top`}>
              <img
                src={img.source}
                alt=""
                className="w-full object-cover bg-right-top "
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
