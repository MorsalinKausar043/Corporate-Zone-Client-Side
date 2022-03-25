import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import OrderFire from "./OrderFire";

const OrderHistory = () =>
{
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [confirm, setConfirm] = useState(false);
  const [payData, setPayData] = useState({});
  const [payInfo, setPayInfo] = useState({});
  const [amount, setAmount] = useState(0);
  const [offer, setOffer] = useState("");
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() =>
  {
    const query = new URLSearchParams(window.location.search);
    const session_id = query.get("session_id");
    if (session_id) {
      axios
        .get(
          `https://murmuring-spire-15534.herokuapp.com/order/success/${session_id}`
        )
        .then(function (response)
        {
          if (response) {
            setPayData(response.data);
            setConfirm(true);
          }
        })
        .catch(function (error)
        {
          console.log(error);
        });
    }
  }, []);

  useEffect(() =>
  {
    if (confirm) {
      let price = 0;
      let plan = "";
      if (payData.amount_total === 2900) {
        price = 29;
        plan = "BASIC PLAN";
      } else if (payData.amount_total === 5900) {
        price = 59;
        plan = "PREMIUM PLAN";
      } else {
        price = 99;
        plan = "PREMIUM PLAN";
      }
      setAmount(price);
      setOffer(plan);
      setReady(true);
    }
  }, [confirm, payData]);

  useEffect(() =>
  {
    if (ready) {
      axios
        .put(
          `https://murmuring-spire-15534.herokuapp.com/payment/${loggedInUser?.email}`,
          {
            email: loggedInUser?.email,
            plan: offer,
            price: amount,
            status: payData.payment_status,
            method: payData.payment_method_types,
            date: new Date().toDateString(),
          }
        )
        .then(function (response)
        {
          if (response) {
            Swal.fire(
              "Order placed!",
              "You will receive an email confirmation with payment receipt.",
              "success"
            );
            setModalOpen(true);
          }
          setReady(false);
        })
        .catch(function (error)
        {
          console.log(error);
        });
    }
  }, [ready]);

  useEffect(() =>
  {
    axios
      .get(
        `https://murmuring-spire-15534.herokuapp.com/payment/${loggedInUser?.email}`
      )
      .then(function (response)
      {
        if (response) {
          setPayInfo(response.data);
        }
      })
      .catch(function (error)
      {
        console.log(error);
      });
  }, [loggedInUser?.email]);

  return (
    <>
      {
        modalOpen && <OrderFire />
      }
      <h2 className="text-center p-1 text-lg bg-slate-500 rounded-2xl font-semibold text-white mb-5">
        Order History of{" "}
        <span className="bg-white text-slate-900 px-2 rounded-2xl">
          {loggedInUser?.email}
        </span>
      </h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      PLAN
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      PRICE
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      PAYMENT STATUS
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      PAYMENT METHOD
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      PAYMENT DATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!payInfo ? (
                    <p className="text-base uppercase p-2">
                      You haven't bought any plans yet...
                      <br />
                      go{" "}
                      <Link href="/">
                        <a className="bg-blue-700 rounded-2xl text-white px-2">
                          home page
                        </a>
                      </Link>{" "}
                      to buy our plan.
                    </p>
                  ) : (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {payInfo?.plan}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {payInfo?.price}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-2xl uppercase">
                          {payInfo?.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 uppercase">
                        {payInfo?.method}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {payInfo?.date}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
