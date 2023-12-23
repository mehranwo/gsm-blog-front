import Image from "next/image";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";

const SearchTechReviewCard = ({
  authorName,
  publishedAt,
  tagName,
  titre,
  imageUrl,
  id,
  type
}: {
  authorName: string;
  publishedAt: string;
  tagName: string;
  titre: string;
  imageUrl: string;
  id: string;
  type?: string
}) => {
  return (
    <div className="card card-overlay-bottom card-grid-sm card-bg-scale">
      <Image
        width={200}
        height={300}
        alt=""
        src={imageUrl}
        style={{ height: "274px", width: "274px" }}
      />
      <div className="card-img-overlay d-flex align-items-center p-3">
        <div className="w-100 mt-[230px]">
          {/* <a href="#" className="badge text-bg-success mb-2">{tagName}</a> */}
          <h4 className="text-white">
            <Link
              href={`${generalRoutes.reviewList}/${id}`}
              className="btn-link stretched-link text-reset"
            >
              {truncate(titre, 60)}
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

export default SearchTechReviewCard;
