import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
    return (
        <div className="min-w-[200px]">
            <form className="flex items-center overflow-hidden rounded-[92px] bg-grayTransparent px-4 py-2 w-full">
                <input
                    className="w-96 border-none bg-transparent text-sm leading-[22px] caret-accentColor outline-none"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search accounts and videos"
                />
                <span className="-mx-1 h-[28px] w-px bg-grayTransparent"></span>
                <button
                    className="-my-3 -mr-4 ml-0 cursor-pointer border-none bg-transparent py-4 pr-4 pl-3 outline-none hover:bg-neutral-700"
                    type="submit"
                >
                    <BsSearch size="20" color="rgba(255, 255, 255, 0.34)" />
                </button>
            </form>
        </div>
    );
};
