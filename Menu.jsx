import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Navbar from './Navbar'; 
import gsap from "gsap";
import { Power2 } from "gsap";
import "./index.css"
// import Footer from './Footer';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Navbar = ({ activeSection }) => (
  <nav>
    {sections.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        className={ `block text-white font-semibold text-[3vh] uppercase tracking-tighter leading-[7vh] ${activeSection === section.id ? 'active' : ''}`} >
        {section.label}
      </a>
    ))}
  </nav>
);

// import {Link } from 'react-router-dom';
const sections = [
 {id:"Periperichicken",label:"Peri peri chicken"},
 {id:" value",label:" VALUE SNACKERS"},
 {id:" chicken rolls",label:" chicken rolls"},
 {id:" biryani buckets",label:" biryani buckets"},
 {id:"box meals",label:"box meals"},
 {id:"burgers",label:" burgers"},
 {id:"snacks",label:"snacks"},
 {id:"beverages",label:"beverages"},

]
function Menu() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const menuItems = gsap.utils.toArray(".menu3");

    menuItems.forEach((menuItem, index) => {
      gsap.from(menuItem, {
        opacity: 0,
        y: 50,
        duration: 2,
        scrollTrigger: {
          scrub: 0.3,
          trigger: menuItem,
          ease: Power2.easeInOut,
          scroller: "body",
        },
      });
      gsap.to(menuItem, {
        opacity: 1,
        y: 0,

        stagger: 0.8,
        duration: 2,
        scrollTrigger: {
          scrub: 0.3,
          trigger: menuItem,
          ease: Power2.easeInOut,
          scroller: "body",

          start: "top bottom",
          end: "bottom 30%",
        },
      });
    });
  }, []);

  return (
    <div className="bg-zinc-900 w-full relative  ">

      <div className=" w-full flex pl-[10vw] pb-[20vh]">
        <div className="img2 h-screen  w-[30vw]  mt-20 sticky top-[1%] ">
          <img className="h-[10vh]"
            src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
            alt=""
         />
         <h1 className="text-white font-extrabold mt-[2vh] mb-[2vh]">KFC MENU</h1>
         <Navbar activeSection={activeSection} />
        </div>

        <div className="menu pr-[10vw] menu2">
          <div className=" bg-zinc-200 flex   border-zinc-900 border-2 w-[300px] shadow-md rounded-2xl overflow-hidden mt-40 search">
            <img
              src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg"
              alt=""
              className="h-8 ml-1"
            />
            <input
              type="search"
              placeholder="search you cravings"
              className="bg-zinc-700 capitalize w-full h-8 outline-none"
            />
          </div>
          <div className="linear border-zinc-900 border-b-2 mt-4 "></div>
          <motion.div
            initial={{ x: [0, 0, 0] }}
            animate={{ x: [100, 100, 0] }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 1.5 }}
            className="img "
          >
            <div id={sections[0].id} className='section transition-[background-color] menu2  w-full bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")] bg-contain mt-10 rounded-md justify-center align-middle'>
              <h1 className="uppercase tracking-tighter font-semibold text-3xl p-5 text-zinc-200">
              {sections[0].label}
              </h1>
              <div className="snickers   grid grid-cols-3 pb-[8vh] gap-[10vw] justify-center align-middle w-full mx-3">
                {[
                  {
                    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
                    h2: "5 Leg Pc & 2 Dips Bucket",
                    amt: "₹519.05",
                    p: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
                  },
                  {
                    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
                    h2: "Peri Peri 10 Pc Chicken Strips & 2 Dips",
                    amt: "₹499.05",
                    p: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
                  },
                  {
                    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
                    h2: "5 Peri Peri 10 Leg Pc & 4 Dips",
                    amt: "₹948.57",
                    p: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
                  },
                  {
                    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
                    h2: "Peri Peri 6pc Chicken Strips",
                    amt: "₹299.05",
                    p: "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
                  },
                ].map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="menu3 text shadow-xl  text-black w-[18vw] h-[80vh] rounded-md  overflow-hidden p-4 relative bg-zinc-200"
                    >
                      <img src={items.img} alt="" className="" />
                      <h1 className="text-red-700 text-[3.5vh] font-bold">
                        {items.h2}
                      </h1>
                      <h2 className="font-semibold text-[2.5vh]">
                        {items.amt}
                      </h2>
                      <p className=" text-[2.5vh]">{items.p}</p>
                      <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center px-2 h-[7.5vh] w-[15vw] align-middle  absolute bottom-[5%] left-1/2 -translate-x-1/2">
                        <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                          <h5>add to cart</h5>
                        </button>
                        <img
                          src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                          className="py-2"
                          alt="cart"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div id={sections[1].id} className='menu2 section  bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")] bg-contain '>
            <h1 className="mt-40 mb-4 p-4 font-bold text-4xl text-zinc-200 ">
            {sections[1].label}
            </h1>
            <div className=" pb-[8vh]  grid grid-cols-3 mx-3 gap-4 text-black snickers menu4">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
                  h2: "Single Chicken Roll",
                  amt: "₹119.05",
                  p: "Street style roll with single chicken strip, onions and two spicy sauce",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002348.jpg?ver=41.8",
                  h2: "Chicken Longer Burger & 2 Strips Combo",
                  amt: "₹219.05",
                  p: "Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=41.8",
                  h2: "Regular Popcorn",
                  amt: "₹115.24",
                  p: "Signature bite-sized boneless chicken, with special spices",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002301.jpg?ver=41.8",
                  h2: "2 Veg Longer Burger",
                  amt: "₹198.10",
                  p: "The really long burger with Veg Patty, Onion, Lettuce and two sauces",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=41.8",
                  h2: "Chocolate Lava Cake",
                  amt: "₹108.57",
                  p: "Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal ",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="value menu3  shadow-xl bg-zinc-200 w-[18vw] h-[80vh] rounded-md overflow-hidden mt-5 p-4 relative"
                  >
                    <img key={index} src={items.img} alt="" className="" />
                    <h1 className="text-red-700  font-bold text-[3.5vh]">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center px-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2">
                      <button className="capitalize text-white flex items-center justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id={sections[2].id} className=' section w-full mt-80 menu2 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain'>
            <h1 className=" img uppercase p-4 text-3xl font-semibold text-zinc-200 ">
              {sections[2].label}
            </h1>
            <div className="  pb-[8vh] w-full  grid grid-cols-3 mx-3  gap-4 snickers">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002324.jpg?ver=41.8",
                  h2: "Classic Chicken Roll & Pepsi Combo",
                  amt: "₹176.19",
                  p: "Our new Classic Chicken Roll served with Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002325.jpg?ver=41.8",
                  h2: "Double Chicken Roll & Pepsi Combo",
                  amt: "₹225.71",
                  p: "Our new Double Chicken Roll served with Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002070.jpg?ver=41.8",
                  h2: "Classic Chicken Roll Meal for 1",
                  amt: "₹339.05",
                  p: "Deal combo of 1 Classic Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=41.8",
                  h2: "Double Chicken Roll Meal for 1",
                  amt: "₹379.05",
                  p: "Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=41.8",
                  h2: "Classic Chicken Roll",
                  amt: "₹119.05",
                  p: "KFC's take on the street style roll with single chicken strip, onions & spicy sauces",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
                  h2: "Double Chicken Roll",
                  amt: "₹168.57",
                  p: "KFC's take on the street style roll with double chicken strips, onions & spicy sauces",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="img bg-zinc-200 menu3 shadow-xl  relative w-[18vw] h-[70vh] rounded-md text-black overflow-hidden p-4"
                  >
                    <img key={index} src={items.img} alt="" className="" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] px-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                ); 
              })}
            </div>
          </div>

          <div id={sections[3].id} className='section w-full  mt-20 menu2 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain'>
            <h1 className="uppercase p-4 text-3xl font-semibold text-zinc-200">
              {sections[3].label}
            </h1>
            <div className="pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4  ">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002166.jpg?ver=41.83",
                  h2: "Classic Biryani Combo",
                  amt: "₹176.19",
                  p: "Our new Classic Chicken Roll served with Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=41.83",
                  h2: "Smoky Grilled Biryani Combo",
                  amt: "₹225.71",
                  p: "Our new Double Chicken Roll served with Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002052.jpg?ver=41.83",
                  h2: "Popcorn Biryani Combo",
                  amt: "₹339.05",
                  p: "Deal combo of 1 Classic Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K626.jpg?ver=41.83",
                  h2: "Classic Chicken Biryani Bucket (Large)",
                  amt: "₹379.05",
                  p: "Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K627.jpg?ver=41.83",
                  h2: "Popcorn Chicken Biryani Bucket (Large)",
                  amt: "₹119.05",
                  p: "KFC's take on the street style roll with single chicken strip, onions & spicy sauces",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
                  h2: "Smoky Grilled Biryani Bucket (Large)",
                  amt: "₹168.57",
                  p: "KFC's take on the street style roll with double chicken strips, onions & spicy sauces",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K628.jpg?ver=41.83",
                  h2: "Classic Chicken Biryani Bucket",
                  amt: "₹479.05",
                  p: "Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K623.jpg?ver=41.83",
                  h2: "Popcorn Chicken Biryani Bucket",
                  amt: "₹548.57",
                  p: "Deal combo of 2 Double Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="img menu3 bg-zinc-200 shadow-xl relative text-black w-[18vw] h-[75vh] rounded-md overflow-hidden p-4"
                  >
                    <img key={index} src={items.img} alt="" className="" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center px-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id={sections[4].id} className='section w-full mt-20 menu2 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain'>
            <h1 className="uppercase p-4 text-3xl font-semibold text-zinc-200 ">
              {sections[4].label}
            </h1>
            <div className="value snickers pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4  ">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.85",
                  h2: "All Chicken Box",
                  amt: "₹176.19",
                  p: "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.85",
                  h2: "Zinger Tandoori Box",
                  amt: "₹225.71",
                  p: "A deal for Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001039.jpg?ver=41.85",
                  h2: "Popcorn Biryani Box",
                  amt: "₹339.05",
                  p: "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001004.jpg?ver=41.85",
                  h2: "Veg Zinger Box",
                  amt: "₹379.05",
                  p: "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001038.jpg?ver=41.85",
                  h2: "Veg Biryani Box",
                  amt: "₹119.05",
                  p: "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & 1 Pepsi 475ml",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="img menu3 bg-zinc-200 value-snickers text-black shadow-xl relative w-[18vw] h-[70vh] rounded-md overflow-hidden p-4"
                  >
                    <img key={index} src={items.img} alt="" className="" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center px-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black py-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="my-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id={sections[5].id} className='section bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain w-full mt-20 menu2'>
            <h1 className="uppercase p-4 text-3xl font-semibold text-zinc-200 ">
              {sections[5].label}
            </h1>
            <div className=" pb-[8vh] grid grid-cols-3 gap-3 mx-3 snickers menu4  ">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001022.jpg?ver=41.85",
                  h2: "Mixed Zinger Doubles",
                  amt: "₹339.05",
                  p: "2 delicious veg value burgers - at a deal price",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001027.jpg?ver=41.85",
                  h2: "Classic Zinger Burger",
                  amt: "₹379.05",
                  p: "Deal of 2 chicken value burgers, 2 Hot & Crispy, 2 dips (20gm each) & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000956.jpg?ver=41.85",
                  h2: "Buddy Meal",
                  amt: "₹119.05",
                  p: "Chicken zinger with a delicious tandoori sauce",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K439.jpg?ver=41.85",
                  h2: "Veg Zinger Burger",
                  amt: "₹168.57",
                  p: "Best-seller combo of classic chicken zinger & tandoori zinger",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000730.jpg?ver=41.85",
                  h2: "2 Veg Krispers Meal",
                  amt: "₹479.05",
                  p: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K146.jpg?ver=41.85",
                  h2: "Popcorn Chicken Biryani Bucket",
                  amt: "₹548.57",
                  p: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2 ",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="value-snickers relative text-black shadow-xl bg-zinc-200 menu3 w-[18vw] h-[70vh]  rounded-md overflow-hidden p-4 "
                  >
                    <img key={index} src={items.img} alt="" className="img" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] px-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id={sections[6].id} className='section w-full mt-20 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain menu2'>
            <h1 className="uppercase p-4 text-3xl font-semibold text-zinc-200 ">
              {sections[6].label}
            </h1>
            <div className=" box value snickers pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4 ">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=41.85",
                  h2: "Chicken & Krispers Combo",
                  amt: "₹176.19",
                  p: "Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=41.85",
                  h2: "Tandoori Zinger Burger",
                  amt: "₹225.71",
                  p: "2 delicious chicken value burgers - at a deal price",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000792.jpg?ver=41.85",
                  h2: "Mixed Zinger Doubles",
                  amt: "₹339.05",
                  p: "2 delicious veg value burgers - at a deal price",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K264.jpg?ver=41.85",
                  h2: "Classic Zinger Burger",
                  amt: "₹379.05",
                  p: "Deal of 2 chicken value burgers, 2 Hot & Crispy, 2 dips (20gm each) & 1 Pepsi 475ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002171.jpg?ver=41.85",
                  h2: "Buddy Meal",
                  amt: "₹119.05",
                  p: "Chicken zinger with a delicious tandoori sauce",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K008.jpg?ver=41.85",
                  h2: "Veg Zinger Burger",
                  amt: "₹168.57",
                  p: "Best-seller combo of classic chicken zinger & tandoori zinger",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=41.85",
                  h2: "2 Veg Krispers Meal",
                  amt: "₹479.05",
                  p: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K137.jpg?ver=41.85",
                  h2: "Popcorn Chicken Biryani Bucket",
                  amt: "₹548.57",
                  p: "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2 ",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="value-snickers bg-zinc-200 text-black shadow-xl menu3 w-[18vw] h-[70vh] rounded-md relative overflow-hidden p-4"
                  >
                    <img key={index} src={items.img} alt="" className="img" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh]">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] px-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id={sections[7].id} className=' section w-full mt-20 menu2 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png")]  bg-contain'>
            <h1 className="uppercase p-4 text-3xl font-semibold text-zinc-200">
              {sections[7].label}
            </h1>
            <div className="w-full grid grid-cols-3 mx-3 gap-4 pb-[8vh]  snickers">
              {[
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=41.85",
                  h2: "Pepsi 475ml PET",
                  amt: "₹176.19",
                  p: "Pepsi 475ml PETl",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K485.jpg?ver=41.85",
                  h2: "Pepsi Can 300 ml",
                  amt: "₹225.71",
                  p: "Pepsi Can 300 mle",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=41.85",
                  h2: "7UP Can 300 ml",
                  amt: "₹339.05",
                  p: "7UP Can 300 ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K486.jpg?ver=41.85",
                  h2: "Pepsi Black Can 300 ml",
                  amt: "₹379.05",
                  p: "Pepsi Black Can 300 ml",
                },
                {
                  img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=41.85",
                  h2: "Mirinda Can 300 ml",
                  amt: "₹119.05",
                  p: "Mirinda Can 300 ml",
                },
              ].map((items, index) => {
                return (
                  <div
                    key={index}
                    className="menu3 text-black shadow-xl w-[18vw] h-[60vh] bg-zinc-200  rounded-md relative p-4"
                  >
                    <img key={index} src={items.img} alt="" className="img" />
                    <h1 className="text-red-700 text-[3.5vh] font-bold">
                      {items.h2}
                    </h1>
                    <h2 className="font-semibold text-[2.5vh]">{items.amt}</h2>
                    <p className="text-[2.5vh] text-black">{items.p}</p>
                    <div className=" cart flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] px-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 ">
                      <button className="capitalize text-white flex items-center Lato justify-center Lato bg-black my-2">
                        <h5>add to cart</h5>
                      </button>
                      <img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        className="py-2"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Menu;
