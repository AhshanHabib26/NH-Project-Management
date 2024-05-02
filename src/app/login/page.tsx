"use client";

import NHForm from "@/components/Form/NHForm";
import NHInput from "@/components/Form/NHInput";
import { userLogin } from "@/utils/actions/userLogin";
import { Button, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    if (!data.email && !data.password) {
      return toast.error("Email and Password field are empty!");
    }

    try {
      const res = await userLogin(data);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/dashboard/all-project");
      } else if (!res?.success) {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className=" border border-gray-100 rounded-lg p-5 shadow-lg">
        <div className="mb-5">
          <h1 className="text-xl font-semibold">Welcome back!</h1>
          <p className="text-md font-regular text-gray-500">
            Enter Your Credential to Login
          </p>
        </div>
        <NHForm onSubmit={onSubmit}>
          <NHInput type="email" name="email" label="Email" />
          <NHInput type="text" name="password" label="Password" />
          <Button size="large" htmlType="submit">
            Login
          </Button>
        </NHForm>
        <div className="text-center mt-3">
          <p>
            {" "}
            Don&apos;t have an account? <Link href="/register">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </Row>
  );
};

export default LoginPage;
