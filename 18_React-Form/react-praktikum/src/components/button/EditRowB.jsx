import Edit from '../../assets/icons/Edit.png';

export default function EditRowB() {
    return (
        <button id="edit-row" className="btn bg-green-500 border-none text-white md:text-base sm:btn-sm lg:btn-md w-1/2">
            <img src={Edit} alt="Edit" className="w-6" />
        </button>
    );
}