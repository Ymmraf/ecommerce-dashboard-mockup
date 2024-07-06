import { fetchUsers } from "@/app/lib/users";
import StockSkeleton from "@/app/ui/dashboard/StockLoading";
import { Suspense } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import UserSearch from "@/app/ui/dashboard/UserSearch";
import SearchSkeleton from "@/app/ui/dashboard/SearchSkeleton";

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'
export default async function Member({searchParams} : {searchParams? : { query? : string }}) {
  const query = searchParams?.query || ''
  const users = (await fetchUsers.all(query)).rows;

  return (
    <>
      <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">Members</h1>
      <Suspense fallback={<SearchSkeleton/>}>
        <div>
          <UserSearch />
        </div>
      </Suspense>
      <div className="w-11/12 m-auto space-y-2 lg:mt-4">
        <div className="h-12 p-2 px-8 bg-leaf rounded-lg grid grid-cols-4 text-cream font-bold text-lg mb-2">
          <p>Id</p>
          <p>Username</p>
          <p>Total spent</p>
        </div>
      </div>
      <div>
        <Suspense fallback={<StockSkeleton />}>
          <div className="w-11/12 m-auto space-y-2 pb-4">
            {users.map((user, index) => (
              <div key={index} className="h-18 p-2 bg-white rounded-lg text-coal" >
                <div className="grid grid-cols-4 px-8">
                  <p className="relative top-4">{user.id}</p>
                  <p className="relative top-4">{user.username}</p>
                  <p className="relative top-4">${user.total_spent ? user.total_spent : 0}</p>
                  <div className="flex items-center justify-end">
                    <Link
                      href={`/dashboard/user/${user.id}`}
                      className="text-white bg-leaf text-lg p-3 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
}
