import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () =>{

    const [search, setSearch] = useState("");
return (
    <form className='flex items-center gap-2 w-full'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full w-3/4'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<BsSearch className='w-6 h-6 outline-none' />
			</button>
		</form>
)
}

export default SearchInput;