/* eslint-disable react/prop-types */
import Edit from '../../assets/icons/Edit.png';

export default function EditRowB({onClick}) {
    return (
        <button id="edit-row" className="btn bg-slate-600 border-none text-white md:text-base sm:btn-sm lg:btn-md w-1/2" onClick={onClick}>
            <img src={Edit} alt="Edit" className="w-6" />
        </button>
    );
}