import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "@/context/StateContext";

const success = () => {
  return <div>success</div>;
};

export default success;