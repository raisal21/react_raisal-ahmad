/* eslint-disable react/prop-types */
import { useState } from 'react';
import ID from '../../assets/icons/ID.png';
import EN from '../../assets/icons/US.png';  

export default function LanguageT({ onChange }) {

    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange(newState ? 'en' : 'id'); 
    };
    
    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                className="border-none text-white shadow-none ml-3 mt-3"
                checked={isChecked}
                onChange={handleToggle}
            />

            {/* English icon */}
            <img src={EN} alt="English" className={`w-10 h-10 ${isChecked ? 'swap-on' : 'swap-on'}`} />

            {/* Indonesia icon */}
            <img src={ID} alt="English" className={`w-10 h-10 ${isChecked ? 'swap-off' : 'swap-off'}`} />

        </label>
  );
}