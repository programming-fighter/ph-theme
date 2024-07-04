import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonWrapper = ({ children, fetchStatus, ...rest }: any) => {
  return (
    <>{fetchStatus === "idle" ? <>{children}</> : <Skeleton {...rest} />}</>
  );
};

export default SkeletonWrapper;
