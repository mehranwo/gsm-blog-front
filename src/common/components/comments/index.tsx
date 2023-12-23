"use client";
import { Box, Button, Text, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconUser } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import generalConfig from "@/common/config/general";
import { getJWT, setRedirectURL } from "@/common/utils/handleLogin";
const Comments = ({ postId }: { data?: any; postId: string }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<any>([]);
  const router = useRouter();
  const pathName = usePathname();

  const getCommentsData = async () => {
    try {
      const response = await fetch(
        `${generalConfig.baseUrl}/api/comments/${postId}?sort[0]=createdAt:desc&filters[approvalStatus][$eq]=APPROVED&filters[author_id][$ne]=guest`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  const form = useForm({
    initialValues: {
      text: "",
    },

    validate: {
      text: (value) =>
        value.length > 4 ? null : "متن وارد شده باید بیشتر از ۴ کاراکتر باشد",
    },
  });

  type FromType = typeof form.values;

  const handleSubmitForm = async (values: FromType) => {
    try {
      setLoading(true);
      const token = getJWT();
      const response = await fetch(
        `${generalConfig.baseUrl}/api/comments/${postId}`,
        {
          method: "POST",
          body: JSON.stringify({
            content: values.text,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-cache",
        }
      );

      const data = await response.json();

      setLoading(false);

      if (data?.error?.status === 401) {
        setRedirectURL(pathName);
        return router.push(`${generalConfig.baseUrl}/api/connect/google`);
      }

      if (data?.error?.status > 200) {
        return toast(
          "در ارسال کامنت مشکلی به وجود امده است لطفا مجددا تلاش بفرمایید"
        );
      }

      return toast("دیدگاه شما ثبت شد و  پس از بررسی نمایش داده می‌شود", {
        type: "success",
      });
    } catch (error) {
      setLoading(false);
      toast("در ارسال کامنت مشکلی به وجود امده است لطفا مجددا تلاش بفرمایید");
    }
  };

  const token = getJWT();
  return (
    <>
      {token?.length !== 0 ? (
        <div>
          <h3>ثبت دیدگاه</h3>
          <form
            className="row g-3 mt-2"
            onSubmit={form.onSubmit(handleSubmitForm)}
          >
            <div className="col-12">
              <label className="form-label">متن دیدگاه</label>
              <Textarea
                classNames={{
                  input: "!text-base",
                }}
                className=""
                rows={3}
                {...form.getInputProps("text")}
              />
            </div>
            <div className="col-12">
              <Button
                loading={loading}
                type="submit"
                style={{
                  border: "1px solid #197bff",
                  color: "#197bff",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: "transparent",
                }}
              >
                ثبت نظر
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div className="mt-5">
        <div
          className={`w-full flex ${token?.length === 0 && comments?.length === 0
            ? "flex-col items-start justify-between"
            : "flex-row items-center justify-between"
            } `}
        >
          {<h3> {`دیدگاه  (${comments?.length} نظر)`} </h3>}
          {token?.length === 0 && comments?.length === 0 ? (
            <div className="w-full h-[200px] flex flex-col items-center justify-end mb-2">
              <p>
                برای این مقاله نظری ثبت نگردیده است. برای ثبت نظر خود وارد حساب
                کاربری شوید.
              </p>
              <button
                onClick={() => {
                  setRedirectURL(pathName);
                  return router.push(
                    `${generalConfig.baseUrl}/api/connect/google`
                  );
                }}
                className="bg-[#197bff] text-white px-4 py-2 rounded border-[#197bff]"
              >
                ورود و ثبت نظر
              </button>
            </div>
          ) : <></>
          }

          {
            token?.length === 0 && comments?.length !== 0 ?
              (
                <button
                  className="border-[1px] text-[#197bff] px-3 py-2 rounded border-[#197bff] "
                  onClick={() => {
                    setRedirectURL(pathName);
                    return router.push(
                      `${generalConfig.baseUrl}/api/connect/google`
                    );
                  }}
                >
                  ورود و ثبت نظر
                </button>
              )
              : <></>
          }
        </div>
        {comments?.map((comment: any, index: any) => (
          <div key={index} className="my-4 flex">
            <div className="w-full">
              <div className="mb-2 flex justify-between items-center">
                <Box className="flex items-center gap-2">
                  <IconUser
                    size={50}
                    className="bg-gray-200 p-2 rounded-full"
                  />
                  <h5 className="m-0">
                    {comment?.author?.name ?? (
                      <Text className="!text-lg !font-bold">کاربر جی اس ام</Text>
                    )}
                  </h5>
                </Box>
                <span className="me-3 small">
                  {new Date(comment?.createdAt ?? "").toLocaleDateString(
                    "fa-IR"
                  )}
                </span>
              </div>
              <div
                className="mt-4 container"
                style={{
                  fontFamily: "IRANSans",
                }}
                dangerouslySetInnerHTML={{
                  __html: comment?.content ?? "",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
