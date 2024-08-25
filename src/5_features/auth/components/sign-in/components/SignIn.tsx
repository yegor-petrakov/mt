import React from "react";
import { useSignInMutation } from "../../../api/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../authSlice"; // Import setCredentials action
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [signIn] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const { data, error } = await signIn({
        email: "egor@gmail.com",
        password: "string",
      });

      // Check for error in the response
      if (error) {
        console.error("Sign-in failed:", error);
        return;
      }

      // Check if data is defined and has a token
      if (data && data.accessToken) {
        dispatch(setCredentials({ accessToken: data.accessToken })); // Use setCredentials to update the token
      } else {
        console.error("accessToken not found in the response");
      }

      navigate("/home");
    } catch (err) {
      console.error("An error occurred during sign-in:", err);
    }
  };

  return (
    <div>
      <button onClick={onSubmit}>Sign In</button>

      <div className="w-full flex flex-col items-center mt-20 p-16">
        <div className="flex flex-col w-full relative">
          <label
            className="text-sm font-medium text-gray-400 absolute left-4 top-2"
            htmlFor="amount"
          >
            Введите сумму
          </label>
          <input
            name="amount"
            type="text"
            placeholder=""
            className="border pb-3 pt-6 bg-gray-50 px-[15.5px] w-full rounded-xl focus:outline-none focus:shadow-sm"
          />
        </div>

        <div className="mt-20 w-full">
          <div>
            <input
              type="number"
              className="focus:outline-none text-3xl text-center p-4 border rounded-t-xl border-b-2 border-b-gray-400 w-full bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
