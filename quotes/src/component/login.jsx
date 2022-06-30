import React, { useState, useEffect } from "react";

export default function Login() {
  const [login, setlogin] = React.useState(false);
  const iflogin = !login ? "belum login" : "sudah login";
  alert(iflogin);
}
