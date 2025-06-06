import toast from "react-hot-toast";

const AxiosToastError = (error) => {
  const message = error?.response?.data?.message;

  if (message === "Provide token") {
    toast.error("Please login/sign up to add items to cart");
  } else {
    toast.error(message || "Something went wrong");
  }

  console.error("Axios Error:", error);
};

export default AxiosToastError;
