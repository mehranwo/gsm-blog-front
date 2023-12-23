import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";
import { Enum_Post_Type } from "@/services/Graphql/types.generated";

import { setHrefByType } from "./utils";

const TrendCard = ({
  authorName,
  imageURL,
  mainTag,
  publishedAt,
  titre,
  postId,
  trendType,
}: {
  imageURL: string;
  mainTag: string;
  titre: string;
  authorName: string;
  publishedAt: string;
  postId: string;
  trendType?: Enum_Post_Type | null;
}) => {
  return (
    <div className="col-md-6">
      <div
        className="card card-overlay-bottom card-grid-sm [&>*:nth-child(1)]:hover:scale-110    "
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={imageURL} className="w-full h-full transition-all" />
        <div className="card-img-overlay d-flex align-items-center p-3">
          <div className="w-100 mt-auto">
            {/* <p className="badge text-bg-info mb-2">
                            {mainTag}
                        </p> */}
            <h4 className="text-white">
              <Link
                href={setHrefByType(trendType, postId, titre)}
                className="btn-link stretched-link text-reset"
              >
                {truncate(titre, 60)}
              </Link>
            </h4>
            {/* <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item position-relative">
                                <div className="nav-link">
                                    با{" "}
                                    <p
                                        className="stretched-link text-reset btn-link"
                                    >
                                        {authorName}
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">{new Date(publishedAt).toLocaleDateString("fa-IR")}</li>
                        </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
