import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full items-center flex gap-20"
    >
      {/* 1st half */}
      <div className=" w-full px-20 ">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px] uppercase">
            FEATURES
          </p>
          <h2 className=" text-4xl font-bold">Technology Skill</h2>
        </div>
        <div>
          <div className="mt-14 w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className=" text-sm uppercase font-medium">C++</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative"
                >
                  <span className=" absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className=" text-sm uppercase font-medium">DSA</p>
              <span className="w-[85%] h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative"
                >
                  <span className=" absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className=" text-sm uppercase font-medium">Machine Learning</p>
              <span className="w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative"
                >
                  <span className=" absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className=" text-sm uppercase font-medium">MERN Stack</p>
              <span className="w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative"
                >
                  <span className=" absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>

            {/* <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>DESIGN</p>
              <span className='w-[95%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* 2nd half */}
      {/* <div className='w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className=' text-sm text-designColor tracking-[4px] uppercase'>FEATURES</p>          
          <h2 className=' text-4xl font-bold'>Development Skill</h2>
        </div>
        <div>
          <div  className='mt-14 w-full flex flex-col gap-6'>
            <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>REACT</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div>

            <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>HTML 5</p>
              <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div>

            <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>CSS3</p>
              <span className='w-[60%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div>

            <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>JAVASCRIPT</p>
              <span className='w-[70%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div>

            <div className='overflow-x-hidden'>
              <p className=' text-sm uppercase font-medium'>SOFTWARE</p>
              <span className='w-[95%] h-2 bgOpacity inline-flex rounded-md mt-2'>
                <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 00 to-red-500 rounded-md relative'>
                    <span className=' absolute -top-7 right-0'>
                      100%
                    </span>
                </motion.span>
              </span>
            </div>

          </div>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Skills;
