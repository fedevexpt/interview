import { useState } from "react";
function DropDown({ items }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                className="px-4 py-2 my-2 bg-white border rounded shadow "
                onClick={() => setOpen(!open)}
            >
                카테고리 선택
            </button>
            {open && (
                <ul className="absolute z-10 mt-2 w-40 bg-white border rounded shadow">
                    {items.map((item) => (
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown;
