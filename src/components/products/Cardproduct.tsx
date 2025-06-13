// src/components/Cardproduct.tsx
//import React from "react";

type CardProductProps = {
  image: string;
  title: string;
  title2: string;
  description: string;
};

export default function Cardproduct(props: CardProductProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="p-8 bg-sky-200 text-black rounded-2xl">
        <div className="justify-items-center">
          <img
            className="w-[300px] rounded-2xl"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div>
          <h2 className="pt-2 text-2xl">{props.title2}</h2>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="p-8 bg-sky-200 text-black rounded-2xl">
        <div className="justify-items-center">
          <img
            className="w-[300px] rounded-2xl"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div>
          <h2 className="pt-2 text-2xl">{props.title2}</h2>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="p-8 bg-sky-200 text-black rounded-2xl">
        <div className="justify-items-center">
          <img
            className="w-[300px] rounded-2xl"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div>
          <h2 className="pt-2 text-2xl">{props.title2}</h2>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
