import { useForm } from "react-hook-form";
import Loading from "./Loading";
import "./style/alien.css";
import { useEffect, useState } from "react";
import alien_1 from "../assets/images/space-invaders-1.svg";
import Legitimate from "./File_legitimate";
import Malicious from "./File_malicious";
const AddURL = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {}, [loading, show, result]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    send_url(data);
    reset();
  };

  async function send_url(data) {
    const myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Content-Type", "application/json");
    setLoading(true);
    await fetch("/api/url", {
      method: "POST",
      Accept: "*",
      headers: myHeaders,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setResult({ ...result, result: data.result });
      })
      .finally(() => {
        setShow(true);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="bg-[none]  warning_div_tag   w-[45%] flex mx-auto  p-4 mt-[50px]">
        <img
          src={alien_1}
          height="40px"
          width="40px"
          className="mr-0 ml-5"
          alt="space-invaders"
        />
        <p className="my-auto mx-2 ">
          Ensure URLs are in the format <b className="">google.com</b>
        </p>
      </div>
      <form
        className=" my-4 p-6 flex flex-col justify-center rounded-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            {...register("url", {
              required: true,
              pattern:
                /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i,
            })}
            className="w-[50%] mx-auto text-center px-3 py-2 mb-3 leading-tight text-[ivory] rounded bg-[transparent]  outline outline-1 outline-[ivory]  "
            placeholder="Enter the url"
          />
          {errors.url && (
            <p className="text-red-500">URL entered must be valid</p>
          )}
        </div>

        <button
          type="submit"
          className="w-[10rem] mx-auto px-4 py-2 mt-4 text-[ivory] bg-[#5d0e41] rounded hover:bg-[#4f3fff] transition-all focus:outline-none "
        >
          Submit
        </button>
      </form>
      {loading ? (
        <>
          <Loading />
        </>
      ) : show ? (
        <>
          {result.result === "good" ? (
            <>
              <Legitimate content="the website is good" />
            </>
          ) : result.result === "bad" ? (
            <>
              <Malicious content="the website is bad" />{" "}
            </>
          ) : result.result == " The website does not exist" ? (
            <>
              <Malicious content={result.result} />{" "}
            </>
          ) : (
            <>Enter a valid url</>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddURL;
