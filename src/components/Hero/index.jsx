import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const media = [
  {
    source:
      'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80',
  },
  {
    source:
      'https://images.squarespace-cdn.com/content/v1/624b503dce400d19b18aa05e/1649102917213-ZE0JVQU1R3QILFB2TF5Y/Stocksy_comp_1173427-reduced.jpg?format=1000w',
  },
  {
    source:
      'https://images.squarespace-cdn.com/content/v1/624b503dce400d19b18aa05e/1649102917312-QSPPU9IAATXUM7PNCTAH/Stocksy_comp_1504207.jpg?format=500w',
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
            <div key={i} className={`flex h-screen`}>
              <img src={img.source} alt="" className="w-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
