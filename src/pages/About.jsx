import React, { useState } from 'react'
import logo from "../assets/logo.png";
import hero from "../assets/heroimg.jpg";
import sidebarimg from "../assets/sidebarimg.jpg";
import { Link } from 'react-router-dom';

const About = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[url('./assets/backgroundimg.jpg')] bg-cover bg-center font-sans text-sm min-h-screen">
        <div className=" max-w-[1100px] mx-auto p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <img
                src={logo}
                alt="Aalochana Logo"
                className="w-[300px] h-auto"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white bg-[#ef5727] px-3 py-1 rounded"
              >
                ☰
              </button>
            </div>

            {/* Nav Links */}
            <nav className="bg-[#ef5727] rounded-sm mt-2 cursor-pointer">
              <ul
                className={`${
                  isOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row font-bold text-sm gap-4 py-2 px-4 text-black`}
              >
                <Link to="/">
                  <li className="md:border-r md:pr-4 hover:text-white  px-2 ">
                    HOME
                  </li>
                </Link>
                <Link to="/about">
                  <li className="md:border-r md:pr-4 hover:text-white px-2">
                    ABOUT
                  </li>
                </Link>
                <li className="md:border-r md:pr-4 hover:text-white px-2">
                  PROGRAMS
                </li>
                <li className="md:border-r md:pr-4 hover:text-white px-2">
                  PUBLICATIONS
                </li>
                <li className="md:border-r md:pr-4 hover:text-white  px-2">
                  RESEARCH
                </li>
                <li className="md:border-r md:pr-4 hover:text-white px-2">
                  ACTIVITIES
                </li>
                <li className="md:border-r md:pr-4 hover:text-white  px-2">
                  SUPPORTERS
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4  mt-4">
            {/* Left Sidebar */}
            <div className="space-y-4 md:col-span-1 bg-[#cccc99] p-2 rounded-sm">
              <h2 className="bg-white text-black text-center font-bold p-1 text-sm rounded">
                CURRENT PROGRAMS
              </h2>
              {[
                {
                  title: "Resource Center",
                  desc: `Aalochana's bilingual resource centre makes available a variety of local, national, and international resources on women.`,
                },
                {
                  title: "Samvadini",
                  desc: `Samvadini is Aalochana's mobile resource centre that works with NGOs and CBOs in Pune district to create awareness about women’s rights.`,
                },
                {
                  title: "Muskaan",
                  desc: `Muskaan, an Aalochana initiative against child sexual abuse, has been working since 2000 to create awareness, and provide counseling and support to children and their families.`,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#dfe5c5] rounded-lg p-2 border-[8px] border-white"
                >
                  <h3 className="font-semibold text-[20px]">{item.title}</h3>
                  <p className="text-xs mt-2 font-bold">{item.desc}</p>
                  <p className="text-sm text-red-800 font-bold mt-1">
                    Read More
                  </p>
                </div>
              ))}
            </div>

            {/* Center */}
            <div className="md:col-span-2 bg-white p-3">
                <h2 className='text-lg text-black font-bold'>About Aalochana</h2>
                <div className="border border-black border-dotted my-3"></div>
              <p className="text-base">
                Aalochana is a woman’s resource, documentation, and research
                centre. Over the years, Aalochana’s scope of work has increased
                to include training, capacity building, and child rights. Five
                feminists from Maharashtra established Aalochana in 1989. Though
                Pune had several research institutions, none of them devoted
                themselves exclusively to women. The initial impulse in setting
                up Aalochana was to research and document, from a feminist lens,
                all aspects of women’s lives with a special emphasis on
                Maharashtra and to make resources available in English and
                Marathi.
              </p>
              <div className="border border-black border-dotted my-3"></div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4 md:col-span-1 bg-[#cccc99] p-2">
              <div className="bg-[#dfe5c5] rounded p-2 border-[8px] border-white">
                <h3 className="text-[18px] font-bold text-[#7d0000] bg-[#cccc99] px-2 py-1 rounded">
                  PHOTO GALLERY
                </h3>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  {[...Array(9)].map((_, i) => (
                    <img
                      key={i}
                      src={sidebarimg}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-auto border border-gray-300"
                    />
                  ))}
                </div>
              </div>

              <div className="bg-[#dfe5c5] rounded p-2 border-[8px] border-white">
                <h3 className="text-[18px] font-bold text-[#7d0000] bg-[#cccc99] px-2 py-1 rounded">
                  BLOG
                </h3>
                <p className="text-xs font-semibold mt-2">
                  Visit Aalochana's blog regularly for the latest news, views,
                  and activity updates.
                </p>
              </div>

              <div className="bg-[#dfe5c5] rounded p-2 border-[8px] border-white">
                <h3 className="text-[18px] font-bold text-[#7d0000] bg-[#cccc99] px-2 py-1 rounded">
                  CONTACT US
                </h3>
                <p className="text-xs font-bold mt-2">PHONE</p>
                <p className="text-xs">+91-20-25678133</p>
                <p className="text-xs font-bold mt-2">EMAIL</p>
                <a
                  href="mailto:aalochanapune@gmail.com"
                  className="text-sm text-blue-700 break-all"
                >
                  aalochanapune@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About