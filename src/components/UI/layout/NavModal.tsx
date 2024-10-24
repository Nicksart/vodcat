"use client"
import React, { useEffect } from "react";
import { Button } from "@/components"; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavModal = ({ isOpen, onClose }: ModalProps) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = ""; 
      };
    }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white z-50 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col gap-y-4 text-lg">
        <a
            href="#chart"
            rel="noopener noreferrer"
          >
          <Button
            type="yellow"
            text="Chart"
            className="py-3 px-4 xl:py-4 xl:px-5"
          />
          </a>
          <a
            href="#roadmap"
            rel="noopener noreferrer"
          >
          <Button
            type="yellow"
            text="Roadmap"
            className="py-3 px-4 xl:py-4 xl:px-5"
          />
          </a>
          <a
            href="#tokenomics"
            rel="noopener noreferrer"
          >
          <Button
            type="yellow"
            text="Tokenomics"
            className="py-3 px-4 xl:py-4 xl:px-5"
          />
          </a>
          <a
            href="https://t.me/vodcatsmemes"
            rel="noopener noreferrer"
            target="_blank"
          >
          <Button
            type="purple"
            text="Memes"
            withIcon="screener"
            className="py-3 px-4 xl:py-4 xl:px-5"
          />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/479ekZizdwB756KbtW3jeMAQ8p6ozKiX6XXKsihDYFRv?t=1726117532509"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="purple"
              text="Dextools"
              withIcon="tools"
              className="py-3 px-4 xl:py-4 xl:px-5"
            />
          </a>
        </div>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

