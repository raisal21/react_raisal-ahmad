/* eslint-disable react/prop-types */
import Add from '../../assets/icons/Add.svg';

export default function AddButton ({ onClick }) {

        const handleScrollToTop = () => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              };

    return (
        <button id="add-new" className="btn bg-green-500 border-none text-white md:text-base sm:btn-sm lg:btn-md"
        onClick={() => {
                handleScrollToTop(); // Scroll ke atas ketika tombol diklik
                if (onClick) {
                  onClick(); // Panggil fungsi onClick jika ada
                }
              }}>
            <img src={Add} alt="Add" className="w-6" />
            Add New
        </button>
    );
}