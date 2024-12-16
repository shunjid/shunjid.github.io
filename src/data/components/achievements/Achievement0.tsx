import React from "react";

export default function Achievement0() {
  return (
    <div>
      <span className="font-semibold text-blue-900">
        {"2014 Felicitation for S.S.C Exam Result: "}
      </span>
      {"Received a medal and a certificate from the "}
      <a
        href="https://en.wikipedia.org/wiki/Sheikh_Hasina"
        className="font-semibold hover:underline"
        aria-label="Former Prime Minister of Bangladesh"
        target="_blank"
      >
        {"Former Prime Minister of Bangladesh"}
      </a>
      {` for outstanding performance in the Secondary School Certificate
      examination. The event was organized by Sheikh Russel Jatiyo Shishu
      Kishore Parishad.`}
    </div>
  );
}
