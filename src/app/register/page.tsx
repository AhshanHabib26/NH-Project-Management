"use client";
import NHForm from "@/components/form/NHForm";
import NHInput from "@/components/form/NHInput";
import { Button, Row } from "antd";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
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
