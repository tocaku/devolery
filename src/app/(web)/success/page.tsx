import Image from "next/image";
import { MapPin, Timer, DollarSign } from "lucide-react";

import { OrderFormData } from "../checkout/page";

export default function Success(props: OrderFormData) {
  console.log(props);

  return (
    <main className="flex flex-col gap-10 mt-20">
      <div className="space-y-1">
        <h2 className="text-yellow-900 text-3xl leading-tight font-black font-title">
          Уху! Заказ подтвержден{" "}
        </h2>
        <p className="leading-tight text-xl text-base-subtitle">
          Теперь вам остается только ждать, пока кофе дойдет до вас.{" "}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="p-10 space-y-8 border min-w-[526px] rounded-tl-md rounded-tr-5xl rounded-bl-5xl rounded-br-md border-purple-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>

            <div className="flex flex-col text-base-text leading-tight">
              <p>
                Доставка в <strong>В Киеве</strong>
              </p>
              <p>Киев</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <Timer className="w-4 h-4 text-white" />
            </div>

            <div className="flex flex-col text-base-text leading-tight">
              <p>Прогноз поставок</p>
              <strong>20 мин - 30 мин </strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-900 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>

            <div className="flex flex-col text-base-text leading-tight">
              <p>Оплата при доставке</p>
              <strong>Кредитная карта</strong>
            </div>
          </div>
        </div>

        <Image
          src={"/successillustration.png"}
          alt=""
          width={492}
          height={293}
        />
      </div>
    </main>
  );
}
