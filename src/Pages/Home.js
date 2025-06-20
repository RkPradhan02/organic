import React, { useState, useMemo } from "react";
import Header from "../Components/Header";
import DynamicSwiper from "../Components/DynamicSwiper";
import { TfiShoppingCart } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
import "./Home.css";
import category from "../assets/data/category";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DealProduct from "../Components/DealProducts";

const Home = () => {
  const vegDeal = useMemo(() => ["1","5","12","15"],[]);
  const [categories, setCategories] = useState();
  const facts = [
    {
      id: 1,
      title: "Free Home Delivery",
      desc: "Nemo enim ipsam voluptatem.",
      icons: <TfiShoppingCart />,
    },
    {
      id: 2,
      title: "Money Back Guarantee",
      desc: "Nemo enim ipsam voluptatem.",
      icons: <BsCurrencyDollar />,
    },
    {
      id: 1,
      title: "24x7 Online Support",
      desc: "Nemo enim ipsam voluptatem.",
      icons: <BiSupport />,
    },
  ];
    return (
        <>
            <Header/>
            {/* slider section */}
      <DynamicSwiper />
      {/* facts section */}
      <Container fluid className="shadow">
        <Container>
          <Row className="">
            {facts.map((item) => (
              <Col
                xs={12}
                md={4}
                lg={4}
                key={item.id}
                className=" d-flex flex-sm-column flex-lg-row gap-3 align-items-center py-3 py-md-4"
              >
                <div className="icon-box">{item.icons}</div>
                <div>
                  <h4 className="text-sm-center text-lg-start text-black mb-0 fs-6">
                    {item.title}
                  </h4>
                  <p className="text-sm-center text-lg-start mb-0 fs-13 text-light-black">
                    {item.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      {/* category swiper section */}
      <Container fluid className="section muted-section">
        <Container>
            <div className="section-header">
              <p className="sub-topic text-center">Choose Categories</p>
              <h4 className="topic text-center">Explore Categories</h4>
            </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            speed={600}
            navigation={true}
            pagination={{
              type: "fraction",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="mySwiper "
          >
            {category.map((categories) => {
              return (
                <SwiperSlide key={categories.id}>
                  <div className="category-box">
                    <img
                      style={{
                        width: "70px",
                        margin: "auto",
                      }}
                      src={categories.image}
                      alt={categories.name}
                    />
                    <p className="categoty-name">{categories.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Container>
      <Container fluid className="section">
            <Container>
                <div className="section-header">
                    <p className="sub-topic text-center">Deals of The Month</p>
                    <h4 className="topic text-center">Fresh Vegetables</h4>
                </div>
                {/* products */}
                <DealProduct productIds={vegDeal}/>
            </Container>
      </Container>
        </>
    )
};
export default Home;