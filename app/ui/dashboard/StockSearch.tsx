"use client";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function StockSearch() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
  
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="w-11/12 m-auto my-4 flex gap-x-4">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => handleSearch(event.target.value)}
        className="px-2 py-2 rounded-lg w-full"
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button
        type="submit"
        className="text-cream py-2 px-8 bg-leaf rounded-lg hover:scale-105 duration-300"
      >
        Search
      </button>
    </form>
  );
}
