"use client";

import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Phone,
  PieChart,
  Zap,
} from "lucide-react";
import Button from "../shared/Button";
import ReceiveMoneyModal from "../shared/ReceiveMoneyModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuickActions() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const actions = [
    {
      id: "send",
      title: "Send",
      subtitle: "Transfer funds",
      icon: ArrowUpRight,
      bgColor: "bg-blue-100",
      hoverBgColor: "group-hover:bg-blue-200",
      iconColor: "text-blue-600",
      hoverBorderColor: "hover:border-blue-500",
      hoverBgButton: "hover:bg-blue-50",
      onClick: () => { router.push("/send-money") },
    }, {
      id: "receive",
      title: "Receive",
      subtitle: "Request payment",
      icon: ArrowDownLeft,
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      iconColor: "text-green-600",
      hoverBorderColor: "hover:border-green-500",
      hoverBgButton: "hover:bg-green-50",
      onClick: () => setIsOpenModal(true),
    }, {
      id: "topup",
      title: "Top Up",
      subtitle: "Add money",
      icon: Plus,
      bgColor: "bg-indigo-100",
      hoverBgColor: "group-hover:bg-indigo-200",
      iconColor: "text-indigo-600",
      hoverBorderColor: "hover:border-indigo-500",
      hoverBgButton: "hover:bg-indigo-50",
    }, {
      id: "airtime",
      title: "Buy Airtime",
      subtitle: "Mobile top-up",
      icon: Phone,
      bgColor: "bg-orange-100",
      hoverBgColor: "group-hover:bg-orange-200",
      iconColor: "text-orange-600",
      hoverBorderColor: "hover:border-orange-500",
      hoverBgButton: "hover:bg-orange-50",
      onClick: () => { router.push("/send-money") },
    }, {
      id: "paybills",
      title: "Pay Bills",
      subtitle: "Electricity & more",
      icon: Zap,
      bgColor: "bg-yellow-100",
      hoverBgColor: "group-hover:bg-yellow-200",
      iconColor: "text-yellow-600",
      hoverBorderColor: "hover:border-yellow-500",
      hoverBgButton: "hover:bg-yellow-50",
      onClick: () => { router.push("/send-money") },
    }, {
      id: "analytics",
      title: "Analytics",
      subtitle: "Spending insights",
      icon: PieChart,
      bgColor: "bg-purple-100",
      hoverBgColor: "group-hover:bg-purple-200",
      iconColor: "text-purple-600",
      hoverBorderColor: "hover:border-purple-500",
      hoverBgButton: "hover:bg-purple-50",
      onClick: () => { router.push("/analytics") },
    },
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map(
            ({
              id,
              title,
              subtitle,
              icon: Icon,
              bgColor,
              hoverBgColor,
              iconColor,
              hoverBorderColor,
              hoverBgButton,
              onClick,
            }) => (
              <Button
                key={id}
                variant="outline"
                onClick={onClick}
                className={`flex flex-col cursor-pointer items-center p-4 h-full transition group ${hoverBorderColor} ${hoverBgButton}`}
              >
                <div
                  className={`p-3 rounded-full mb-3 transition ${bgColor} ${hoverBgColor}`}
                >
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </div>
                <span className="font-medium">{title}</span>
                <span className="text-xs text-gray-500 mt-1">{subtitle}</span>
              </Button>
            )
          )}
        </div>
      </div>

      {isOpenModal && (
        <ReceiveMoneyModal
          onClose={() => setIsOpenModal(false)}
          onOpen={isOpenModal}
        />
      )}
    </>
  );
}
