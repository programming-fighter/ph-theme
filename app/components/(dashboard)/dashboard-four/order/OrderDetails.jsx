import { PhoneIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import useTheme from "../../../../../hooks/useTheme";
import httpReq from "../../../../../services/http.service";
import { productImg, profileImg } from "../../../../../siteSettings/siteUrl";
import DataLoader from "../../../../components/Loader/DataLoader";
import { Taka } from "../../../../components/utils";
import GiveReview from "./Review";
import PaymentAgain from "../../components/PaymentAgain";
import OrderStatus from "../../components/OrderStatus";
import BookingInformation from "../../components/BookingInformation";

import { FaCopy } from "react-icons/fa";
import "../../dashboardSeven/OrderDetailsSeven.css";
// import Countdown from 'react-countdown';

const OrderDetails = () => {
  const [call, setCall] = useState(false);
  const [order, setOrder] = useState({});
  const [transaction, setTransaction] = useState({});
  // const [pay, setPay] = useState('show')
  const [orderItem, setOrderItem] = useState([]);
  const [productLink, setProductLink] = useState(null);
  const [booking, setBooking] = useState({});
  const [copied, setCopied] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { userData, design } = useTheme();
  const { order_id } = useParams();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const { order, orderitem, transaction, booking } = await httpReq.post(
        "getorder/details",
        { id: order_id }
      );
      setOrder(order);
      setOrderItem(orderitem);
      setTransaction(transaction);
      setBooking(booking);
      // setTransaction(transaction)
      setProductLink(orderitem[0]?.product_link);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [order_id, call]);

  // const order_create_time = new Date(order?.created_at).getTime()

  // // Renderer callback with condition
  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //     if (completed) {
  //         // Render a completed state
  //         setPay('hide')
  //         return
  //     } else {
  //         // Render a countdown
  //         return <span>{hours}:{minutes}:{seconds}</span>;
  //     }
  // };

  return (
    <div
      className={`py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ${
        design?.template_id === "34" ? "text-gray-300" : "text-gray-800"
      }`}
    >
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  ">
          Order #{order?.reference_no}
        </h1>
        <p className={`text-base font-medium leading-6 text-gray-600 `}>
          {new Date(order?.created_at).toLocaleString()}
        </p>
        {/* <p className={`text-base font-medium leading-6 text-gray-600 `}>{new Date(order?.updated_at).toLocaleString()}</p> */}
      </div>

      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div
            className={`flex flex-col justify-start items-start ${
              design?.template_id === "34" ? "bg-thirty-one" : "bg-gray-50"
            } px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full`}
          >
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 ">
              Customer’s Cart
            </p>
            {orderItem?.map((item) => (
              <SingleItem
                key={item.id}
                item={item}
                call={call}
                setCall={setCall}
                order={order}
                orderItem={orderItem}
                productLink={productLink}
                setCopied={setCopied}
                copied={copied}
              />
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div
              className={`flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full ${
                design?.template_id === "34" ? "bg-thirty-one" : "bg-gray-50"
              } space-y-6`}
            >
              <h3 className="text-xl font-semibold leading-5 ">Summary</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 ">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    <Taka tk={order?.subtotal} />
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 ">
                    Discount{" "}
                    {order?.coupon && (
                      <span className="bg-gray-200 p-1 rounded-md capitalize text-xs font-medium leading-3 ">
                        {order?.coupon}
                      </span>
                    )}
                  </p>
                  <p className="text-base leading-4 text-gray-600">
                    <Taka tk={order?.discount} />
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 ">Tax</p>
                  <p className="text-base leading-4 text-gray-600">
                    <Taka tk={order?.tax} />
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 ">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">
                    <Taka tk={order?.shipping} />
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 ">Paid Amount</p>
                  <p className="text-base leading-4 text-gray-600">
                    <Taka tk={order?.paid} />
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 ">Total</p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  <Taka tk={order?.due} />
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 ">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold ">
                                            DPD Delivery
                                            <br />
                                            <span className="font-normal">Delivery with 24 Hours</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 ">$8.00</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                            </div>
                        </div> */}
          </div>
        </div>
        <div
          className={`${
            design?.template_id === "34"
              ? "bg-slate-900 bg-opacity-30 text-white"
              : "bg-gray-50"
          } w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col`}
        >
          <h3 className="text-xl font-semibold leading-5 ">Customer</h3>
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                {!userData?.image ? (
                  <img
                    src="https://ebitans.com/Image/theme/default-user-image.png"
                    className="w-14 object-cover h-14"
                    alt="avatar"
                  />
                ) : (
                  <img
                    src={profileImg + userData?.image}
                    className="w-14 h-14"
                    alt="avatar"
                  />
                )}
                <div className=" flex justify-start items-start flex-col space-y-2">
                  {user?.details?.name ? (
                    <p className="text-base font-semibold leading-4 text-left ">
                      {user?.details?.name}
                    </p>
                  ) : (
                    <p className="text-base font-semibold leading-4 text-left  capitalize">
                      {userData?.name}
                    </p>
                  )}
                  <p className="text-sm leading-5 text-gray-600">
                    {userData?.address}
                  </p>
                </div>
              </div>

              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <PhoneIcon className="font-extralight" height={20} />

                <p className="lg:cursor-pointer text-sm leading-5 ">
                  {userData?.phone}
                </p>
              </div>

              {user?.details?.email ? (
                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="lg:cursor-pointer text-sm leading-5 ">
                    {user?.details?.email}
                  </p>
                </div>
              ) : null}
            </div>
            {!order?.status ? (
              <DataLoader />
            ) : (
              <div className="flex w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0  md:space-y-0 md:flex-row  items-center md:items-start ">
                  {order?.status === "Booked" ? (
                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-1 xl:mt-8">
                      <BookingInformation booking={booking} />
                    </div>
                  ) : (
                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-1 xl:mt-8">
                      <p className="text-base font-semibold leading-4 text-center md:text-left  pb-2">
                        Shipping Address
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600 capitalize">
                        <span className="font-semibold">Name: </span>
                        {order?.name}
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <span className="font-semibold">Phone: </span>
                        {order?.phone}
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <span className="font-semibold">Address: </span>
                        {order?.address}
                      </p>
                    </div>
                  )}
                </div>
                <PaymentAgain transaction={transaction} order={order} />
                <div>
                  {order?.status !== "Booked" && <OrderStatus order={order} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

const SingleItem = ({
  item,
  setCall,
  call,
  order,
  orderItem,
  productLink,
  copied,
  setCopied,
}) => {
  const [open, setOpen] = useState(false);
  const { store_id } = useTheme();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const { product } = await httpReq.post("product-details", {
        store_id,
        product_id: item?.product_id,
      });
      setProduct(product);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [store_id, item?.product_id]);
  // console.log(order, 'order');

  useEffect(() => {
    let copyText = document.querySelector(".copy-text");
    console.log(copyText);

    if (copyText !== null) {
      copyText.querySelector("button")?.addEventListener("click", function () {
        let input = copyText.querySelector("input.text");

        let value = input.value;

        let tempTextarea = document.createElement("textarea");
        tempTextarea.value = value;

        document.body.appendChild(tempTextarea);

        tempTextarea.select();

        document.execCommand("copy");

        document.body.removeChild(tempTextarea);

        copyText.classList.add("active");
        setTimeout(function () {
          copyText.classList.remove("active");
        }, 2500);
      });
    }
  }, [product]);
  return (
    <>
      {!product?.id ? (
        <DataLoader />
      ) : (
        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={productImg + product?.image[0]}
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src={productImg + product?.image[0]}
              alt="dress"
            />
          </div>
          <div className="border-b border-gray-200  flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl xl:text-2xl font-semibold leading-6  capitalize">
                <NavLink to={"/product/" + product?.id + "/" + product?.slug}>
                  {product?.name}
                </NavLink>
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                {item?.color ? (
                  <div className="flex gap-2 items-center">
                    <p className="text-sm leading-none text-gray-600">Color:</p>
                    <p
                      style={{ backgroundColor: item?.color }}
                      className="w-4 h-4 rounded-full ring-1 ring-offset-2 ring-gray-600"
                    ></p>
                  </div>
                ) : null}
                {item?.size ? (
                  <p className="text-sm leading-none ">
                    <span className="text-gray-600">Size: </span> {item?.size}
                  </p>
                ) : null}
                {item?.unit ? (
                  <p className="text-sm leading-none ">
                    <span className="text-gray-600">Unit: </span>
                    {item?.volume} {item?.unit}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col  space-x-8 items-end w-full">
              {/* <p className="text-base xl:text-lg leading-6">
                            $36.00 <span className="text-red-300 line-through"> $45.00</span>
                        </p> */}
              <p className="text-base xl:text-lg leading-6 ">
                QTY: {item?.quantity}
              </p>
              <p className="text-base xl:text-lg font-semibold leading-6 ">
                <Taka
                  tk={
                    (Number(item?.price) + Number(item?.additional_price)) *
                    item?.quantity
                  }
                />
              </p>
              {order?.status === "Delivered" && !item.review ? (
                <button
                  onClick={() => setOpen(true)}
                  className=" py-2 px-4 border border-transparent text-sm font-semibold tracking-widest rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  {"Give Review"}
                </button>
              ) : null}
              <GiveReview
                open={open}
                setOpen={setOpen}
                item={item}
                call={call}
                setCall={setCall}
              />
            </div>

            {(order?.status === "Payment Success" ||
              order?.status === "Delivered") &&
            orderItem[0]?.product_link ? (
              // <div className="w-full max-w-sm py-2">
              //   <div className="flex items-center">
              //     <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">
              //       URL
              //     </span>
              //     <div className="relative w-full">
              //       <input
              //         id="website-url"
              //         type="text"
              //         aria-describedby="helper-text-explanation"
              //         className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //         value={productLink}
              //         readonly
              //         disabled
              //       />
              //     </div>
              //     <CopyToClipboard
              //       text={productLink}
              //       onCopy={() => setCopied(true)}
              //     >
              //       <button
              //         data-tooltip-id="my-tooltip"
              //         data-tooltip-content={copied ? "Copied" : "Copy Url"}
              //         className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
              //         type="button"
              //       >
              //         <span id="default-icon">
              //           <svg
              //             className="w-4 h-4"
              //             aria-hidden="true"
              //             xmlns="http://www.w3.org/2000/svg"
              //             fill="currentColor"
              //             viewBox="0 0 18 20"
              //           >
              //             <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              //           </svg>
              //         </span>
              //         <span
              //           id="success-icon"
              //           className="hidden inline-flex items-center"
              //         >
              //           <svg
              //             className="w-4 h-4"
              //             aria-hidden="true"
              //             xmlns="http://www.w3.org/2000/svg"
              //             fill="none"
              //             viewBox="0 0 16 12"
              //           >
              //             <path
              //               stroke="currentColor"
              //               stroke-linecap="round"
              //               stroke-linejoin="round"
              //               stroke-width="2"
              //               d="M1 5.917 5.724 10.5 15 1.5"
              //             />
              //           </svg>
              //         </span>
              //       </button>
              //     </CopyToClipboard>
              //     <ReactTooltip id="my-tooltip" />
              //   </div>
              // </div>
              <div className="copy-text w-full">
                <input
                  type="text"
                  className="text"
                  value={productLink ? productLink : ""}
                  // readOnly
                  disabled
                />
                <button>
                  <FaCopy />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
