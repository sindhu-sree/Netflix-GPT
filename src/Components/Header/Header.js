import React from "react";

const Header = () => {
  return (
    <div className='relative px-36 py-2 bg-gradient-to-b from-black flex justify-between' >
        <div>
            <img className="w-56" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
        <div>
            <select name="language" id="language" className="p-2 w-28 rounded-lg bg-black text-white border-gray-700 my-5" >
                <option value="english">English</option>
                <option value="hindi">हिन्दी</option>
            </select>
            <button className="text-white w-20 p-1 m-2 bg-red-600 rounded-lg" >Sign In</button>
        </div>
    </div>
  );
};

export default Header;
