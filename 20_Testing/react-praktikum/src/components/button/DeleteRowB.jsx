/* eslint-disable react/prop-types */
import Delete from '../../assets/icons/Delete(2).svg';

export default function DeleteRow ({ onClick })  {
    return (
        <button id="delete-latest" className="btn bg-red-500 border-none text-white md:text-base sm:btn-sm lg:btn-md w-1/2" 
        onClick={onClick}>
            <img src={Delete} alt="Delete" className="w-6" />
        </button>
    );
}
