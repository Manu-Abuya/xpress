import React from "react";
// import Banner from "../images/banner.jpg";
import Logo from "../images/britam-logo-no-bg.png"

const InterestForm = () => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form Submitted Successfully')
  // };

  return (
      <article className="h-screen relative container overflow-hidden bg-cover bg-no-repeat m-auto bg-gradient-to-r from-cyan-500 to-blue-700 flex items-center">
      {/* <img src={Banner} alt="banner-poster" style={{width: '100%', height: '25%'}}/>  */}
        <form className="m-auto bg-white/90 p-5">
          <img src={Logo} alt="banner-poster" style={{width: '10rem', height: '3rem', margin: 'auto'}}/> 
          
            <h2 className="text-sky-600 text-xl font-bold text-center mb-2">BRITAM MOTOR INSURANCE</h2>
            <hr className="border-sky-500"/>
            {/* <div class="relative z-0 w-full mb-6 group">
                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div> */}
            <div className="flex flex-wrap -mx-3 my-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-name">
                  Name <span className="text-red-600">*</span>
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-name" type="text" placeholder="Enter your full name" required/>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-phone-number">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-phone-number" type="number" placeholder="07XX XXX XXX" required/>
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-email" type="email" placeholder="johndoe@gmail.com" required/>
              </div>
            </div>    

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-model">
                  Vehicle Model <span className="text-red-600">*</span>
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-model" type="text" placeholder="Enter model eg. Toyota" required/>
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-valuation">
                  Current Valuation <span className="text-red-600">*</span>
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-sky-700 border-0 border-b-2 border-sky-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-valuation" type="number" placeholder="Enter current value in KES" required/>
              </div>
            </div>     

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-year">
                  Year of Manufacture <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border-0 border-b-2 border-sky-300 text-sky-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-year" required>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sky-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-sky-500 text-xs font-bold mb-2" htmlFor="grid-state">
                  Type of Cover <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border-0 border-b-2 border-sky-300 text-sky-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
                    <option>Comprehensive</option>
                    <option>Third Party</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sky-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>          
              </div>
            </div>  
            <footer className="grid justify-center">
              <button className="rounded-lg bg-gradient-to-r from-sky-700 to-red-500 p-2 text-white text-lg hover:text-xl text-bold w-52 hover:opacity-80">Submit</button>               
            </footer> 
          </form>
        </article>
  );
}

export default InterestForm;