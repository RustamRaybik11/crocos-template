import React from "react";
import Link from "../../../node_modules/next/link";
import { IBreadscrumb } from "../../constants/interfaces";
import ChevronRight from "../../icons/ChevronRight";

type Props = {
  breadscrumb: IBreadscrumb | undefined;
};

const BreadScrumbs: React.FC<Props> = ({ breadscrumb }) => {
  return (
    <div className="breadscrumbs">
      <ul>
        <li
          className={
            breadscrumb?.breadscrumb1?.current ? "breadscrumbs--current" : ""
          }
        >
          {breadscrumb?.breadscrumb1?.current
            ? breadscrumb?.breadscrumb1?.title
            : breadscrumb?.breadscrumb1?.link && (
                <Link href={breadscrumb?.breadscrumb1?.link}>
                  {breadscrumb?.breadscrumb1?.title}
                </Link>
              )}
        </li>
        {breadscrumb?.breadscrumb2 && (
          <span>
            <ChevronRight />
          </span>
        )}

        {breadscrumb?.breadscrumb2 && (
          <li
            className={
              breadscrumb?.breadscrumb2.current ? "breadscrumbs--current" : ""
            }
          >
            {breadscrumb?.breadscrumb2?.current ? (
              breadscrumb?.breadscrumb2?.title
            ) : (
              <Link href={breadscrumb.breadscrumb2.link ?? ""}>
                {breadscrumb.breadscrumb2.title}
              </Link>
            )}
          </li>
        )}

        {breadscrumb?.breadscrumb3 && (
          <span>
            <ChevronRight />
          </span>
        )}

        {breadscrumb?.breadscrumb3 && (
          <li
            className={
              breadscrumb?.breadscrumb3?.current ? "breadscrumbs--current" : ""
            }
          >
            {breadscrumb?.breadscrumb3?.current ? (
              breadscrumb?.breadscrumb3?.title
            ) : (
              <Link href={breadscrumb?.breadscrumb3?.link ?? ""}>
                {breadscrumb?.breadscrumb3?.title}
              </Link>
            )}
          </li>
        )}

        {breadscrumb?.breadscrumb4 && (
          <span>
            <ChevronRight />
          </span>
        )}

        {breadscrumb?.breadscrumb4 && (
          <li
            className={
              breadscrumb?.breadscrumb4?.current ? "breadscrumbs--current" : ""
            }
          >
            {breadscrumb?.breadscrumb4?.current ? (
              breadscrumb?.breadscrumb4?.title
            ) : (
              <Link href={breadscrumb?.breadscrumb4?.link ?? ""}>
                {breadscrumb?.breadscrumb4?.title}
              </Link>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default BreadScrumbs;
