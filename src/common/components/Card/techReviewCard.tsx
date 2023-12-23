import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";

const TechReviewCard = ({
  authorName,
  publishedAt,
  tagName,
  titre,
  imageUrl,
  id,
}: {
  authorName: string;
  publishedAt: string;
  tagName: string;
  titre: string;
  imageUrl: string;
  id: string;
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className="card card-overlay-bottom card-grid-sm card-bg-scale !w-[156px] !h-[167px] md:!w-[268px] md:!h-[268px]"
    >
      <Image
        alt=""
        width={600}
        height={400}
        src={imageUrl}
        className=" !w-[156px] !h-[167px] md:!w-[268px] md:!h-[268px]"
      />
      <div className="card-img-overlay d-flex align-items-center p-3">
        <div className="w-100 mt-[110px] md:mt-[200px]">
          {/* <a href="#" className="badge text-bg-success mb-2">{tagName}</a> */}
          <h4 className="text-white text-xs md:text-base">
            <Link
              href={`${generalRoutes.reviewList}/${id}/${titre?.split(" ").join("-")}`}
              className="btn-link stretched-link text-reset"
            >
              {isDesktop ? truncate(titre, 55) : truncate(titre, 30)}
            </Link>
          </h4>
          {/* <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li className="nav-item position-relative">
                            <div className="nav-link">با {authorName}
                            </div>
                        </li>
                        <li className="nav-item">{new Date(publishedAt).toLocaleDateString("fa-IR")}</li>
                    </ul> */}
        </div>
      </div>
    </div>
  );
};

export default TechReviewCard;
