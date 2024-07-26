"use client";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useTheme from "@/hooks/use-theme";
import Link from "next/link";
import FilterByColor from "@/components/filter-by-color";
import FilterByPrice from "@/components/filter-by-price";
import { HiOutlineAdjustments } from "react-icons/hi";
import Pagination from "@/components/_category-page/category/pagination";
import {
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import httpReq from "@/utils/http/axios/http.service";
import Skeleton from "react-loading-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import Card12 from "@/components/card/card12";
import FilterByPriceNew from "@/components/_category-page/category/filter-by-price-new";
import PaginationComponent from "@/components/_category-page/category/pagination-new";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import FilterByColorNew from "@/components/_category-page/category/filter-by-color-new";




const fetchData = async (page: any, activeColor: any, priceValue: any, sort: any) => {


  const encodedColor = encodeURIComponent(activeColor);
 
  const { colors, data, error } = await httpReq.get(
    `/shoppage/products?name=${window.location.host}&page=${page}&colorFilter=${encodedColor}&priceFilter=${priceValue}&filter=${sort}`
  );
return{ data, colors}

};


const Seven = ({ data }: any) => {
  const { module, category } = useTheme();
  const paginateModule = module?.find((item: any) => item?.modulus_id === 105);
  const [open, setOpen] = useState(false);
  const [paginate, setPaginate] = useState({});

  const [sort, setSort] = useState("za");
  const [val, setVal] = useState(0);
  const [colors, setColors] = useState(null);
  const [activeColor, setActiveColor] = useState("");

  const [hasMore, setHasMore] = useState(true);
  const shop_load = parseInt(paginateModule?.status);

  const [priceValue, setPriceValue] = useState('')
  const [lastPage, setLastPage] = useState('')
  const [dataId, setDataId] = useState(null)

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any>([]);

  const pageShop = shop_load === 1 ? data?.page : page;

  



  console.log(products, 'products')



  const { data: productsData, status } = useQuery({
    queryKey: ["shop-products", page, activeColor, priceValue, sort],
    queryFn: () => fetchData(page, activeColor, priceValue, sort),
placeholderData:keepPreviousData
  });

  console.log(status, "from shop")




  return (
    <div className="grid grid-cols-5 lg:gap-8 sm:container px-5 bg-white">
      <div className="lg:col-span-1 lg:block hidden">
        <div className="flex gap-3 py-10">
          <Link href="/">
            <span className="text-base text-gray-500">Home</span>
          </Link>
          <span className="text-base font-medium text-gray-500">/</span>
          <span className="text-base text-gray-600 font-bold">Shop</span>
        </div>

        <div className="mt-10 ">
          <h1 className="mb-10 text-2xl text-gray-700 font-medium">Category </h1>

          {category.map((item: any) => (
            <div key={item.id} className="">
              <SingleCat item={item} />
            </div>
          ))}
        </div>
        {/* Filter By Color New */}
        <div className="bg-gray-100 border-2 border-gray-200 my-6 p-4">
             <FilterByColorNew
              colors={productsData?.colors}
              setActiveColor={setActiveColor}
              activeColor={activeColor}
            />
            
        </div>

        {/* Filter By Price New */}
        <div className="bg-gray-100 border-2 border-gray-200 p-4">
          <FilterByPriceNew
            priceValue={priceValue}
            setPriceValue={setPriceValue}
          />
        </div>
      </div>

      <div className="col-span-5 lg:col-span-4 w-full">
        <div className="flex justify-between py-10">
          <div>
            <h1 className="text-3xl lg:block hidden font-semibold">Shop</h1>
            <div
              onClick={() => setOpen(!open)}
              className="lg:cursor-pointer border-2 border-gray-100 rounded-lg justify-between px-3 w-32 py-2 lg:hidden items-center flex gap-3"
            >
              <HiOutlineAdjustments className="rotate-90 text-xl" />
              <button className="text-xl">Filter</button>
            </div>
          </div>
          {/* Filter By Price and name */}
          <div>
            <Filter
              onChange={(e: any) => {
                setSort(e.target.value);
                setPage(1);
                setHasMore(true);
              }}
              paginate={paginate}
              setOpen={setOpen}
              open={open}
            />
          </div>
        </div>
        <div>
          <Product
            page={pageShop}
            sort={sort}
            status={status}
            open={open}
            dataId={dataId}
            products={productsData?.data?.data}
            setProducts={setProducts}
            setPaginate={setPaginate}
            setColors={setColors}
            activeColor={activeColor}
            val={val}
            setPage={setPage}
            shop_load={shop_load}
            setHasMore={setHasMore}
            hasMore={hasMore}
            data={data}
            setLastPage={setLastPage}
          />

        </div>

        <div className="md:mt-12 flex justify-center">
          <PaginationComponent
            lastPage={productsData?.data.last_page}
            setPage={setPage}
            currentPage={productsData?.data.current_page}
            initialPage={page}
          />
        </div>

      </div>

      {/* tablet and mobile view  */}

      <div className="block py-6 lg:hidden">
        <ul
          className={`lg:hidden bg-white fixed md:w-128 w-96 top-0  overflow-y-auto bottom-0 -ml-32 pb-5 duration-1000 z-10 lg:cursor-pointer ${open ? "left-0" : "left-[-120%]"
            }`}
        >
          <div className="flex py-4  items-center lg:hidden px-10 border-b-2 border-gray-100 pb-8 ml-20">
            <ArrowLeftIcon
              onClick={() => setOpen(!open)}
              className="h-5 basis-2/4"
            />
            <h3 className=" basis-2/4 text-2xl font-medium text-gray-700">
              Filters
            </h3>
          </div>
          <hr className="mr-10 ml-44" />
          <div className="mt-10 ml-36">
            <h1 className="mb-10 text-2xl text-gray-700 font-medium">
              Category
            </h1>
            {category.map((item: any) => (
              <div key={item.id} className="">
                <SingleCat item={item} />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Seven;

const Product = ({
  products,
  status,
  sort,
  open,
  page,
  setProducts,
  setPaginate,
  setShops,
  setColors,
  activeColor,
  val,
  setPage,
  shop_load,
  setHasMore,
  hasMore,
  paginate,
  setLastPage,
  data,
  dataId
}: any) => {
  
  const [error, setError] = useState(null);
  console.log(products, "from home")
 
  return (

   <div className="grid lg:grid-cols-3 lg:gap-5 md:grid-cols-3 md:gap-3 xl:grid-cols-4 grid-cols-2 gap-2">
      {status === "pending" ? (
        Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} height={"200px"} />
        ))
      ) : products.length <= 0 ? (
        <p>No Products Found</p>
      ) : (
        products?.map((product: any) => (
          <Card12 key={product.id} item={product} />
        ))
      )}
    </div>
  );
};

const Filter = ({ onChange }: any) => {
  return (
    <div>
      <div className="md:flex md:flex-row border border-gray-400  py-0 px-0 rounded-xl lg:px-3 justify-between items-center gap-1">
        <div className="md:block hidden">
          <p>Sort By:</p>
        </div>
        <div className="flex items-center gap-3 lg:-ml-28 xl:-ml-0 md:-ml-0 ml-2 justify-center">
          {/* Short by  */}
          <div className="">
            <select
             onChange={onChange}
              className="w-48 font-medium lg:cursor-pointer h-12 px-2 p-0 text-md border-gray-200 rounded-md  focus:border-gray-200 focus:ring-transparent outline-none focus:outline-none"
              id="category"
              name="category"
            >
              <option className="lg:cursor-pointer">Sorting Options</option>
              <option className="lg:cursor-pointer" value="az">
                Name, A to Z
              </option>
              <option className="lg:cursor-pointer" value="za">
                Name, Z to A
              </option>
              <option className="lg:cursor-pointer" value="lh">
                Price, Low to High
              </option>
              <option className="lg:cursor-pointer" value="hl">
                Price, High to Low
              </option>
            </select>
          </div>

          {/* <p onClick={() => setOpen(!open)} className={`px-10 py-1 md:hidden flex  text-sm font-semibold bg-black text-white ${open === true ? "filter border-transparent " : "bg-black border-black"} lg:cursor-pointer`}>FILTER</p> */}
        </div>
      </div>
    </div>
  );
};

const SingleCat = ({ item }: any) => {
  
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full flex py-3 lg:cursor-pointer">
        <Link
          onClick={() => setShow(!show)}
          href={"/category/" + item.id}
          className="flex-1 text-sm text-gray-900 font-medium"
        >
          {" "}
          <p>{item.name}</p>
        </Link>
        {item?.cat ? (
          <div onClick={() => setShow(!show)} className="px-4 h-full">
            {show ? (
              <MinusIcon className="h-4 w-4 text-gray-800" />
            ) : (
              <PlusIcon className="h-4 w-4 text-gray-800" />
            )}
          </div>
        ) : null}
      </div>
  
      {show && (
        <>
          <div className="ml-8">

            {item?.cat?.map((sub: any) => (
              <div className="py-2" key={sub.id}>
                <Link href={"/category/" + sub?.id}>
                  <p className="pb-2 text-sm text-gray-500">{sub?.name}</p>
                </Link>
                <div className="pr-4">
                  <div className="h-[1px] bg-gray-200 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
