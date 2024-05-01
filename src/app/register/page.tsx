"use client";
import NHForm from "@/components/Form/NHForm";
import NHInput from "@/components/Form/NHInput";
import { userRegister } from "@/utils/actions/userRegister";
import { Button, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await userRegister(data);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
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
          <h1 className="text-xl font-semibold">Welcome, Please Sign Up!</h1>
          <p className="text-md font-regular text-gray-500">
            Create your account
          </p>
        </div>
        <NHForm onSubmit={onSubmit}>
          <NHInput type="text" name="name" label="Name" />
          <NHInput type="email" name="email" label="Email" />
          <NHInput type="text" name="password" label="Password" />
          <Button size="large" htmlType="submit">
            Sign Up
          </Button>
        </NHForm>
        <div className="text-center mt-3">
          <p>
            {" "}
            Already have an account? <Link href="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </Row>
  );
};

export default RegisterPage;
