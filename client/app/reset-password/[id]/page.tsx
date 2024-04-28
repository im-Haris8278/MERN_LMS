"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../../styles/style";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const schema = Yup.object().shape({
  confirmPassword: Yup.string()
    .required("Please Enter your Confirm Password!")
    .min(6),
  password: Yup.string().required("Please enter your new password!").min(6),
});

const Page = ({ params }: any) => {
  const { id } = params;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [resetPassword, { isSuccess, error }] = useResetPasswordMutation();
  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: schema,
    onSubmit: async ({ confirmPassword, password }) => {
      await resetPassword({ id, password, confPassword: confirmPassword });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Reset Password Successfully!");
      redirect("/profile");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className={`${styles.title}`}>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="password">
            Enter your New Password
          </label>
          <input
            type={!showPassword ? "password" : "text"}
            value={values.password}
            name="password"
            onChange={handleChange}
            placeholder="New password!@%"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!showPassword ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShowPassword(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5 relative mb-1">
          <label className={`${styles.label}`} htmlFor="confirmPassword">
            Confirm your new password
          </label>
          <input
            type={!showConfirmPassword ? "password" : "text"}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Confirm password!@%"
            className={`${
              errors.confirmPassword &&
              touched.confirmPassword &&
              "border-red-500"
            } ${styles.input}`}
          />
          {!showConfirmPassword ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setshowConfirmPassword(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setshowConfirmPassword(false)}
            />
          )}
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="text-red-500 pt-2 block">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="reset" className={`${styles.button}`} />
        </div>
      </form>
    </div>
  );
};

export default Page;
