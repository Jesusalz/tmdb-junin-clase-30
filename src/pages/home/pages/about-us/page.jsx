import React from "react";
import { achievments, team } from "./mocks";

export function AboutUsPage() {
  return (
    <div className="  text-gray-800 min-h-[100vh] py-10">
      <section className="space-y-8 h-[90vh] ">
        <div className="flex items-center gap-8  h-[60%] ">
          <section className="space-y-9 w-[80%]">
            <h2 className="text-5xl">Our Story</h2>

            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </section>

          <img
            src="/team.jpeg"
            alt="eccomerce team"
            className="rounded-lg h-full  "
          />
        </div>

        <div className="flex items-center gap-10 justify-center w-full">
          {achievments.map((e) => (
            <div className="size-56 border border-gray-300 rounded flex flex-col items-center   justify-center text-center gap-4">
              <div className="p-2 bg-gray-200 rounded-full text-white">
                <div className="p-4 bg-gray-800 rounded-full text-white">
                  <p className="text-4xl">{e.icon}</p>
                </div>
              </div>
              <b className="text-5xl">{e.value}</b>
              <p className="text-xs">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-10 justify-center pb-10 w-full ">
        {team.map((member) => (
          <div className="flex flex-col items-start  w-[30%]">
            <img
              src={member.image}
              alt={member.fullName}
              className="rounded-lg w-full aspect-square object-cover"
            />
            <br />
            <h3 className="text-2xl">{member.fullName}</h3>
            <p className="text-xs">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
