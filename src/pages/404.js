import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window !== "undefined") window.location = "/";
  }, []);
  return <></>
};
