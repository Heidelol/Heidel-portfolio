import React from "react";
import GithubApp from '../assets/gitapp.png'
import GifApp from '../assets/gifapp.png'
import CriptoCoin from '../assets/criptocoin.png'
import HouseMark from '../assets/housemark.png'
import Datafin from '../assets/datafin.png'
import BeastEats from '../assets/BestEats.png'


const Work = () => {
    return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Work
            </p>
            <p className='py-6'>// Check out some of my recent work</p>
          </div>
  
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
  
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${GithubApp})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Github Finder
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://github-app-finder.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/github-finder'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            <div
              style={{ backgroundImage: `url(${GifApp})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  GifApp
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://gif-app-exp.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/GifAppExp'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            <div
              style={{ backgroundImage: `url(${HouseMark})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  House Market
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://house-market-pink-one.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/HouseMarket'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>




            <div
              style={{ backgroundImage: `url(${CriptoCoin})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  CyptoCoin
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://cryptocoin-e255e.web.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/cryptobase'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>




            <div
              style={{ backgroundImage: `url(${Datafin})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Data Finance
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://data-finance-ten.vercel.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/DataFinance'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


            <div
            style={{ backgroundImage: `url(${BeastEats})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Best Eats
                </span>
                <div className='pt-8 text-center'>
                  <a target="_blank" href='https://euphonious-twilight-49c601.netlify.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a target="_blank" href='https://github.com/Heidelol/BestEatApp'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>


















          </div>
        </div>
      </div>
    );
  };
  
  export default Work;
