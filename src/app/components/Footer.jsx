import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <a
          href="       https://beian.mps.gov.cn/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          皖ICP备2024061729号-1
        </a>

        <a
          href="http://www.beian.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/beian.png" // 路径对应public目录
            alt="公安备案图标"
            className="w-4 h-4 mr-1" // 通过Tailwind控制大小
            width={16}
            height={16}
          />
          皖公网安备34062102000226号
        </a>
      </div>
    </footer>
  );
};

export default Footer;
