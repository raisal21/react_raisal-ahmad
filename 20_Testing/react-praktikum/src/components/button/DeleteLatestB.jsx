/* eslint-disable react/prop-types */
import Delete from '../../assets/icons/Delete.svg';

export default function DeleteButton ({ onClick })  {
    return (
        <button id="delete-latest" className="btn bg-red-500 border-none text-white md:text-base sm:btn-sm lg:btn-md" onClick={onClick}>
            <img src={Delete} alt="Delete" className="w-6" />
            Delete Latest
        </button>
    );
}

