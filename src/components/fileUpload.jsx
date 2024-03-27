import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import File_not_supp from "./File_not_supp";
import Loading from "./Loading";
import alien_1 from "../assets/images/space-invaders-1.svg";
import Legitimate from "./File_legitimate";
import Malicious from "./File_malicious";
const FileUpload = () => {
  const [error, setError] = useState(" ");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {}, [error, result, loading, show]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.executable[0]);
    let send_data = data.executable[0];
    send_file(send_data);
    reset();
  };
  function send_file(data) {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("fileName", data.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setLoading(true);
    axios
      .post("/api/pe", formData, config)
      .then((response) => {
        console.log(response.data.result);
        setResult({ ...result, result: response.data.result });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
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
        <p className="my-auto mx-2 ">Only .exe files are supported</p>
      </div>
      <form
        className="my-4 p-6 flex flex-col justify-center rounded-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center  w-[45%] mx-auto justify-between border border-gray-300 rounded-md p-1">
          <input
            {...register("executable")}
            type="file"
            name="executable"
            id="upload_input"
            className="mx-auto inline-block p-4 w-[15rem]"
          />
          {errors.executable && (
            <p className="text-red-500">File entered must be valid</p>
          )}
        </div>

        <button
          type="submit"
          className="w-[10rem]  mx-auto px-4 py-2 mt-4 text-[ivory] bg-[#5d0e41] rounded hover:bg-[#4f3fff] transition-all focus:outline-none "
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
          {result.result === "legitimate" ? (
            <>{<Legitimate content="The file is legitimate" />}</>
          ) : result.result === "malicious" ? (
            <>
              <Malicious content="The file is malicious" />
            </>
          ) : (
            <>
              <File_not_supp />{" "}
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FileUpload;
