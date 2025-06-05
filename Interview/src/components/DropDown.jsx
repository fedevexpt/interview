function DropDown({ items, onSelect }) {
    return (
        <div className="relative inline-block text-left">
            <select
                className="border p-2"
                onChange={(e) => onSelect(e.target.value)}
            >
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;
